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
 * Defines the HeroInmage block for Gutenberg
 *
 * @package P4BKS\Controllers\Blocks
 * @since 0.1
 */
class HeroImage extends Base_Block {

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
					'small'       => [
						'type'    => 'boolean',
						'default' => false,
					],
					'image'       => [
						'type'    => 'number',
						'default' => '',
					],
					'link_text'   => [
						'type'    => 'string',
						'default' => '',
					],
					'link_url'    => [
						'type'    => 'string',
						'default' => '',
					],
					'focus_image' => [
						'type' => 'string',
						'default' => '50% 50%',
					],
				],

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
		if ( isset( $fields['image'] ) && $image = wp_get_attachment_image_src( $fields['image'], 'full' ) ) {
			$fields['image_url']    = $image[0];
			$fields['alt_text']     = get_post_meta( $fields['image'], '_wp_attachment_image_alt', true );
			$fields['image_srcset'] = wp_get_attachment_image_srcset( $fields['image'], 'full', wp_get_attachment_metadata( $fields['image'] ) );
			$fields['image_sizes']  = wp_calculate_image_sizes( 'full', null, null, $fields['image'] );
		}

		// enqueue the style file.
		Asset_Enqueuer::enqueue_asset('heroImage', 'style');

		$data = [
			'fields' => $fields,
		];

		return $data;

	}



}

