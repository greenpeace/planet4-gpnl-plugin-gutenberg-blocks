<?php
/**
 * Base block class.
 *
 * @package P4NL_GB_BKS
 */

namespace P4NL_GB_BKS\Blocks;

/**
 * Class Base_Block
 *
 * @package P4NL_GB_BKS\Blocks
 */
class Base_Block {

	protected function getClassName() {
		$array = explode( '\\', get_class( $this ) );
		return end( $array );
	}

	protected function getKebabCaseClassName() {
		return strtolower( preg_replace( '%([a-z])([A-Z])%', '\1-\2', $this->getClassName() ) );
	}

	/**
	 * @param $attributes
	 *
	 * @return mixed
	 */
	public function render( $attributes ) {

		$data = $this->prepare_data( $attributes );

		\Timber::$locations = P4NL_GB_BKS_PLUGIN_DIR . '/templates/blocks';

		// underscore name for twig files.
		$underscore_block_name = str_replace( '-', '_', $this->getKebabCaseClassName() );

		$public_dir = [
			'public' => P4NL_GB_BKS_PUBLIC_DIR,
			'images' => P4NL_GB_BKS_PUBLIC_DIR . '/images/',
		];
		if ( gettype( $data ) === 'array' ) {
			$data = array_merge( $data, $public_dir );
		} else {
			$data = $public_dir;
		}

		$block = \Timber::compile( $underscore_block_name . '.twig', $data );

		// Return empty string if rendered output contains only whitespace or new lines.
		return ctype_space( $block ) ? '' : $block;
	}

	/**
	 * Outputs an error message.
	 *
	 * @param string $message Error message.
	 */
	public function render_error_message( $message ) {
		// Ensure only editors see the error, not visitors to the website.
		if ( current_user_can( 'edit_posts' ) ) {
			\Timber::render(
				P4NL_GB_BKS_PLUGIN_NAME . 'templates/block-error-message.twig',
				array(
					'category' => __( 'Error', 'planet4-gpnl-blocks' ),
					'message'  => $message,
				)
			);
		}
	}
}
