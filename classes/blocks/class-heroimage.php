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
class HeroImage extends Base_Block {

	public function __construct() {
		// - Register the block for the editor in the PHP side.
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
						'type' => 'text',
						'default' => '',
					],
					'is_small' => [
						'type' => 'boolean',
						'default' => '',
					],
					'image_url' => [
						'type' => 'string',
						'default' => '',
					],
					'image_id' => [
						'type' => 'number',
						'default' => '',
					],
					'link_text' => [
						'type' => 'string',
						'default' => '',
					],
					'link_url' => [
						'type' => 'string',
						'default' => '',
					],
					'focus_image' => [
						'type' => 'string',
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

		// If an image is selected
		if ( isset( $fields['image_id'] ) && $image = wp_get_attachment_image_src( $fields['image_id'], 'full' ) ) {
			// load the image from the library
			$fields['image_url']    = $image[0];
			$fields['alt_text']     = get_post_meta( $fields['image_id'], '_wp_attachment_image_alt', true );
			$fields['image_srcset'] = wp_get_attachment_image_srcset( $fields['image_id'], 'full', wp_get_attachment_metadata( $fields['image_id'] ) );
			$fields['image_sizes']  = wp_calculate_image_sizes( 'full', null, null, $fields['image_id'] );
		}

		wp_enqueue_style( 'hero-image', P4NL_GB_BKS_PLUGIN_URL . '/assets/build/heroImage.min.css', null, '0.1' );

		$data = [
			'fields' => $fields,
		];

		return $data;

	}

}

