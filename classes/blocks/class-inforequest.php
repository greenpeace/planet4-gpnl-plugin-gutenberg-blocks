<?php


/**
 * Petition block class
 *
 * @package P4NL_GB_BKS
 * @since 0.1
 */

namespace P4NL_GB_BKS\Blocks;


use P4NL_GB_BKS\Services\Asset_Enqueuer;

/**
 * @package P4BKS\Controllers\Blocks
 * @since 0.1
 */
class Inforequest extends Base_Block {

	public function __construct() {

		// - Register the block for the editor in the PHP side.
		register_block_type(
			'planet4-gpnl-blocks/' . $this->getKebabCaseClassName(),
			[
				'editor_script'   => 'planet4-gpnl-blocks',
				'render_callback' => [ $this, 'render' ],
				'attributes'      => [
					'formtitle'    => [
						'type' => 'text',
					],
					'itemtitle'    => [
						'type' => 'text',
					],
					'mcode1_code'  => [
						'type' => 'text',
					],
					'mcode1_label' => [
						'type' => 'text',
					],
					'mcode2_code'  => [
						'type' => 'text',
					],
					'mcode2_label' => [
						'type' => 'text',
					],
					'mcode3_code'  => [
						'type' => 'text',
					],
					'mcode3_label' => [
						'type' => 'text',
					],
					'mcode4_code'  => [
						'type' => 'text',
					],
					'mcode4_label' => [
						'type' => 'text',
					],
					'mcode5_code'  => [
						'type' => 'text',
					],
					'mcode5_label' => [
						'type' => 'text',
					],
					'consent'      => [
						'type'    => 'text',
						'default' => 'Als je dit aanvinkt, mag Greenpeace je per e-mail op de hoogte houden over onze campagnes. Ook vragen we je af en toe om steun. Afmelden kan natuurlijk altijd.'
					],
					'sign'         => [
						'type'    => 'text',
						'default' => 'Registreer',
					],
					'hider'        => [
						'type'    => 'text',
						'default' => '0'
					]
				]
			]
		);
		add_action( 'wp_enqueue_scripts', [ $this, 'enqueue_if_block_is_present' ] );

		add_action( 'wp_ajax_request_form_process', [ $this, 'request_form_process' ] );
		add_action( 'wp_ajax_nopriv_request_form_process', [ $this, 'request_form_process' ] );

		add_action( 'wp_ajax_check_form_process', [ $this, 'check_form_process' ] );
		add_action( 'wp_ajax_nopriv_check_form_process', [ $this, 'check_form_process' ] );

		add_action( 'wp_ajax_nopriv_get_address', [ $this, 'get_address' ] );
		add_action( 'wp_ajax_get_address', [ $this, 'get_address' ] );
	}

	/**
	 * This will run before determining which template to load.
	 */
	public function enqueue_if_block_is_present() {

		// Check if the block is present on the page that is requested.
		if ( has_block( 'planet4-gpnl-blocks/' . $this->getKebabCaseClassName() ) ) {
			Asset_Enqueuer::enqueue_asset( 'inforequest', 'style' );
			Asset_Enqueuer::enqueue_asset( 'inforequestHelper', 'script', [], true );
			Asset_Enqueuer::enqueue_asset( 'addressAutofill', 'script', [], true );
		}
	}

	private function isMarketingcodeAttribute( $string ) {
		return 0 === strpos( $string, 'mcode' );
	}


	/**
	 * Callback for the shortcake_twocolumn shortcode.
	 * It renders the shortcode based on supplied attributes.
	 *
	 * @param array $fields Array of fields that are to be used in the template.
	 * @param string $content The content of the post.
	 * @param string $shortcode_tag The shortcode tag (shortcake_blockname).
	 *
	 * @return string The complete html of the block
	 */
	public function prepare_data( $fields ): array {

		global $post;

		$parent = wp_get_canonical_url( $post->post_parent );

		$mcode_attributes = array_filter( $fields, [ $this, 'isMarketingcodeAttribute' ], ARRAY_FILTER_USE_KEY );
		$sorted_mcodes    = [];
		$postfixes        = [ '_code', '_label' ];
		for ( $i = 1; $i < 6; $i ++ ) {
			$key = 'mcode' . $i;
			foreach ( $postfixes as $postfix ) {
				if ( isset( $mcode_attributes[ $key . $postfix ] ) ) {
					if ( '' === $mcode_attributes[ $key . $postfix ] ) {
						continue;
					}
					$sorted_mcodes[ $i ][ $postfix ] = $mcode_attributes[ $key . $postfix ];
				}
			}
		}

		$fields['mcodes'] = $sorted_mcodes;

		$data = [
			'fields' => $fields,
			'parent' => $parent,
		];

		// Pass options to frontend code.
		wp_localize_script(
			'inforequestHelper',
			'request_form_object',
			[
				'ajaxUrl'        => admin_url( 'admin-ajax.php' ),
				'nonce'          => wp_create_nonce( 'inforequest_helper' ),
				'literaturecode' => '04935',
				'hider'          => $fields['hider'],
			]
		);

		// Pass option for address autofill to frontend code.
		wp_localize_script(
			'addressAutofill',
			'get_address_object',
			[
				'ajaxUrl' => admin_url( 'admin-ajax.php' ),
				'nonce'   => wp_create_nonce( 'GPNL_get_address' ),
			]
		);

		return $data;
	}

