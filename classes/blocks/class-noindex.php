<?php
/**
 * No Index block class
 *
 * @package P4NL_GB_BKS
 * @since 0.1
 */

namespace P4NL_GB_BKS\Blocks;

/**
 * Defines the NoIndex Gutenberg block
 *
 * @package P4BKS\Controllers\Blocks
 * @since 0.1
 */
class Noindex extends Base_Block {

	/**
	 * Define the exposed render function for Gutenberg
	 */
	public function __construct() {
		register_block_type(
			'planet4-gpnl-blocks/' . $this->getKebabCaseClassName(),
			[
				'editor_script'   => 'planet4-gpnl-blocks',
				'render_callback' => [ $this, 'render' ],
				'attributes'      => [],
			]
		);
		add_action( 'template_redirect', [ $this, 'pre_render_if_block_is_present' ] );
	}


	/**
	 * This will run before determining which template to load.
	 */
	/** @noinspection PhpUnused */
	public function pre_render_if_block_is_present() {

		// Check if the block is present on the page that is requested.
		if ( has_block( 'planet4-gpnl-blocks/' . $this->getKebabCaseClassName() ) ) {

			if ( is_admin() ) {
				// add a function on saving of a post.
				add_action( 'save_post', [ $this, 'delete_tags_and_categories' ] );
			} else {
				// add a no-index to the head tag.
				add_action( 'wp_head', 'wp_no_robots' );
			}
		}
	}

	/**
	 * Get all the data that will be needed to render the block correctly.
	 *
	 * @return null This block does not render anything
	 */
	/** @noinspection PhpUnused */
	public function prepare_data() {
		// nothing has to be rendered, so we return null.
		return null;
	}

	/**
	 * Should only run on saving of pages/posts.
	 * Checks if the noindex block is used, if so, removes the categories and tags
	 */
	/** @noinspection PhpUnused */
	public function delete_tags_and_categories() {
		// TODO: what about these shortcake/shortcode checks? Can we remove these?
		if ( ! empty( $_POST ) && defined( $_POST['content'] ) && has_shortcode( $_POST['content'], 'shortcake_noindex' ) ) {
			wp_set_post_terms( $_POST['post_ID'], [], 'post_tag' );
			wp_set_post_terms( $_POST['post_ID'], [], 'category' );
		}
	}

}
