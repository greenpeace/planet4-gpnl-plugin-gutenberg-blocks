<?php

/**
 * @package P4NL_GB_BKS
 * @since 0.1
 */

namespace P4NL_GB_BKS\Blocks;

use P4NL_GB_BKS\Services\Asset_Enqueuer;


/**
 * @package P4NL_GB_BKS\Controllers\Blocks
 * @since 0.1
 */
class SocialMessage extends Base_Block {

	/**
	 * Defines the fields and render callback for Gutenberg
	 */
	public function __construct() {

		register_block_type(
			'planet4-gpnl-blocks/' . $this->getKebabCaseClassName(),
			[
				'editor_script'   => 'planet4-gpnl-blocks',
			]
		);
		add_action( 'wp_enqueue_scripts', [ $this, 'enqueue_scripts' ] );
	}

	/**
	 * This will run before determining which template to load.
	 */
	public function enqueue_scripts() {

		// Check if the block is present on the page that is requested.
		if ( has_block( 'planet4-gpnl-blocks/' . $this->getKebabCaseClassName() ) )
		{
//			Asset_Enqueuer::enqueue_asset( 'hero-image', 'style' );
			Asset_Enqueuer::enqueue_asset( 'socialMessage', 'style');
			Asset_Enqueuer::enqueue_asset( 'socialMessage', 'script', ['wp-element'], true );
		}
	}
}

