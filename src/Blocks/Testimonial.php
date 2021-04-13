<?php


/**
 * Testimonial block class
 *
 * @package GPNL\Plugin
 * @since 0.1
 */

namespace GPNL\Plugin\Blocks;

use GPNL\Plugin\Services\Asset_Enqueuer;

/**
 * @package GPNL\Plugin\Blocks
 * @since 0.1
 */
class Testimonial extends Base_Block {

	public function __construct() {

		// - Register the block for the editor
		// in the PHP side.
		register_block_type(
			'planet4-gpnl-blocks/' . $this->getKebabCaseClassName(),
			[
				'editor_script'   => 'planet4-gpnl-blocks',
				'render_callback' => [ $this, 'render' ],
				'attributes'      => [
					'title'     => [
						'type'    => 'string',
						'default' => '',
					],
					'name'    => [
						'type'    => 'string',
						'default' => '',
					],
					'content'    => [
						'type'    => 'string',
						'default' => '',
					],
					'image_url' => [
						'type'    => 'string',
						'default' => '',
					],
					'image_id'  => [
						'type'    => 'integer',
						'default' => '',
					],
					'image_right'  => [
						'type'    => 'boolean',
						'default' => false,
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

		// Check if the block is present on the page that is requested.
		if ( has_block( 'planet4-gpnl-blocks/' . $this->getKebabCaseClassName() ) ) {
			Asset_Enqueuer::enqueue_asset( 'testimonial', 'style' );
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
		if ( isset( $fields['image_id'] ) && $image = wp_get_attachment_image_src( $fields['image_id'], 'full' ) ) {
			// load the image from the library
			$fields['image_url']        = $image[0];
			$fields['image_alt_text']   = get_post_meta( $fields['image_id'], '_wp_attachment_image_alt', true );
			$fields['image_srcset']     = wp_get_attachment_image_srcset( $fields['image_id'], 'full', wp_get_attachment_metadata( $fields['image_id'] ) );
			$fields['image_sizes']      = wp_calculate_image_sizes( 'full', null, null, $fields['image_id'] );
		}

		$data = [
			'fields' => $fields,
		];


		return $data;
	}
}

