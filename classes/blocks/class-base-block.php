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

	/**
	 * @param $attributes
	 *
	 * @return mixed
	 */
	public function render( $attributes ) {

		$data = $this->prepare_data( $attributes );

		\Timber::$locations = P4NL_GB_BKS_PLUGIN_DIR . '/templates/blocks';

		$coversBlock = \Timber::compile( static::BLOCK_NAME. '.twig', $data );

		// Return empty string if rendered output contains only whitespace or new lines.
		return ctype_space( $coversBlock ) ? '' : $coversBlock;
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
				P4NL_GB_BKS_PLUGIN_DIR . 'templates/block-error-message.twig',
				array(
					'category' => __( 'Error', 'planet4-blocks' ),
					'message'  => $message,
				)
			);
		}
	}
}
