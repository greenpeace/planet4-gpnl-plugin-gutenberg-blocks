<?php
/**
 * Petition block class
 *
 * @package P4NL_GB_BKS
 * @since 0.1
 */

namespace P4NL_GB_BKS\Blocks;

use function count;
use function strlen;

/**
 * Defines the serverside of the Gutenberg Petitionblock
 *
 * @package P4BKS\Controllers\Blocks
 * @since 0.1
 */
class Petition extends Base_Block {


	/**
	 * Define the fields and exposed functions to Gutenberg
	 */
	public function __construct() {
		register_block_type(
			'planet4-gpnl-blocks/' . $this->getKebabCaseClassName(),
			[
				'editor_script'   => 'planet4-gpnl-blocks',
				'render_callback' => [ $this, 'render' ],
				'attributes'      => [
					'title'              => [
						'type' => 'text',
					],
					'subtitle'           => [
						'type' => 'text',
					],
					'image'              => [
						'type' => 'number',
					],
					'consent'            => [
						'type'    => 'text',
						'default' => 'Als je dit aanvinkt, mag Greenpeace je per e-mail op de hoogte houden over onze campagnes. Ook vragen we je af en toe om steun. Afmelden kan natuurlijk altijd.',
					],
					'sign'               => [
						'type'    => 'text',
						'default' => 'teken',
					],
					'campaignpolicy'     => [
						'type' => 'text',
					],
					'thanktitle'         => [
						'type' => 'text',
					],
					'thanktext'          => [
						'type' => 'text',
					],
					'donatebuttontext'   => [
						'type' => 'text',
					],
					'donatebuttonlink'   => [
						'type'    => 'text',
						'default' => '/doneren',
					],
					'hidesharingbuttons' => [
						'type' => 'boolean',
					],
					'twittertext'        => [
						'type' => 'text',
					],
					'whatsapptext'       => [
						'type' => 'text',
					],
					'marketingcode'      => [
						'type' => 'text',
					],
					'literaturecode'     => [
						'type' => 'text',
					],
					'campaigncode'       => [
						'type' => 'text',
					],
					'countermin'         => [
						'type' => 'number',
					],
					'countermax'         => [
						'type' => 'number',
					],
					'countertext'        => [
						'type' => 'text',
					],
					'ga_action'          => [
						'type' => 'text',
					],
					'ad_campaign'        => [
						'type' => 'text',
					],
					'apref'              => [
						'type' => 'text',
					],
					'jalt_track'         => [
						'type' => 'text',
					],
					'form_id'            => [
						'type' => 'number',
					],
				],
			]
		);
	}

	/**
	 * Get the HTTP(S) URL of the current page.
	 *
	 * @param array $server The $_SERVER superglobals array.
	 *
	 * @return string The URL.
	 */
	private function current_url( $server ): string {
		// Get the HTTP_HOST.
		$host = $server['HTTP_HOST'];
		// Get the REQUEST_URI. i.e. The Uniform Resource Identifier.
		$request_uri = strtok( $_SERVER['REQUEST_URI'], '?' );
		// Finally, construct the full URL.
		// Use the function htmlentities to prevent XSS attacks.
		return 'https://' . htmlentities( $host ) . htmlentities( $request_uri );
	}

	/**
	 * Get the defined menu with social accounts for usage in sharing buttons
	 *
	 * @return array
	 */
	private function get_social_accounts(): array {
		$social_menu     = wp_get_nav_menu_items( 'Footer Social' );
		$social_accounts = [];
		if ( null !== $social_menu ) {

			$brands = [
				'facebook',
				'twitter',
				'youtube',
				'instagram',
			];
			foreach ( $social_menu as $social_menu_item ) {
				$url_parts = explode( '/', rtrim( $social_menu_item->url, '/' ) );
				foreach ( $brands as $brand ) {
					if ( false !== strpos( $social_menu_item->url, $brand ) ) {
						$social_accounts[ $brand ] = count( $url_parts ) > 0 ? $url_parts[ count( $url_parts ) - 1 ] : '';
					}
				}
			}
		}

		return $social_accounts;
	}


