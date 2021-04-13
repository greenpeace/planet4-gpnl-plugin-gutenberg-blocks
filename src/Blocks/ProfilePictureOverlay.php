<?php
/**
 * Prof Picture Overlay block class
 * @package GPNL\Plugin
 */

namespace GPNL\Plugin\Blocks;

use GPNL\Plugin\Services\Asset_Enqueuer;

/**
 * Defines the HeroImage block for Gutenberg
 *
 * @package GPNL\Plugin\Blocks
 * @since 0.1
 */
class ProfilePictureOverlay extends Base_Block
{
	/**
	 * Defines the fields and render callback for Gutenberg
	 */
	public function __construct()
	{
		register_block_type('planet4-gpnl-blocks/' . $this->getKebabCaseClassName());
		add_action('wp_enqueue_scripts', [$this, 'enqueue_if_block_is_present']);
	}

	/**
	 * This will run before determining which template to load.
	 */
	public function enqueue_if_block_is_present()
	{
		// Check if the block is present on the page that is requested.
		if (has_block('planet4-gpnl-blocks/' . $this->getKebabCaseClassName())) {
			Asset_Enqueuer::enqueue_asset('profile-picture-overlay', 'style');
			Asset_Enqueuer::enqueue_asset('profile-picture-overlay', 'script', [], true);
		}
	}
}

