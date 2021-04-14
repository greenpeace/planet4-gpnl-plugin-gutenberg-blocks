<?php
/**
 * User: oscar
 * Date: 13-04-21
 * Time: 15:54
 */

namespace GPNL\Plugin\Blocks;


use GPNL\Plugin\Services\Asset_Enqueuer;

class ShipCompetition extends Base_Block
{
	/**
	 * Defines the fields and render callback for Gutenberg
	 */
	public function __construct() {

		// - Register the block for the editor
		// in the PHP side.
		register_block_type(
			'planet4-gpnl-blocks/' . $this->getKebabCaseClassName(),
			[
				'editor_script'   => 'planet4-gpnl-blocks',
				'render_callback' => [ $this, 'render' ],
				'attributes'      => [
					'quote'     => [
						'type'    => 'string',
						'default' => '',
					],
					'quotee'    => [
						'type'    => 'string',
						'default' => '',
					],
					'image_url' => [
						'type'    => 'string',
						'default' => '',
					],
					'image_id'  => [
						'type'    => 'number',
						'default' => '',
					]
				]
			]
		);
		add_action( 'wp_enqueue_scripts', [ $this, 'enqueue_if_block_is_present' ] );
		add_action('admin_post_process_ship_naming_competition_form_data', [$this, 'process_ship_naming_competition_form_data']);
	}

	/**
	 * This will run before determining which template to load.
	 */
	public function enqueue_if_block_is_present()
	{
		// Check if the block is present on the page that is requested.
		if ( has_block( 'planet4-gpnl-blocks/' . $this->getKebabCaseClassName() ) ) {
			Asset_Enqueuer::enqueue_asset( 'collapsible', 'style' );
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

		if(isset($_GET['submitted'])) {
			$fields['form_submitted'] = true;
			$fields['form_submitter'] = $_GET['submitter'];
		}

		return [
			'fields' => $fields,
		];
	}

	public function process_ship_naming_competition_form_data(): void
	{
		$_POST = wp_unslash( $_POST );
		$firstname  = htmlspecialchars( wp_strip_all_tags( $_POST['firstname'] ));
		$lastname  = htmlspecialchars( wp_strip_all_tags( $_POST['lastname'] ));
		$name= urlencode($firstname . " " . $lastname);
		$HTTPREFERER = htmlspecialchars( wp_strip_all_tags( $_SERVER['HTTP_REFERER'] ));
		header('Location: ' . $HTTPREFERER . '?submitted=true&submitter=' . $name);
		exit;
	}
}
