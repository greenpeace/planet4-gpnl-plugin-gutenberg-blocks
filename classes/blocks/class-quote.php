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
class Quote extends Base_Block {

	/** @const string BLOCK_NAME */
	const BLOCK_NAME = 'quote';

	public function __construct() {
		// - Register the block for the editor
		// in the PHP side.
		register_block_type(
			'planet4-blocks/' . self::BLOCK_NAME,
			[
				'editor_script' => 'planet4-blocks',
				'render_callback' => [$this, 'render'],
				'attributes' => [
					'title' => [
						'type' => 'string',
						'default' => '',
					]
				]

			]

		);
	}

	/**
	 * Get all the data that will be needed to render the block correctly.
	 *
	 * @param array $fields This is the array of fields of this block.
	 * @param string $content This is the post content.
	 * @param string $shortcode_tag The shortcode tag of this block.
	 *
	 * @return array The data to be passed in the View.
	 */
	public function prepare_data( $fields ): array {
		$title = $fields['title'] ?? '';

		$data = [
			'title' => $title,
		];

		return $data;
	}


//	/**
//	 * Get all the data that will be needed to render the block correctly.
//	 *
//	 * @return array The data to be passed in the View.
//	 */
//	public function prepare_data( $attributes )  {
//
//		$block_data = [
//			'title' => $attributes['title'] ?? '',
//		];
//
//		return $block_data;
//	}

}

