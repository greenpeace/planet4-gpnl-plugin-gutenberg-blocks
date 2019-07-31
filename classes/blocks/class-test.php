<?php


/**
 * Test block class
 *
 * @package P4NL_GB_BKS
 * @since 0.1
 */

namespace P4NL_GB_BKS\Blocks;


/**
 * Class Test_Controller
 *
 * @package P4BKS\Controllers\Blocks
 * @since 0.1
 */
class Test extends Base_Block {

	/** @const string BLOCK_NAME */
	const BLOCK_NAME = 'test';

	public function __construct() {
		// - Register the block for the editor
		// in the PHP side.
		register_block_type(
			'planet4-blocks/'.self::BLOCK_NAME,
			[
				'editor_script'   => 'planet4-blocks',
				'render_callback' => [ $this, 'render' ],
			]
		);
	}

	/**
	 * Get all the data that will be needed to render the block correctly.
	 *
	 * @param array $attributes This is the array of fields of this block.
	 * @param string $content This is the post content.
	 * @param string $shortcode_tag The shortcode tag of this block.
	 *
	 * @return array The data to be passed in the View.
	 */
	public function prepare_data( $attributes, $content = '', $shortcode_tag = 'shortcake_' . self::BLOCK_NAME ): array {

		global $post;

		$content = $post->post_content;
//		$menu    = $this->parse_post_content( $content, $attributes );

//		wp_enqueue_script( 'submenu', P4NL_GB_BKS_ADMIN_DIR . 'js/submenu.js', [ 'jquery' ], '0.2', true );
//		wp_localize_script( 'submenu', 'submenu', $menu );

		$block_data = [
			'title' => $attributes['title'] ?? '',
//			'menu'  => $menu,
//			'style' => $attributes['submenu_style'] ?? '1',
		];

		return $block_data;
	}

}

