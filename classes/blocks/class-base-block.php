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

		$options     = get_option( 'planet4nl_options' );
		$notification= $options['gpnl_sf_notification'];
		$partial_permalink = get_permalink();

		if (strpos($underscore_block_name, "Donation") || strpos($underscore_block_name, "Petition")) {
			if (strpos($partial_permalink, "/acties/")) {
				$partial_permalink = explode("/acties/", $partial_permalink)[1];
			}
			else {
				$partial_permalink = explode("/nl/", $partial_permalink)[1];
			}
			$partial_permalink = rtrim($partial_permalink, '/');
			$partial_permalink = str_replace("/", "-", $partial_permalink);
		}

		$base_data = [
			'public' => P4NL_GB_BKS_PUBLIC_DIR,
			'images' => P4NL_GB_BKS_PUBLIC_DIR . '/images/',
			'notification' => $notification,
			'permalink'	 => $partial_permalink,
		];

		if ( gettype( $data ) === 'array' ) {
			$data = array_merge( $data, $base_data );
		} else {
			$data = $base_data;
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
