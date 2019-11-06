<?php


/**
 * Donation block class
 *
 * @package P4NL_GB_BKS
 * @since 0.1
 */

// TODO: Make the Vue form render!
namespace P4NL_GB_BKS\Blocks;

use P4NL_GB_BKS\Services\Asset_Enqueuer;

/**
 * @package P4BKS\Controllers\Blocks
 * @since 0.1
 */
class Donation extends Base_Block {

	public function __construct() {
		// - Register the block for the editor
		// in the PHP side.
		register_block_type(
			'planet4-gpnl-blocks/' . $this->getKebabCaseClassName(),
			[
				'editor_script'   => 'planet4-gpnl-blocks',
				'render_callback' => [ $this, 'render' ],
				'attributes'      => [
					'title'                      => [
						'type'    => 'string',
						'default' => '',
					],
					'description'                => [
						'type'    => 'string',
						'default' => '',
					],
					'suggested_frequency'        => [
						'type'    => 'string',
						'default' => 'E',
					],
					'allow_frequency_override'   => [
						'type'    => 'boolean',
						'default' => false,
					],
					'min_amount'                 => [
						'type'    => 'number',
						'default' => 5,
					],
					'oneoff_amount1'             => [
						'type'    => 'number',
						'default' => 5,
					],
					'oneoff_amount2'             => [
						'type'    => 'number',
						'default' => 10,
					],
					'oneoff_amount3'             => [
						'type'    => 'number',
						'default' => 25,
					],
					'oneoff_suggested_amount'    => [
						'type'    => 'number',
						'default' => 10,
					],
					'recurring_amount1'          => [
						'type'    => 'number',
						'default' => 5,
					],
					'recurring_amount2'          => [
						'type'    => 'number',
						'default' => 10,
					],
					'recurring_amount3'          => [
						'type'    => 'number',
						'default' => 25,
					],
					'recurring_suggested_amount' => [
						'type'    => 'number',
						'default' => 10,
					],
					'thanktitle'                 => [
						'type'    => 'string',
						'default' => '',
					],
					'thankdescription'           => [
						'type'    => 'string',
						'default' => '',
					],
					'literatuurcode'             => [
						'type'    => 'string',
						'default' => 'EN999',
					],
					'marketingcode_recurring'    => [
						'type'    => 'string',
						'default' => '04888',
					],
					'marketingcode_oneoff'       => [
						'type'    => 'string',
						'default' => '04888',
					],
					'returnpage'                 => [
						'type'    => 'string',
						'default' => 'https://www.greenpeace.org/nl/',
					],
					'errorpage'                  => [
						'type'    => 'string',
						'default' => 'https://www.greenpeace.org/nl/',
					],
				],
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

			Asset_Enqueuer::enqueue_external_asset(  'vueform_style', 'style', 'https://unpkg.com/vue-form-wizard@0.8.4/dist/vue-form-wizard.min.css');
			Asset_Enqueuer::enqueue_asset('donation-form', 'style');

//			Asset_Enqueuer::enqueue_external_asset(  'vue', 'script','https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.15/vue.min.js', true );
//			Asset_Enqueuer::enqueue_external_asset( 'vueresource', 'script', 'https://cdnjs.cloudflare.com/ajax/libs/vue-resource/1.5.0/vue-resource.min.js', true );
//			Asset_Enqueuer::enqueue_asset('vue-form-wizard', 'style');
//			Asset_Enqueuer::enqueue_asset('vueform', 'script', [ 'vue' ], true);
//			Asset_Enqueuer::enqueue_asset('vuelidate', 'script', [ 'vue', 'vueform' ], true);
//			Asset_Enqueuer::enqueue_asset('vuelidators', 'script', [ 'vue', 'vueform' ], true);

			Asset_Enqueuer::enqueue_asset('donationForm', 'script', ['jquery'], true);
		}
	}

	/**
	 * Get all the data that will be needed to render the block correctly.
	 *
	 * @param array $fields This is the array of fields of this block.
	 *
	 * @return array The data to be passed in the View.
	 */
	public function prepare_data( $fields ): array {

		$fields['drplus_amount1']      = '';
		$fields['drplus_amount2']      = '';
		$fields['drplus_amount3']      = '';
		$frequencies = [
			'E' => 'Eenmalig',
			'M' => 'Maandelijks',
			'K' => 'Kwartaal',
			'H' => 'Halfjaarlijks',
			'J' => 'Jaarlijks',
			'F' => 'Maandelijks voor 12 maanden',
		];

		$fields['suggested_frequency'] = [ $fields['suggested_frequency'], strtolower( $frequencies[ $fields['suggested_frequency'] ] ) ];

		$data = [
			'fields' => $fields,
		];

		// Pass options to frontend code
		wp_localize_script(
			'donationForm',
			'formconfig',
			array(
				'min_amount'                 => $fields['min_amount'],
				'oneoff_amount1'             => $fields['oneoff_amount1'],
				'oneoff_amount2'             => $fields['oneoff_amount2'],
				'oneoff_amount3'             => $fields['oneoff_amount3'],
				'oneoff_suggested_amount'    => $fields['oneoff_suggested_amount'],
				'recurring_amount1'          => $fields['recurring_amount1'],
				'recurring_amount2'          => $fields['recurring_amount2'],
				'recurring_amount3'          => $fields['recurring_amount3'],
				'recurring_suggested_amount' => $fields['recurring_suggested_amount'],
				'suggested_frequency'        => $fields['suggested_frequency'],
				'allow_frequency_override'   => $fields['allow_frequency_override'],
				'literatuurcode'             => $fields['literatuurcode'],
				'marketingcode_recurring'    => $fields['marketingcode_recurring'],
				'marketingcode_oneoff'       => $fields['marketingcode_oneoff'],
				'thanktitle'                 => $fields['thanktitle'],
				'thankdescription'           => $fields['thankdescription'],
				'returnpage'                 => $fields['returnpage'],
				'errorpage'                  => $fields['errorpage'],
				'drplus_amount1'             => $fields['drplus_amount1'],
				'drplus_amount2'             => $fields['drplus_amount2'],
				'drplus_amount3'             => $fields['drplus_amount3'],
			)
		);

//		 Pass option for address autofill to frontend code.
		wp_localize_script(
			'donationForm',
			'get_address_object',
			[
				'ajaxUrl' => admin_url( 'admin-ajax.php' ),
				'nonce'   => wp_create_nonce( 'GPNL_get_address_donation_form' ),
			]
		);

		return $data;
	}
}

/**
 * Get address with API call.
 */
function get_address_donation_form() {

	// getting the options from the gnnp-settings where the API-key and API-URL are stored.
	$options = get_option( 'planet4nl_options' );

	// Get data from form and validate
	$zipcode = wp_strip_all_tags( $_POST['zipcode'] );
	validate_zipcode_donation_form( $zipcode ) or die();
	$house_no = wp_strip_all_tags( $_POST['house_no'] );
	is_numeric( $house_no ) or die();

	$data_array = [
		'postcode'   => $zipcode,
		'huisnummer' => $house_no,
		'wachtwoord' => $options['gpnl_api_key'],
	];

	$data = wp_json_encode( $data_array );

	// URL for production
	$url = $options['register_url'] . '/validate/postcode';

	$curl = curl_init( $url );

	// API call options:
	curl_setopt( $curl, CURLOPT_POSTFIELDS, $data );
	curl_setopt( $curl, CURLOPT_URL, $url );
	curl_setopt(
		$curl,
		CURLOPT_HTTPHEADER,
		[
			'Content-Type:application/json',
			'Content-Length: ' . strlen( $data ),
		]
	);
	curl_setopt( $curl, CURLOPT_CUSTOMREQUEST, 'POST' );
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

function validate_zipcode_donation_form( $zipcode ) {
	$regex = '/^(?:NL-)?(\d{4})\s*([A-Z]{2})$/i';

	if ( preg_match( $regex, $zipcode ) ) {
		return true;
	}
}

// call php function whenever the ajax call is made to get the address for non-logged in users
add_action( 'wp_ajax_nopriv_get_address_donation_form', 'P4NLBKS\Controllers\Blocks\get_address_donation_form' );
// call php function whenever the ajax call is made to get the address for logged in users
add_action( 'wp_ajax_get_address_donation_form', 'P4NLBKS\Controllers\Blocks\get_address_donation_form' );

/**
 * Store donation for analytics
 */
function cache_donation() {

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

	$transaction = wp_strip_all_tags( $_POST['transaction'] );
	$data        = wp_strip_all_tags( $_POST['data'] );

	wp_cache_add( $transaction, $data, 'gpnl_cache', 900 );

	wp_send_json_success(
		[],
		200
	);
}


// call php function whenever the ajax call is made to get the address for non-logged in users
add_action( 'wp_ajax_nopriv_cache_donation', 'P4NLBKS\Controllers\Blocks\cache_donation' );
// call php function whenever the ajax call is made to get the address for logged in users
add_action( 'wp_ajax_cache_donation', 'P4NLBKS\Controllers\Blocks\cache_donation' );

/**
 * Store donation for analytics
 */
function get_donation() {

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

	$transaction = wp_strip_all_tags( $_POST['transaction'] );

	$donation_data = wp_cache_get( $transaction, 'gpnl_cache' );
	$donation_data = str_replace( '\\', '', $donation_data );

	wp_cache_delete( $transaction, 'gpnl_cache' );
	wp_send_json_success(
		[
			'data' => $donation_data,
		],
		200
	);
}


// call php function whenever the ajax call is made to get the address for non-logged in users
add_action( 'wp_ajax_nopriv_get_donation', 'P4NLBKS\Controllers\Blocks\get_donation' );
// call php function whenever the ajax call is made to get the address for logged in users
add_action( 'wp_ajax_get_donation', 'P4NLBKS\Controllers\Blocks\get_donation' );
