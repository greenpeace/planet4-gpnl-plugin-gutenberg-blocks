<?php

//TODO: REMOVE THIS BLOCK FROM THE CHILD THEME, IT IS PART OF THE MASTER THEME


/**
 * Submenu block class
 *
 * @package P4NL_GB_BKS
 * @since 0.1
 */

namespace P4NL_GB_BKS\Blocks;


/**
 * Class SubMenu_Controller
 *
 * @package P4BKS\Controllers\Blocks
 * @since 0.1
 */
class Submenu extends Base_Block {

	/** @const string BLOCK_NAME */
	const BLOCK_NAME = 'submenu';

	public function __construct() {
		// - Register the block for the editor
		// in the PHP side.
		register_block_type(
			'planet4-blocks/submenu',
			[
				'editor_script'   => 'planet4-blocks',
				'render_callback' => [ $this, 'render' ],
				'attributes'      => [
					'submenu_style'  => [
						'type'    => 'integer',
						'default' => 1,
					],
					'title'       => [
						'type'    => 'string',
						'default' => '',
					],
					'heading1'        => [
						'type'  => 'array',
						'items' => [
							'type' => 'string',
						],
					],
					'link1'  => [
						'type'  => 'boolean',
					],
					'style1'  => [
						'type'  => 'array',
						'items' => [
							'type' => 'string',
						],
					],
					'heading2'        => [
						'type'  => 'array',
						'items' => [
							'type' => 'string',
						],
					],
					'link2'  => [
						'type'  => 'boolean',
					],
					'style2'  => [
						'type'  => 'array',
						'items' => [
							'type' => 'string',
						],
					],
				],
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

