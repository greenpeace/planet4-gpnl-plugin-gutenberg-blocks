<?php
/**
 * No Index block class
 *
 * @package GPNL\Plugin
 * @since 0.1
 */

namespace GPNL\Plugin\Blocks;

/**
 * Defines the NoIndex Gutenberg block
 *
 * @package GPNL\Plugin\Blocks
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

			// Add a no-index to the head tag.
			add_action( 'wp_head', 'wp_no_robots' );

			// Check if there are categories or tags and remove them.
			$post_id = get_the_ID();
			if (null !== get_the_tags($post_id)) {
				wp_set_post_tags($post_id, null);
			}
			if (null !== get_the_category($post_id)) {
				wp_set_post_categories($post_id, null);
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

}
