<?php


/**
 * Brochure Request block class
 *
 * @package P4NL_GB_BKS
 * @since 0.1
 */

namespace P4NL_GB_BKS\Blocks;

use P4NL_DATABASE_INTERFACE\ApiConnector;
use P4NL_DATABASE_INTERFACE\ApiException;
use P4NL_GB_BKS\Services\Asset_Enqueuer;

/**
 * @package P4BKS\Controllers\Blocks
 * @since 0.1
 */
class BrochureRequest extends Base_Block {

	public function __construct() {
		// - Register the block for the editor
		// in the PHP side.
		register_block_type(
			'planet4-gpnl-blocks/' . $this->getKebabCaseClassName(),
			[
				'editor_script'   => 'planet4-gpnl-blocks',
				'render_callback' => [ $this, 'render' ],
				'attributes'      => [
					'title'                    => [
						'type'    => 'string',
						'default' => '',
					],
					'description'              => [
						'type'    => 'string',
						'default' => '',
					],
					'marketingCode'            => [
						'type'    => 'string',
						'default' => '',
					],
					'requestedItemId'          => [
						'type'    => 'string',
						'default' => '',
					],
					'marketingCodeNewsletter'  => [
						'type'    => 'string',
						'default' => '04950',
					],
					'literatureCodeNewsletter' => [
						'type'    => 'string',
						'default' => 'EN009',
					],
					'thankYouText'             => [
						'type'    => 'string',
						'default' => '',
					],
				],
			]
		);
		add_action( 'wp_enqueue_scripts', [ $this, 'enqueue_if_block_is_present' ] );

		// Adding the form process actions
		add_action( "wp_ajax_nopriv_brochure_request_form_process", [ $this, "form_process" ] );
		add_action( "wp_ajax_brochure_request_form_process", [ $this, "form_process" ] );

		// Adding the address autofill actions
		add_action( "wp_ajax_nopriv_brochure_request_address_autofill", [ $this, "address_autofill" ] );
		add_action( "wp_ajax_brochure_request_address_autofill", [ $this, "address_autofill" ] );
	}

	/**
	 * This will run before determining which template to load.
	 */
	public function enqueue_if_block_is_present() {

		// Check if the block is present on the page that is requested.
		if ( has_block( 'planet4-gpnl-blocks/' . $this->getKebabCaseClassName() ) ) {

			Asset_Enqueuer::enqueue_asset( 'brochureRequestForm', 'style' );
			Asset_Enqueuer::enqueue_asset( 'brochureRequestForm', 'script', [], true );
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

		$data = [
			'fields' => $fields,
		];

		return $data;
	}

	public function form_process() {

		$form_data = $_POST['state'];

		// Step 1: strip all tags from data.
		$clean_data = [];
		foreach ( $form_data as $key => $value ) {
			$clean_data[ $key ] = wp_strip_all_tags( $value );
		}

		// Step 2: remove whitespaces from strings that should not have them
		$clean_data['telefoonnummer'] = preg_replace( '/\s+/', '', $clean_data['telefoonnummer'] );

		// Step 3: typecast all integers.
		$clean_data['aantal']   = (int) $clean_data['aantal'];
		$clean_data['requestedItemId']   = (int) $clean_data['requestedItemId'];

		// TODO: Create a service for validators.
		// Step 4: Validate / Validate the phone number.
		$clean_data['telefoonnummer'] = $this->validate_phonenumber($clean_data['telefoonnummer']);

		// Step 5: Create an array for submit-data for the newsletter API.
		$newsletter_data = [
			"voornaam"       => $clean_data["voornaam"],
			"email"          => $clean_data["email"],
			"marketingcode"  => $clean_data["marketingCodeNewsletter"],
			"literatuurcode" => $clean_data["literatureCodeNewsletter"],
			"screenId"       => $clean_data["screenIdNewsletter"],
			"registreerEmailNiewsbrief" => true
		];

		// Call the API.
		$conn = new ApiConnector();
		try {
			if ( $clean_data['optIn'] === "true" ) {
				$conn->call( "Register", 'RegisterEmail', $newsletter_data );
			}
			$result = $conn->call( "Register", 'registerInfoRequest', $clean_data );
			wp_send_json_success( $result );
			throw new ApiException();
		} catch ( ApiException $e ) {
			wp_send_json_error( "error", $e->getCode() );
		}
	}

	public function address_autofill() {

		// Call the API.
		$conn = new ApiConnector( true );

		$address_input_data = [
			'postcode'   => $_POST['postcode'],
			'huisnummer' => $_POST['huisnummer']
		];

		try {
			$result = $conn->call( "Validation", 'validatePostcode', $address_input_data );
			wp_send_json_success( $result );
			throw new ApiException();
		} catch ( ApiException $e ) {
			wp_send_json_error( $e->getMessage(), $e->getCode() );
		}
	}

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
}
