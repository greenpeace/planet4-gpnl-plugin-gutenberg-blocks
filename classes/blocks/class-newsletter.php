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
class Newsletter extends Base_Block {

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
					],
					'subtitle' => [
						'type' => 'string',
					],
					'backgroundimage_id' => [
						'type' => 'number',
					],
					'backgroundimage_url' => [
						'type' => 'string',
						'default' => '',
					],
					'backgroundimage_opacity' => [
						'type' => 'number',
						'default' => 30,
					],
					'marketingcode' => [
						'type' => 'string',
					],
					'literaturecode' => [
						'type' => 'string',
					],
					'screenid' => [
						'type' => 'string',
					],
					'form_id' => [
						'type' => 'number',
						'description' => 'Gebruik dit als er meerdere nieuwsbriefformulieren op 1 pagina staan. Elk formulier moet een uniek numeriek id hebben.',
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
		if ( isset( $fields['backgroundimage_id'] ) && $image = wp_get_attachment_image_src( $fields['backgroundimage_id'], 'full' ) ) {
			// load the image from the library
			$fields['backgroundimage_url']    = $image[0];
			$fields['backgroundimage_alt']     = get_post_meta( $fields['backgroundimage_id'], '_wp_attachment_image_alt', true );
			$fields['backgroundimage_srcset'] = wp_get_attachment_image_srcset( $fields['backgroundimage_id'], 'full', wp_get_attachment_metadata( $fields['backgroundimage_id'] ) );
			$fields['backgroundimage__sizes']  = wp_calculate_image_sizes( 'full', null, null, $fields['backgroundimage_id'] );
		}

		$data = [
			'fields' => $fields,
		];

		wp_enqueue_script( 'newsletterFormSubmit', P4NL_GB_BKS_PLUGIN_URL . 'assets/build/newsletterFormSubmit.js', [ 'jquery' ], '0.1', true );
		wp_enqueue_style( 'newsletter', P4NL_GB_BKS_PLUGIN_URL . 'assets/build/newsletter.min.css', null, '0.1' );

		return $data;
	}

}

