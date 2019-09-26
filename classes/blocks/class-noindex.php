<?php


/**
 * No Index block class
 *
 * @package P4NL_GB_BKS
 * @since 0.1
 */

namespace P4NL_GB_BKS\Blocks;


/**
 * @package P4BKS\Controllers\Blocks
 * @since 0.1
 */
class Noindex extends Base_Block {

	public function __construct() {
		// - Register the block for the editor in the PHP side.
		register_block_type(
			'planet4-gpnl-blocks/' . $this->getKebabCaseClassName(),
			[
				'editor_script' => 'planet4-gpnl-blocks',
				'render_callback' => [$this, 'render'],
				'attributes' => [ ]
			]
		);
	}

	public function load() {

		//	add a function on saving of a post and add a function on loading of the page, before outputting the header
		if ( is_admin() ) {
			add_action( 'save_post', [ $this, 'delete_tags_and_categories' ] );
		} else {
			add_action( 'template_redirect', [ $this, 'add_robots_noindex_to_wp_header' ] );
		}
	}

	/**
	 * Get all the data that will be needed to render the block correctly.
	 *
	 * @param array $fields This is the array of fields of this block.
	 *
	 * @return array The data to be passed in the View.
	 */
	public function prepare_data() {

		// TODO: The code does not yet work. The 'add_action' does not work inside this class. What is wrong?

		$this->load();

		return null;
	}

	/**
	 * Should only run on saving of pages/posts.
	 * Checks if the noindex block is used, if so, removes the categories and tags
	 */
	public function delete_tags_and_categories() {
		if ( ! empty( $_POST ) && defined( $_POST['content']) && has_shortcode( $_POST['content'], 'shortcake_noindex' ) ) {
			wp_set_post_terms( $_POST['post_ID'], [], 'post_tag' );
			wp_set_post_terms( $_POST['post_ID'], [], 'category' );
		}
	}

	/**
	 * Is meant to be use just before the rendering starts, so to modify the header dependent of the page content.
	 * Checks if the noindex block is used, if so add the robots noindex metatag
	 */
	public function add_robots_noindex_to_wp_header() {

		global $post;

		if ( ! is_object( $post ) ) {
			return;
		}
		$post_content = $post->post_content;

		if ( ( null !== $post_content ) && has_shortcode( $post_content, 'shortcake_noindex' ) ) {
			add_action( 'wp_head', 'wp_no_robots' );
		}
	}

}
