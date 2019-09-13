<?php


/**
 * Hero Image block class
 *
 * @package P4NL_GB_BKS
 * @since 0.1
 */

namespace P4NL_GB_BKS\Blocks;


/**
 * @package P4BKS\Controllers\Blocks
 * @since 0.1
 */
class Petition extends Base_Block {

	public function __construct() {
		// - Register the block for the editor in the PHP side.
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
						'default' => 'Als je dit aanvinkt, mag Greenpeace je per e-mail op de hoogte houden over onze campagnes. Ook vragen we je af en toe om steun. Afmelden kan natuurlijk altijd.'

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
						'type' => 'text',
			'           default' => '/doneren'

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
					]
				]
			]
		);
	}

	/**
	 * Get the HTTP(S) URL of the current page.
	 *
	 * @param $server The $_SERVER superglobals array.
	 *
	 * @return string The URL.
	 */
	private function current_url( $server ): string {
		//Figure out whether we are using http or https.
		$http = 'http';
		//If HTTPS is present in our $_SERVER array, the URL should
		//start with https:// instead of http://
		if ( isset( $server['HTTPS'] ) ) {
			$http = 'https';
		}
		//Get the HTTP_HOST.
		$host = $server['HTTP_HOST'];
		//Get the REQUEST_URI. i.e. The Uniform Resource Identifier.
		$request_uri = strtok( $_SERVER['REQUEST_URI'], '?' );
		//Finally, construct the full URL.
		//Use the function htmlentities to prevent XSS attacks.
		return $http . '://' . htmlentities( $host ) . htmlentities( $request_uri );
	}

	/**
	 * Get the defined menu with social accounts for usage in sharing buttons
	 *
	 * @param $social_menu
	 *
	 * @return array
	 */
	private function get_social_accounts( $social_menu ): array {
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
						$social_accounts[ $brand ] = \count( $url_parts ) > 0 ? $url_parts[ \count( $url_parts ) - 1 ] : '';
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
	 * @param string $content The content of the post.
	 * @param string $shortcode_tag The shortcode tag (shortcake_blockname).
	 *
	 * @return string The complete html of the block
	 */
	public function prepare_data( $fields ): array {

		// Setting values as defaults that are not automatically saved by gutenberg (even though some default values are defined in the block, but these are not saved to the db).
		$fields['ad_campaign']  = ( empty( $fields['ad_campaign'] ) ) ? 'GP' : $fields['ad_campaign'];
		$fields['consent']      = ( empty( $fields['consent'] ) ) ? "Als je dit aanvinkt, mag Greenpeace je per e-mail op de hoogte houden over onze campagnes. Ook vragen we je af en toe om steun. Afmelden kan natuurlijk altijd." : $fields['consent'];
		$fields['countermin']   = ( empty( $fields['countermin'] ) ) ? 1000 : $fields['countermin'];
		$fields['countermax']   = ( empty( $fields['countermax'] ) ) ? 5000 : $fields['countermax'];
		$fields['apref']        = ( empty( $fields['apref'] ) ) ? 1000 : $fields['apref'];
		$fields['countertext']  = ( empty( $fields['countertext'] ) ) ? 'handtekeningen' : $fields['countertext'];
		$fields['ga_action']    = ( empty( $fields['ga_action'] ) ) ? 'Petitie' : $fields['ga_action'];
		$fields['jalt_track']   = ( empty( $fields['jalt_track'] ) ) ? 'Lead' : $fields['jalt_track'];
		$fields['form_id']      = ( empty( $fields['form_id'] ) ) ? 1 : $fields['form_id'];
		$fields['twittertext']  = ( empty( $fields['twittertext'] ) ) ? '' : $fields['twittertext'];
		$fields['campaigncode'] = ( empty( $fields['campaigncode'] ) ) ? '' : $fields['campaigncode'];


//		echo '<pre>', var_dump($fields) , '</pre>';

		// If an image is selected
		if ( isset( $fields['image'] ) && $image = wp_get_attachment_image_src( $fields['image'], 'full' ) ) {
			// load the image from the library
			$fields['image']        = $image[0];
			$fields['alt_text']     = get_post_meta( $fields['image'], '_wp_attachment_image_alt', true );
			$fields['image_srcset'] = wp_get_attachment_image_srcset( $fields['image'], 'full', wp_get_attachment_metadata( $fields['image'] ) );
			$fields['image_sizes']  = wp_calculate_image_sizes( 'full', null, null, $fields['image'] );
		}

		// Fetch the data from the social accounts and the current url for sharing buttons
		$social_menu               = wp_get_nav_menu_items( 'Footer Social' );
		$fields['social_accounts'] = $this->get_social_accounts( $social_menu );
		$fields['current_url']     = $this->current_url( $_SERVER );
		$fields['twittertext']     = rawurlencode( $fields['twittertext'] );

		$fields['isloggedin'] = is_user_logged_in();
		$fields['lastedit']   = get_the_modified_author();
		$fields['author']     = get_the_author();

		$data = [
			'fields' => $fields,
		];

		// Include de approptiate scripts for ad campaign tracking
		if ( 'SB' === $fields['ad_campaign'] ) {
			wp_enqueue_script( 'social-blue-landing-script', P4NL_GB_BKS_PLUGIN_URL . 'assets/build/socialBlueLanding.js', [], '2.3.6', true );
		} elseif ( 'JA' === $fields['ad_campaign'] ) {
			wp_enqueue_script( 'jalt-landing-script', P4NL_GB_BKS_PLUGIN_URL . 'assets/build/jaltLanding.js', [], '2.3.6', true );
		}

		//  Include the script and styling for the counter
		wp_enqueue_script( 'petitioncounterjs', P4NL_GB_BKS_PLUGIN_URL . 'assets/build/onload.js', [
			'jquery',
			'jquery-effects-core'
		], '2.6.9', true );
		wp_enqueue_style( 'petitioncountercss', P4NL_GB_BKS_PLUGIN_URL . 'assets/build/petition.min.css', [], '2.11.4' );

//		var_dump(P4NL_GB_BKS_ASSETS_DIR);
//		var_dump(P4NL_GB_BKS_PLUGIN_URL);

		/* ========================
			C S S / JS
		   ======================== */
		// Enqueue the script:
		wp_enqueue_script( 'jquery-docready-script', P4NL_GB_BKS_PLUGIN_URL . 'assets/build/onsubmit.js', [ 'jquery' ], '2.11.4', true );

		// Pass options to frontend code
		wp_localize_script(
			'jquery-docready-script',
			'petition_form_object_' . $fields['form_id'],
			array(
				'ajaxUrl'            => admin_url( 'admin-ajax.php' ),
				//url for php file that process ajax request to WP
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
		// Shortcode callbacks must return content, hence, output buffering here.
//		ob_start();
//		$this->view->block( self::BLOCK_NAME, $data );
//
//		return ob_get_clean();

		return $data;

	}

}

/* ========================
	P E T I T I O N F O R M
======================== */
function petition_form_process() {
	// First check if the nonce is correct
	check_ajax_referer( 'GPNL_Petitions', 'nonce' );

	// get petition specific codes for processing in the database and sanitize
	$marketingcode  = htmlspecialchars( wp_strip_all_tags( $_POST['marketingcode'] ) );
	$literatuurcode = htmlspecialchars( wp_strip_all_tags( $_POST['literaturecode'] ) );

	// Get and sanitize the formdata
	$naam  = wp_strip_all_tags( $_POST['name'] );
	$email = wp_strip_all_tags( $_POST['mail'] );

	// Accept only numeric characters in the phonenumber
	$phonenumber = preg_replace( '/[^0-9]/', '', wp_strip_all_tags( $_POST['phone'] ) );
	// Remove countrycode from phonenumber
	if ( \strlen( $phonenumber ) === 13 && ! strpos( $phonenumber, '0031' ) ) {
		$phonenumber = substr( $phonenumber, 2 );
	}
	if ( \strlen( $phonenumber ) === 11 && ! strpos( $phonenumber, '31' ) ) {
		$phonenumber = str_replace( '31', '0', $phonenumber );
	}
	// Accept only phonenumbers of 10 characters long
	$phonenumber = ( \strlen( $phonenumber ) === 10 ? $phonenumber : '' );

	// Flip the consent checkbox
	$consent = htmlspecialchars( wp_strip_all_tags( $_POST['consent'] ) );
	$consent = ( 'on' === $consent ? 0 : 1 );

	$baseurl     = 'https://www.mygreenpeace.nl/registreren/pixel.aspx';
	$querystring = '?source=' . $marketingcode . '&per=' . $literatuurcode . '&fn=' . $naam . '&email=' . $email . '&tel=' . $phonenumber . '&stop=' . $consent;

	// initiate a cUrl request to the database
	$request = curl_init( $baseurl . $querystring );
	curl_setopt( $request, CURLOPT_FOLLOWLOCATION, 1 );
	curl_setopt( $request, CURLOPT_HEADER, 0 );
	curl_setopt( $request, CURLOPT_RETURNTRANSFER, 1 );

	$result   = curl_exec( $request );
	$httpcode = curl_getinfo( $request, CURLINFO_HTTP_CODE );
	curl_close( $request );

	// Give the appropriate response to the frontend
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
			'statuscode' => $httpcode,
		],
		200
	);

}

# use this version for if you want the callback to work for users who are logged in
add_action( 'wp_ajax_petition_form_process', 'P4NL_GB_BKS\Controllers\Blocks\petition_form_process' );
# use this version for if you want the callback to work for users who are not logged in
add_action( 'wp_ajax_nopriv_petition_form_process', 'P4NL_GB_BKS\Controllers\Blocks\petition_form_process' );