	/**
	 * Callback for the shortcake_twocolumn shortcode.
	 * It renders the shortcode based on supplied attributes.
	 *
	 * @param array $fields Array of fields that are to be used in the template.
	 *
	 * @return array The complete html of the block
	 */
	public function prepare_data( $fields ): array {

		// Setting values as defaults that are not automatically saved by gutenberg (even though some default values are defined in the block, but these are not saved to the db).
		$fields['ad_campaign']  = ( empty( $fields['ad_campaign'] ) ) ? 'GP' : $fields['ad_campaign'];
		$fields['consent']      = ( empty( $fields['consent'] ) ) ? 'Als je dit aanvinkt, mag Greenpeace je per e-mail op de hoogte houden over onze campagnes. Ook vragen we je af en toe om steun. Afmelden kan natuurlijk altijd.' : $fields['consent'];
		$fields['countermin']   = ( empty( $fields['countermin'] ) ) ? 1000 : $fields['countermin'];
		$fields['countermax']   = ( empty( $fields['countermax'] ) ) ? 5000 : $fields['countermax'];
		$fields['apref']        = ( empty( $fields['apref'] ) ) ? '' : $fields['apref'];
		$fields['countertext']  = ( empty( $fields['countertext'] ) ) ? 'handtekeningen' : $fields['countertext'];
		$fields['ga_action']    = ( empty( $fields['ga_action'] ) ) ? 'Petitie' : $fields['ga_action'];
		$fields['jalt_track']   = ( empty( $fields['jalt_track'] ) ) ? 'Lead' : $fields['jalt_track'];
		$fields['form_id']      = ( empty( $fields['form_id'] ) ) ? 1 : $fields['form_id'];
		$fields['twittertext']  = ( empty( $fields['twittertext'] ) ) ? '' : $fields['twittertext'];
		$fields['campaigncode'] = ( empty( $fields['campaigncode'] ) ) ? '' : $fields['campaigncode'];

		if ( isset( $fields['image'] ) && $image = wp_get_attachment_image_src( $fields['image'], 'full' ) ) {
			$fields['image']        = $image[0];
			$fields['alt_text']     = get_post_meta( $fields['image'], '_wp_attachment_image_alt', true );
			$fields['image_srcset'] = wp_get_attachment_image_srcset( $fields['image'], 'full', wp_get_attachment_metadata( $fields['image'] ) );
			$fields['image_sizes']  = wp_calculate_image_sizes( 'full', null, null, $fields['image'] );
		}

		// Fetch the data from the social accounts and the current url for sharing buttons.
		$fields['social_accounts'] = $this->get_social_accounts();
		$fields['current_url']     = $this->current_url( $_SERVER );
		$fields['twittertext']     = rawurlencode( $fields['twittertext'] );

		$fields['isloggedin'] = is_user_logged_in();
		$fields['lastedit']   = get_the_modified_author();
		$fields['author']     = get_the_author();

		$data = [
			'fields' => $fields,
		];

		// Include de approptiate scripts for ad campaign tracking.
		if ( 'SB' === $fields['ad_campaign'] ) {
			wp_enqueue_script( 'social-blue-landing-script', P4NL_GB_BKS_PLUGIN_URL . 'assets/build/socialBlueLanding.js', [], '2.3.6', true );
		} elseif ( 'JA' === $fields['ad_campaign'] ) {
			wp_enqueue_script( 'jalt-landing-script', P4NL_GB_BKS_PLUGIN_URL . 'assets/build/jaltLanding.js', [], '2.3.6', true );
		}

		// Include the script and styling for the counter.
		wp_enqueue_script(
			'petitioncounterjs',
			P4NL_GB_BKS_PLUGIN_URL . 'assets/build/onload.js',
			[
				'jquery',
				'jquery-effects-core',
			],
			'2.6.9',
			true
		);
		wp_enqueue_style( 'petitioncountercss', P4NL_GB_BKS_PLUGIN_URL . 'assets/build/petition.min.css', [], '2.11.4' );

		/**
		*========================
		* CSS / JS
		 */
		wp_enqueue_script( 'jquery-docready-script', P4NL_GB_BKS_PLUGIN_URL . 'assets/build/onsubmit.js', [ 'jquery' ], '2.11.4', true );

		// Pass options to frontend code.
		wp_localize_script(
			'jquery-docready-script',
			'petition_form_object_' . $fields['form_id'],
			array(
				'ajaxUrl'            => admin_url( 'admin-ajax.php' ),
				'nonce'              => wp_create_nonce( 'GPNL_Petitions' ),
				'analytics_campaign' => $fields['campaigncode'],
				'countermin'         => $fields['countermin'],
				'countermax'         => $fields['countermax'],
				'countertext'        => $fields['countertext'],
				'ga_action'          => $fields['ga_action'],
				'ad_campaign'        => $fields['ad_campaign'],
				'apref'              => $fields['apref'],
				'jalt_track'         => $fields['jalt_track'],
			)
		);

		return $data;

	}

}

/**
 * AJAX callback for the frontend code for submitting petition data
 *
 * @return void
 */