	public function request_form_process() {

		// get codes for processing in the database and sanitize
		$literatuurcode = htmlspecialchars( wp_strip_all_tags( $_POST['literaturecode'] ) );

		// Get and sanitize the formdata
		$firstname           = wp_strip_all_tags( $_POST['name'] );
		$surname             = wp_strip_all_tags( $_POST['surname'] );
		$schoolname          = wp_strip_all_tags( $_POST['schoolname'] );
		$postalcode          = wp_strip_all_tags( $_POST['postal-code'] );
		$housenumber         = wp_strip_all_tags( $_POST['housenumber'] );
		$housenumberaddition = wp_strip_all_tags( $_POST['housenumberaddition'] );
		$subscription        = wp_strip_all_tags( $_POST['subscription'] );
		$email               = wp_strip_all_tags( $_POST['mail'] );
		$human               = wp_strip_all_tags( $_POST['human'] );

		if ( '' !== $human ) {
			wp_send_json_error(
				[
					'statuscode' => 400,
				],
				500
			);
		}

		$viewstate        = '__VIEWSTATE=%2FwEPDwUJODM1ODY2MzcwD2QWAgIFD2QWDAIBDxYCHgdWaXNpYmxlaBYCAgEPDxYCHwBoZGQCCw8PFgQeCENzc0NsYXNzBQ5MVl92YWxpZF9maWVsZB4EXyFTQgICFgIeBm9uQmx1cgUWZ2V0U3RyZWV0QW5kQ2l0eSh0aGlzKWQCDQ8PFgQfAQUOTFZfdmFsaWRfZmllbGQfAgICFgIfAwUWZ2V0U3RyZWV0QW5kQ2l0eSh0aGlzKWQCEQ8PFgIeBFRleHQFC0JldWtlbnBsZWluZGQCEw8PFgIfBAUJQU1TVEVSREFNZGQCHQ8PFgIfBGVkZGRBJmxdGtoaSLo%2F4Yi4X9hGSG3BwbhVvG%2FGOq834aaRQw%3D%3D';
		$eventtvalidation = '&__EVENTVALIDATION=%2FwEdABF3LI3RPuN7VHIB%2FiC9SlnC5sFTdyioL9pc1FvWQxJrID4jDC7t6U5%2BT1Fxh8AN9w2o09zcEmiclrRScTXzJ8FlQ9MQqRNiLV4OC1bGEeyI2u30iXrw69nPdRKAWw4ecGXEvqGbohdYyespYGy1DHDpUDt%2FnXA9JX91mkdr03M6%2B0hWWUwWWgRWz8A804pl68fKkRvhDumKNu%2F2zV1hQX9mQwdmH1m48FGJ7a8D8d%2BhEstn5%2BZCICZ19mqj6AzHUngialgueJ0eEOhAI8Wb89daj6AQmA6qRm%2BF%2FBwR5oQ46vlHvbRgi3aNqiRYRyUhmic85pbWlDO2hADfoPXD%2F5tdhHaoPqq3GUazmx9aagqOG%2BUDf6sSkQbZaH85xqArAoJeZOGMF%2B00SrRbKPtRrkrQ';

		$data_array = [
			'txtVoornaamDocent' => $firstname,
			'txtTussenvoegsel'  => '',
			'txtAchternaam'     => $surname,
			'txtNaamSchool'     => $schoolname,
			'txtPostcode'       => $postalcode,
			'txtNummer'         => $housenumber,
			'txtToev'           => $housenumberaddition,
			'txtEmail'          => $email,
			'ddlEN'             => $subscription,
			'btnSubmit'         => 'Registreer',
		];

		$data = $viewstate . $eventtvalidation . '&' . http_build_query( $data_array );

		$url = 'https://www.mygreenpeace.nl/registreren/schoolaanmelding.aspx?source=' . $literatuurcode;

		// initiate a cUrl request to the database
		$request = curl_init( $url );
		curl_setopt( $request, CURLOPT_POSTFIELDS, $data );
		curl_setopt( $request, CURLOPT_POST, 1 );
		curl_setopt( $request, CURLOPT_HEADER, true );
		curl_setopt(
			$request,
			CURLOPT_HTTPHEADER,
			[
				'Content-Length: ' . strlen( $data ),
			]
		);
		curl_setopt( $request, CURLOPT_RETURNTRANSFER, true );

		curl_exec( $request );
		$http_code     = curl_getinfo( $request, CURLINFO_HTTP_CODE );
		$http_location = curl_getinfo( $request, CURLINFO_REDIRECT_URL );
		curl_close( $request );

		$errorpage   = '/registreren/errorpage.htm?aspxerrorpath=/registreren/schoolaanmelding.aspx';
		$iserrorpage = ( false !== strpos( $http_location, $errorpage ) ? 1 : 0 );

		// Give the appropriate response to the frontend
		if ( $http_code >= 400 || $iserrorpage || 0 === $http_code ) {
			wp_send_json_error(
				[
					'statuscode' => $http_code,
				],
				500
			);
		}
		wp_send_json_success(
			[
				'statuscode' => $http_code,
			],
			200
		);
	}

