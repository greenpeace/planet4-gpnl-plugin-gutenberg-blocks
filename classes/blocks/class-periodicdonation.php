<?php


/**
 * Periodic Donation block class
 *
 * @package P4NL_GB_BKS
 * @since 0.1
 */

namespace P4NL_GB_BKS\Blocks;

require_once( plugin_dir_path( __FILE__ ) . '../../vendor/greenpeace/gpnl-database-interface/ApiConnector.php' );


use P4NL_DATABASE_INTERFACE\Api\ApiConnector;
use P4NL_DATABASE_INTERFACE\ApiException;
use P4NL_GB_BKS\Services\Asset_Enqueuer;


/**
 * @package P4BKS\Controllers\Blocks
 * @since 0.1
 */
class PeriodicDonation extends Base_Block {

	public function __construct() {
		// - Register the block for the editor
		// in the PHP side.
		register_block_type(
			'planet4-gpnl-blocks/' . $this->getKebabCaseClassName(),
			[
				'editor_script'   => 'planet4-gpnl-blocks',
				'render_callback' => [ $this, 'render' ],
				'attributes'      => [
					'title'         => [
						'type'    => 'string',
						'default' => '',
					],
					'description'   => [
						'type'    => 'string',
						'default' => '',
					],
					'marketingCode' => [
						'type'    => 'string',
						'default' => 'TODO: ////',
					],
				],
			]
		);
		add_action( 'wp_enqueue_scripts', [ $this, 'enqueue_if_block_is_present' ] );
		add_action( "wp_ajax_nopriv_periodic_donation_form_process", [ $this, "form_process" ] );
		add_action( "wp_ajax_periodic_donation_form_process", [ $this, "form_process" ] );
	}

	/**
	 * This will run before determining which template to load.
	 */
	public function enqueue_if_block_is_present() {

		// Check if the block is present on the page that is requested.
		if ( has_block( 'planet4-gpnl-blocks/' . $this->getKebabCaseClassName() ) ) {

			Asset_Enqueuer::enqueue_asset( 'periodicDonationForm', 'style' );
			Asset_Enqueuer::enqueue_asset( 'periodicDonationForm', 'script', [], true );
		}
	}

	public function form_process() {

		$form_data = $_POST['state'];


		// Step 1: remove whitespaces and strip all tags form data.
		$clean_data = [];
		foreach ( $form_data as $key => $value ) {
			$value = preg_replace('/\s+/', '', $value);
			$clean_data[ $key ] = wp_strip_all_tags( $value );
		}

		// Step 3: typecast all integers.
		$clean_data['jaar'] = (int) $clean_data['jaar'];
		$clean_data['bedrag'] = (int) $clean_data['bedrag'];
		$clean_data['screenId'] = (int) $clean_data['screenId'];

		wp_send_json($clean_data);

		// Call the API.
		$conn = new ApiConnector();
		try {
			$result = $conn->call("Register", 'RegisterPeriodiekeSchenking', $clean_data);
			wp_send_json_success( $result );
			throw new ApiException();
		} catch (ApiException $e) {
			// TODO: Make sure the URL of the API is not shown in the message.
			wp_send_json_error($e->getMessage(), $e->getCode());
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
}

