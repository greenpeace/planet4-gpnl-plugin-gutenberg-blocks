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
				'editor_script' => 'planet4-gpnl-blocks',
				'render_callback' => [$this, 'render'],
				'attributes' => [
					'title' => [
						'type' => 'text',
					],
					'subtitle' => [
						'type' => 'text',
					],
					'image' => [
						'type' => 'number',
					],
					'consent' => [
						'type' => 'text',
					],
					'sign' => [
						'type' => 'text',
					],
					'campaignpolicy' => [
						'type' => 'text',
					],
					'thanktitle' => [
						'type' => 'text',
					],
					'thanktext' => [
						'type' => 'text',
					],
					'donatebuttontext' => [
						'type' => 'text',
					],
					'donatebuttonlink' => [
						'type' => 'text',
					],
					'hidesharingbuttons' => [
						'type' => 'boolean',
					],
					'twittertext' => [
						'type' => 'text',
					],
					'whatsapptext' => [
						'type' => 'text',
					],
					'marketingcode' => [
						'type' => 'text',
					],
					'literaturecode' => [
						'type' => 'text',
					],
					'campaigncode' => [
						'type' => 'text',
					],
					'countermin' => [
						'type' => 'number',
					],
					'countermax' => [
						'type' => 'number',
					],
					'countertext' => [
						'type' => 'text',
					],
					'ga_action' => [
						'type' => 'text',
					],
					'ad_campaign' => [
						'type' => 'text',
					],
					'apref' => [
						'type' => 'text',
					],
					'jalt_track' => [
						'type' => 'text',
					],
					'form_id' => [
						'type' => 'text',
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


//		wp_enqueue_style( 'hero-image', P4NL_GB_BKS_PLUGIN_URL . '/assets/build/heroImage.min.css', null, '0.1' );

		$data = [
			'fields' => $fields,
		];

		return $data;

	}

}

