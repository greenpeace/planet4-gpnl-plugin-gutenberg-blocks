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
class Liveblogitem extends Base_Block {

	/** @const string BLOCK_NAME */
	const BLOCK_NAME = 'liveblogitem';

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
					'datetime' => [
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

		$data = [
			'fields' => $fields,
		];

//		wp_enqueue_style( 'hero-image', P4NL_GB_BKS_PLUGIN_URL . '/assets/build/quote.min.css', null, '0.1' );

		return $data;
	}

}

