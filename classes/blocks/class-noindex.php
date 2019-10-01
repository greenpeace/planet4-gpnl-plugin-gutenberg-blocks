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
		add_action('template_redirect', [$this, 'pre_render_if_block_is_present']);
	}


	/**
	 * This will run before determining which template to load.
	 */
	function pre_render_if_block_is_present(){

		// Check if the block is present on the page that is requested.
		if(has_block('planet4-gpnl-blocks/' .$this->getKebabCaseClassName())){

			// add a function on saving of a post.
			if ( is_admin() ) {
				add_action( 'save_post', [ $this, 'delete_tags_and_categories' ] );
			// add a no-index to the head tag.
			} else {
				add_action( 'wp_head', 'wp_no_robots' );
			}
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

		// nothing has to be rendered, so we return null.
		return null;
	}

	/**
	 * Should only run on saving of pages/posts.
	 * Checks if the noindex block is used, if so, removes the categories and tags
	 */
	public function delete_tags_and_categories() {
		// TODO: what about these shortcake/shortcode checks? Can we remove these?
		if ( ! empty( $_POST ) && defined( $_POST['content']) && has_shortcode( $_POST['content'], 'shortcake_noindex' ) ) {
			wp_set_post_terms( $_POST['post_ID'], [], 'post_tag' );
			wp_set_post_terms( $_POST['post_ID'], [], 'category' );
		}
	}

}
