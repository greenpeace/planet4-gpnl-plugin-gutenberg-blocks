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
					'marketingcode'            => [
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

		// Step 1: remove whitespaces and strip all tags form data.
		$clean_data = [];
		foreach ( $form_data as $key => $value ) {
			$clean_data[ $key ] = wp_strip_all_tags( $value );
		}

		// Step 2: remove whitespaces from strings that should not have them
		$clean_data['telefoonnummer'] = preg_replace( '/\s+/', '', $clean_data['telefoonnummer'] );

		// Step 3: typecast all integers.
		$clean_data['aantal']   = (int) $clean_data['aantal'];


		$newsletter_data = [
			"voornaam"       => $clean_data["voornaam"],
			"email"          => $clean_data["email"],
			"marketingcode"  => $clean_data["marketingCodeNewsletter"],
			"literatuurcode" => $clean_data["literatureCodeNewsletter"],
			"screenId"       => $clean_data["screenIdNewsletter"],
			"registreerEmailNiewsbrief" => true
		];
//		wp_send_json( $newsletter_data );


		// Call the API.
		$conn = new ApiConnector();
		try {
			if ( $clean_data['optIn'] === "true" ) {
				$conn->call( "Register", 'RegisterEmail', $newsletter_data );
			}
			$result = $conn->call( "Register", 'RegisterPeriodiekeSchenking', $clean_data );
			wp_send_json_success( $result );
			throw new ApiException();
		} catch ( ApiException $e ) {
			// TODO: Make sure the URL of the API is not shown in the message.
			wp_send_json_error( $e->getMessage(), $e->getCode() );
		}
	}

	public function address_autofill() {

		// Call the API.
		$conn = new ApiConnector( true );

		$address_input_data = [
			'postcode'   => $_POST['postcode'],
			'huisnummer' => $_POST['huisnummer']
		];

//		wp_send_json($address_input_data, 200);

		try {
			$result = $conn->call( "Validation", 'validatePostcode', $address_input_data );
			wp_send_json_success( $result );
			throw new ApiException();
		} catch ( ApiException $e ) {
			// TODO: Make sure the URL of the API is not shown in the message.
			wp_send_json_error( $e->getMessage(), $e->getCode() );
		}
	}
}