	/**
	 * Get address with API call.
	 */
	public function get_address() {

		// getting the options from the gnnp-settings where the API-key and API-URL are stored.
		$options = get_option( 'planet4nl_options' );

		// Get data from form and validate
		$zipcode = wp_strip_all_tags( $_POST['zipcode'] );
		$this->validate_zipcode( $zipcode ) or die();
		$house_no = wp_strip_all_tags( $_POST['house_no'] );
		is_numeric($house_no) or die();

		$data_array = [
			'postcode'   => $zipcode,
			'huisnummer' => $house_no,
			'wachtwoord' => $options['gpnl_api_key']
		];

		$data = wp_json_encode( $data_array );

		// URL for production
		$url = $options['register_url'] . '/validate/postcode?api_key='.$options['gpnl_api_key'];

		$curl = curl_init( $url );

		// API call options:
		curl_setopt( $curl, CURLOPT_POSTFIELDS, $data );
		curl_setopt( $curl, CURLOPT_URL, $url );
		curl_setopt( $curl, CURLOPT_HTTPHEADER,
			[
				'Content-Type:application/json',
				'Content-Length: ' . strlen( $data )
			]
		);
		curl_setopt( $curl, CURLOPT_CUSTOMREQUEST, "POST" );
		curl_setopt( $curl, CURLOPT_RETURNTRANSFER, 1 );
		curl_setopt( $curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC );


		// Execute API call
		$result = json_decode( curl_exec( $curl ) );
		// Get HTTP statuscode
		$http_code = curl_getinfo( $curl, CURLINFO_HTTP_CODE );

		curl_close( $curl );

		// Give the appropriate response to the frontend
		if ( false === $result || 200 !== $http_code ) {
			wp_send_json_error(
				[
					'url' => $url,
					'statuscode' => $http_code,
				],
				$http_code
			);
		}

		wp_send_json_success(
			[
				'statuscode' => $http_code,
				'cUrlresult' => $result,
			],
			$http_code
		);
	}

	public function check_form_process() {

		$email           = wp_strip_all_tags( $_POST['mail'] );
		$url             = 'https://secure.greenpeacephp.nl/kenikdeze.php?mail=' . rawurlencode( $email );
		$args['headers'] = [
			'Origin' => 'https://www.greenpeace.org',
		];

		$response = wp_remote_get( $url, $args );
		if ( is_array( $response ) ) {
			$http_code = wp_remote_retrieve_response_code( $response );
			$body      = substr( wp_remote_retrieve_body( $response ), 5 );
			$success   = substr( $body, 0, strlen( $body ) - 2 );
			$success   = $success === 'true' ? true : false;
			$test      = gettype( $success );
		}

		if ( $http_code >= 400 || ! $success ) {
			wp_send_json_error(
				null,
				500
			);
		}
		wp_send_json_success(
			null,
			200
		);
	}

	public function validate_zipcode($zipcode)
	{
		$regex = '/^(?:NL-)?(\d{4})\s*([A-Z]{2})$/i';

		if ( preg_match($regex,$zipcode) ) {
			return true;
		}
	}
}
