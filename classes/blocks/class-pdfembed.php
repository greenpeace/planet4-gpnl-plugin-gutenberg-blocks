<?php
/**
 * Hero Image block class
 *
 * @package P4NL_GB_BKS
 * @since 0.1
 */

namespace P4NL_GB_BKS\Blocks;

use P4NL_GB_BKS\Services\Asset_Enqueuer;


/**
 * Defines the HeroImage block for Gutenberg
 *
 * @package P4BKS\Controllers\Blocks
 * @since 0.1
 */
class PdfEmbed extends Base_Block {

	/**
	 * Defines the fields and render callback for Gutenberg
	 */
	public function __construct() {

		register_block_type(
			'planet4-gpnl-blocks/' . $this->getKebabCaseClassName(),
			[
				'editor_script'   => 'planet4-gpnl-blocks',
				'render_callback' => [ $this, 'render' ],
				'attributes'      => [
					'title'       => [
						'type'    => 'string',
						'default' => '',
					],
					'description' => [
						'type'    => 'text',
						'default' => '',
					],
					'document_id'       => [
						'type'    => 'number',
						'default' => '',
					],
					'height'       => [
						'type'    => 'number',
						'default' => 800,
					]
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
			Asset_Enqueuer::enqueue_asset( 'pdf-embed', 'style' );
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

		// If an image is selected
		if ( isset( $fields['document_id'] ) && $document = wp_get_attachment_url( $fields['document_id'] ) ) {

			$fields['document_url']    = $document;
		}

		$data = [
			'fields' => $fields,
		];

		return $data;
	}
}

