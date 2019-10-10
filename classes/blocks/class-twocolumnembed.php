<?php


/**
 * Two column embed class
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
class TwoColumnEmbed extends Base_Block {

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
						'default' => '',
					],
					'description' => [
						'type' => 'string',
						'default' => '',
					],
					'column_title' => [
						'type' => 'string',
						'default' => '',
					],
					'column_description' => [
						'type' => 'string',
						'default' => '',
					],
					'column_cta_text' => [
						'type' => 'string',
						'default' => '',
					],
					'column_cta_link' => [
						'type' => 'string',
						'default' => '',
					],
					'embed_option' => [
						'type' => 'string',
						'default' => 'iframe',
					],
					'iframe_src' => [
						'type' => 'string',
						'default' => '',
					],
					'iframe_height' => [
						'type' => 'number',
						'default' => '',
					],
					'image' => [
						'type' => 'number',
						'default' => '',
					],
					'column_size' => [
						'type' => 'number',
						'default' => '6',
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

//		// Check if the block is present on the page that is requested.
//		if ( has_block( 'planet4-gpnl-blocks/' . $this->getKebabCaseClassName() ) ) {
//
//		}
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
		if ( isset( $fields['image'] ) && $image = wp_get_attachment_image_src( $fields['image'], 'full' ) ) {
			// load the image from the library
			$fields['image_url']    = $image[0];
			$fields['alt_text']     = get_post_meta( $fields['image'], '_wp_attachment_image_alt', true );
			$fields['image_srcset'] = wp_get_attachment_image_srcset( $fields['image'], 'full', wp_get_attachment_metadata( $fields['image'] ) );
			$fields['image_sizes']  = wp_calculate_image_sizes( 'full', null, null, $fields['image'] );
		}

		$data = [
			'fields' => $fields,
		];

		return $data;
	}

}

