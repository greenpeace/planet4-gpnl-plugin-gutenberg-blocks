<?php

/**
 * HeroImage block class
 *
 * @package P4NL_GB_BKS
 * @since 0.1
 */
namespace P4NL_GB_BKS\Blocks;

/**
 * Class HeroImage
 * @package P4NL_GB_BKS\Blocks
 */
class HeroImage extends Base_Block {

	/**
	 * Block name.
	 *
	 * @const string BLOCK_NAME.
	 */
	const BLOCK_NAME = 'hero-image';

	public function __construct() {
		register_block_type( 'planet4-blocks/hero-image', [
			'editor_script'   => 'planet4-blocks',           //   in the PHP side.
			'render_callback' => [ $this, 'render' ]
		] );
	}
}
