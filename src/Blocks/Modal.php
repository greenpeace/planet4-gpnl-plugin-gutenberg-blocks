<?php
/**
 * Hero Image block class
 *
 * @package GPNL\Plugin
 * @since 0.1
 */

namespace GPNL\Plugin\Blocks;

use GPNL\Plugin\Services\Asset_Enqueuer;


/**
 * Defines the HeroImage block for Gutenberg
 *
 * @package GPNL\Plugin\Blocks
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
			wp_register_script( 'popper', 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js', ['child-theme-main'], '2.9.1', true );
			wp_enqueue_script( 'popper' );
			wp_dequeue_script('bootstrap');
			wp_register_script( 'bootstrap5', 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.min.js', [ 'popper' ], '5.0.0-b3', true );
			wp_enqueue_script( 'bootstrap5' );
		}
	}
}