function petition_form_process() {
	if ( ! defined( $_POST ) ) {
		return;
	}

	// Add back GPNL nonce.
	$_POST          = wp_unslash( $_POST );
	$marketingcode  = htmlspecialchars( wp_strip_all_tags( $_POST['marketingcode'] ) );
	$literatuurcode = htmlspecialchars( wp_strip_all_tags( $_POST['literaturecode'] ) );

	// Get and sanitize the formdata
	$naam  = wp_strip_all_tags( $_POST['name'] );
	$email = wp_strip_all_tags( $_POST['mail'] );
	$phonenumber = validate_phonenumber( wp_strip_all_tags( $_POST['phone'] ) );

	$known = check_known( 'mail', $email );
	$mail  = $known['response'];
	if ( intval( $known['code'] ) >= 400 ) {
		$mail = $known['code'];
	}

	$known = check_known( 'telnr', $phonenumber );
	$tel   = $known['response'];
	if ( intval( $known['code'] ) >= 400 ) {
		$tel = $known['code'];
	}

	// Flip the consent checkbox
	$consent = htmlspecialchars( wp_strip_all_tags( $_POST['consent'] ) );
	$consent = ( 'on' === $consent ? 0 : 1 );

	$data_array = [
		'source' => $marketingcode,
		'per'    => $literatuurcode,
		'fn'     => $naam,
		'email'  => $email,
		'tel'    => $phonenumber,
		'stop'   => $consent,
	];

	$options     = get_option( 'planet4nl_options' );
	$baseurl     = $options['petitionpixel_url'];
	$querystring = http_build_query( $data_array );

	// initiate a cUrl request to the database.
	// phpcs:disable
	$request = curl_init( $baseurl . $querystring );
	curl_setopt( $request, CURLOPT_FOLLOWLOCATION, 1 );
	curl_setopt( $request, CURLOPT_HEADER, 0 );
	curl_setopt( $request, CURLOPT_RETURNTRANSFER, 1 );

	$result   = curl_exec( $request );
	$httpcode = curl_getinfo( $request, CURLINFO_HTTP_CODE );
	curl_close( $request );
	// phpcs:enable

	// Give the appropriate response to the frontend.
	if ( false === $result ) {
		wp_send_json_error(
			[
				'statuscode' => $httpcode,
			],
			500
		);
	}
	wp_send_json_success(
		[
			'statuscode'     => $httpcode,
			'phonesanitized' => $phonenumber,
			'mailresult'     => $mail,
			'phoneresult'    => $tel,
		],
		200
	);

}
// Add AJAX callbacks for both logged-in and public users.
add_action( 'wp_ajax_petition_form_process', 'P4NL_GB_BKS\Controllers\Blocks\petition_form_process' );
add_action( 'wp_ajax_nopriv_petition_form_process', 'P4NL_GB_BKS\Controllers\Blocks\petition_form_process' );

/**
 * Make sure the submitted phonenumber complies with the database requirements
 *
 * @param string $phonenumber The submitted data.
 *
 * @return string $phonenumber The validated data
 */
function validate_phonenumber( $phonenumber ) : string {
	// Accept only numeric characters in the phonenumber.
	$phonenumber = preg_replace( '/[^0-9]/', '', $phonenumber );

	// Remove countrycode from phonenumber.
	if ( strlen( $phonenumber ) === 13 && ! strpos( $phonenumber, '0031' ) ) {
		$phonenumber = substr( $phonenumber, 2 );
	}
	if ( strlen( $phonenumber ) === 11 && ! strpos( $phonenumber, '31' ) ) {
		$phonenumber = str_replace( '31', '0', $phonenumber );
	}

	// Accept only phonenumbers of 10 characters long.
	$phonenumber = ( strlen( $phonenumber ) === 10 ? $phonenumber : '' );

	return $phonenumber;
}

/**
 *  Checks whether the submitted data is already present in the backend.
 *
 * @param string $request The case (phone/mail) which should be processed.
 * @param string $data The data to be checked.
 *
 * @return array Return an array indicating if the data was already present
 */
function check_known( $request, $data ) {
	$options  = get_option( 'planet4nl_options' );
	$base_url = '';

	switch ( $request ) {
		case 'mail':
			$base_url = $options['knownemail_url'];
			break;
		case 'telnr':
			$base_url = $options['knownphone_url'];
			break;
	}

	$url             = $base_url . '?' . $request . '=' . rawurlencode( $data );
	$args['headers'] = [
		'Origin' => 'https://www.greenpeace.org',
	];

	$response = wp_remote_get( $url, $args );
	if ( is_array( $response ) ) {
		$http_code = wp_remote_retrieve_response_code( $response );
		$body      = substr( wp_remote_retrieve_body( $response ), 5 );
		$success   = substr( $body, 0, strlen( $body ) - 2 );
		$success   = 'true' === $success ? true : false;
		return [
			'code'     => $http_code,
			'response' => $success,
		];
	}
	return [
		'code'     => 500,
		'response' => null,
	];
}
