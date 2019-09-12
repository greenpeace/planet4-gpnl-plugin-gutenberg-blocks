<?php


/**
 * Test block class
 *
 * @package P4NL_GB_BKS
 * @since 0.1
 */

namespace P4NL_GB_BKS\Blocks;


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
				'editor_script' => 'planet4-gpnl-blocks',
				'render_callback' => [$this, 'render'],
				'attributes' => [
					'title' => [
						'type' => 'string',
					],
					'subtitle' => [
						'type' => 'string',
					],
					// in reality 'background' is actually the image ID.
					'background' => [
						'type' => 'number',
					],
					'opacity' => [
						'type' => 'number',
						'default' => 30,
					],
					'focus_image' => [
						'type' => 'string',
					],
					'marketingcode' => [
						'type' => 'string',
					],
					'literaturecode' => [
						'type' => 'string',
					],
					'screenid' => [
						'type' => 'string',
					],
					'form_id' => [
						'type' => 'number',
						'description' => 'Gebruik dit als er meerdere nieuwsbriefformulieren op 1 pagina staan. Elk formulier moet een uniek numeriek id hebben.',
						'default' => 1,
					]
				]

			]

		);
	}


	/**
	 * Get all the data that will be needed to render the block correctly.
	 *
	 * @param array $fields This is the array of fields of this block.
	 *
	 * @return array The data to be passed in the View.
	 */
	public function prepare_data( $fields ): array {

		wp_enqueue_style( 'gpnl_newsletter_css', P4NL_GB_BKS_PLUGIN_URL . 'assets/build/newsletter.min.css', [], '0.1' );
		wp_enqueue_script( 'gpnl_newsletter_js', P4NL_GB_BKS_PLUGIN_URL . 'assets/build/newsletterFormSubmit.js', [ 'jquery' ], '0.1', true );


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
			'gpnl_newsletter_js',
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

	// TODO: DE AJAX REQUEST WERKT NIET, LIGT AAN DE ONDERSTAANDE REGELS. IN HET OUDE BLOK WERKT HET WEL MET DEZE CODE...
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
