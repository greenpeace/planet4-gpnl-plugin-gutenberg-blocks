<?php

/**
 * @package GPNL\Plugin
 * @since 0.1
 */

namespace GPNL\Plugin\Blocks;

use GPNL\Plugin\Services\Asset_Enqueuer;


/**
 * @package GPNL\Plugin\Controllers\Blocks
 * @since 0.1
 */
class Columns extends Base_Block {

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
			Asset_Enqueuer::enqueue_asset( 'columns', 'style');
			Asset_Enqueuer::enqueue_asset( 'columns', 'script', ['wp-element'], true );
		}
	}
}

