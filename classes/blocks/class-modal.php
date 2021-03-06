<?php
/**
 * Hero Image block class
 *
 * @package P4NL_GB_BKS
 * @since 0.1
 */

namespace P4NL_GB_BKS\Blocks;

use P4NL_GB_BKS\Services\Asset_Enqueuer;


/**
 * Defines the HeroImage block for Gutenberg
 *
 * @package P4BKS\Controllers\Blocks
 * @since 0.1
 */
class Modal extends Base_Block {

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
		add_action( 'wp_enqueue_scripts', [ $this, 'enqueue_if_block_is_present' ] );
	}

	/**
	 * This will run before determining which template to load.
	 */
	public function enqueue_if_block_is_present() {

		// Check if the block is present on the page that is requested.
		if ( has_block( 'planet4-gpnl-blocks/' . $this->getKebabCaseClassName() ) ) {

			Asset_Enqueuer::enqueue_asset( 'modal', 'style' );
			wp_register_script( 'popper', 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"', [], '1.14.7', true );
			wp_enqueue_script( 'popper' );
			wp_register_script( 'bootstrap', 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.1/js/bootstrap.min.js', [ 'jquery', 'popper' ], '4.1.1', true );
			wp_enqueue_script( 'bootstrap' );
		}
	}
}

