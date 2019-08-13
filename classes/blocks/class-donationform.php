<?php


/**
 * Test block class
 *
 * @package P4NL_GB_BKS
 * @since 0.1
 */

namespace P4NL_GB_BKS\Blocks;


/**
 * @package P4BKS\Controllers\Blocks
 * @since 0.1
 */
class Donationform extends Base_Block {

	/** @const string BLOCK_NAME */
	const BLOCK_NAME = 'donationform';

	public function __construct() {
		// - Register the block for the editor
		// in the PHP side.
		register_block_type(
			'planet4-gpnl-blocks/' . self::BLOCK_NAME,
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
					'suggested_frequency' => [
						'type' => 'select',
						'default' => '',
					],
					'allow_frequency_override' => [
						'type' => 'string',
						'default' => '',
					],
					'min_amount' => [
						'type' => 'number',
						'default' => 5,
					],
					'oneoff_amount1' => [
						'type' => 'number',
						'default' => 5,
					],
					'oneoff_amount2' => [
						'type' => 'number',
						'default' => 10,
					],
					'oneoff_amount3' => [
						'type' => 'number',
						'default' => 25,
					],
					'oneoff_suggested_amount' => [
						'type' => 'number',
						'default' => 10,
					],
					'recurring_amount1' => [
						'type' => 'number',
						'default' => 5,
					],
					'recurring_amount2' => [
						'type' => 'number',
						'default' => 10,
					],
					'recurring_amount3' => [
						'type' => 'number',
						'default' => 25,
					],
					'recurring_suggested_amount' => [
						'type' => 'number',
						'default' => 10,
					],
					'thanktitle' => [
						'type' => 'string',
						'default' => '',
					],
					'thankdescription' => [
						'type' => 'string',
						'default' => '',
					],
					'literatuurcode' => [
						'type' => 'string',
						'default' => '',
					],
					'marketingcode_recurring' => [
						'type' => 'string',
						'default' => '',
					],
					'marketingcode_oneoff' => [
						'type' => 'string',
						'default' => '',
					],
					'returnpage' => [
						'type' => 'string',
						'default' => 'https://www.greenpeace.org/nl/',
					],
					'errorpage' => [
						'type' => 'string',
						'default' => 'https://www.greenpeace.org/nl/',
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

		$data = [
			'fields' => $fields,
		];

		// TODO: split up the css per block
//		wp_enqueue_style( 'style', P4NL_GB_BKS_PLUGIN_URL . '/react-blocks/build/style.min.css', null, '0.1' );

		return $data;
	}

}

