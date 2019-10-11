<?php


/**
 * Test block class
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
class Newsletter extends Base_Block {

	public function __construct() {

		// - Register the block for the editor
		// in the PHP side.
		register_block_type(
			'planet4-gpnl-blocks/' . $this->getKebabCaseClassName(),
			[
				'editor_script'   => 'planet4-gpnl-blocks',
				'render_callback' => [ $this, 'render' ],
				'attributes'      => [
					'title'          => [
						'type' => 'string',
						'default' => 'Mis geen van onze acties!'
					],
					'subtitle'       => [
						'type' => 'string',
						'default' => 'Laat merken dat de aarde ook van jou is. Meld je aan en je ontvangt iedere maand een actiemail.'
					],
					// in reality 'background' is actually the image ID.
					'background'     => [
						'type' => 'number',
					],
					'opacity'        => [
						'type'    => 'number',
						'default' => 30,
					],
					'focus_image'    => [
						'type'    => 'string',
						'default' => '50% 50%',
					],
					'marketingcode'  => [
						'type'    => 'string',
						'default' => '04950',
					],
					'literaturecode' => [
						'type'    => 'string',
						'default' => 'EN009'
					],
					'screenid'       => [
						'type'    => 'string',
						'default' => '250'
					],
					'form_id'        => [
						'type'        => 'number',
						'description' => 'Gebruik dit als er meerdere nieuwsbriefformulieren op 1 pagina staan. Elk formulier moet een uniek numeriek id hebben.',
						'default'     => 1,
					]
				]

			]

		);
		add_action( 'wp_enqueue_scripts', [ $this, 'enqueue_if_block_is_present' ] );
	}

	/**
	 * This will run before determining which template to load.
	 */
	public function enqueue_if_block_is_present() {

		// Check if the block is present on the page that is requested.
		if ( has_block( 'planet4-gpnl-blocks/' . $this->getKebabCaseClassName() ) ) {
			Asset_Enqueuer::enqueue_asset( 'newsletterFormSubmit', 'script',[], true );
			Asset_Enqueuer::enqueue_asset( 'newsletter', 'style' );		}
	}

	/**
	 * Get all the data that will be needed to render the block correctly.
	 *
	 * @param array $fields This is the array of fields of this block.
	 *
	 * @return array The data to be passed in the View.
	 */
	public function prepare_data( $fields ): array {

		// If an image is selected
		if ( isset( $fields['background'] ) && $image = wp_get_attachment_image_src( $fields['background'], 'full' ) ) {
			// load the image from the library
			$fields['backgroundimage_url']    = $image[0];
			$fields['backgroundimage_alt']    = get_post_meta( $fields['background'], '_wp_attachment_image_alt', true );
			$fields['backgroundimage_srcset'] = wp_get_attachment_image_srcset( $fields['background'], 'full', wp_get_attachment_metadata( $fields['background'] ) );
			$fields['backgroundimage__sizes'] = wp_calculate_image_sizes( 'full', null, null, $fields['background'] );
		}

		$data = [
			'fields' => $fields,
		];


		// Pass options to frontend code
		wp_localize_script(
			'newsletterFormSubmit',
			'newsletter_form_object_' . $fields['form_id'],
			[
				'ajaxUrl'        => admin_url( 'admin-ajax.php' ),
				'nonce'          => wp_create_nonce( 'GPNL_Newsletters' ),
				'marketingcode'  => $fields['marketingcode'],
				'literaturecode' => $fields['literaturecode'],
				'screenid'       => $fields['screenid'],
			]
		);

		return $data;
	}


}

function newsletter_form_process() {

	$nonce        = htmlspecialchars( wp_strip_all_tags( $_POST['nonce'] ) );
	$key_in_cache = wp_cache_get( $nonce, 'gpnl_cache' );
	if ( ! $key_in_cache ) {
		wp_send_json_error(
			[
				'statuscode' => 400,
			],
			500
		);
	}
	wp_cache_delete( $nonce, 'gpnl_cache' );

	// get codes for processing in the database and sanitize
	$marketingcode  = htmlspecialchars( wp_strip_all_tags( $_POST['marketingcode'] ) );
	$literatuurcode = htmlspecialchars( wp_strip_all_tags( $_POST['literaturecode'] ) );
	$screenid       = htmlspecialchars( wp_strip_all_tags( $_POST['screenid'] ) );

	// Get and sanitize the formdata
	$naam  = wp_strip_all_tags( $_POST['name'] );
	$email = wp_strip_all_tags( $_POST['mail'] );
	$human = wp_strip_all_tags( $_POST['human'] );

	if ( '' !== $human ) {
		wp_send_json_error(
			[
				'statuscode' => 400,
				// 'cUrlresult'    => $result,
			],
			500
		);
	}

	$data_array = [
		'voornaam'       => $naam,
		'email'          => $email,
		'marketingcode'  => $marketingcode,
		'literatuurcode' => $literatuurcode,
		'screenId'       => $screenid,
	];

	$data = wp_json_encode( $data_array );

	$url = 'https://www.mygreenpeace.nl/GPN.RegistrerenApi/register/email';

	// initiate a cUrl request to the database
	$request = curl_init( $url );
	curl_setopt( $request, CURLOPT_POSTFIELDS, $data );
	curl_setopt( $request, CURLOPT_CUSTOMREQUEST, 'POST' );
	curl_setopt( $request, CURLOPT_HEADER, true );
	curl_setopt(
		$request,
		CURLOPT_HTTPHEADER,
		[
			'Content-Type:application/json',
			'Content-Length: ' . strlen( $data ),
		]
	);
	curl_setopt( $request, CURLOPT_RETURNTRANSFER, true );

	$result   = curl_exec( $request );
	$httpcode = curl_getinfo( $request, CURLINFO_HTTP_CODE );
	curl_close( $request );

	// Give the appropriate response to the frontend
	if ( false === $result || 200 !== $httpcode ) {
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

// use this version for if you want the callback to work for users who are logged in.
add_action( 'wp_ajax_newsletter_form_process', 'P4NL_GB_BKS\Blocks\newsletter_form_process' );
// use this version for if you want the callback to work for users who are not logged in.
add_action( 'wp_ajax_nopriv_newsletter_form_process', 'P4NL_GB_BKS\Blocks\newsletter_form_process' );


function request_id() {

	// Generate an id and try to get it from cache.
	$unique_id       = hexdec( bin2hex( openssl_random_pseudo_bytes( 2 ) ) );
	$key_unavailable = wp_cache_get( $unique_id, 'gpnl_cache' );

	// If it's already in the cache, keep on trying to find a open position.
	while ( $key_unavailable ) {
		$unique_id       = hexdec( bin2hex( openssl_random_pseudo_bytes( 2 ) ) );
		$key_unavailable = wp_cache_get( $unique_id, 'gpnl_cache', true );
	}
	wp_cache_add( $unique_id, true, 'gpnl_cache', 300 );

	wp_send_json_success(
		[
			'nonce' => $unique_id,
		],
		200
	);
}


// use this version for if you want the callback to work for users who are logged in
add_action( 'wp_ajax_request_id', 'P4NL_GB_BKS\Blocks\request_id' );
// use this version for if you want the callback to work for users who are not logged in
add_action( 'wp_ajax_nopriv_request_id', 'P4NL_GB_BKS\Blocks\request_id' );
