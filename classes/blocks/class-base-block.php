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
		$array = explode('\\', get_class($this));
		return end($array);
	}

	protected function getKebabCaseClassName(){
		return strtolower(preg_replace('%([a-z])([A-Z])%', '\1-\2', $this->getClassName()));
	}

	/**
	 * @param $attributes
	 *
	 * @return mixed
	 */
	public function render( $attributes ) {

		$data = $this->prepare_data( $attributes );

		\Timber::$locations = P4NL_GB_BKS_PLUGIN_DIR . '/templates/blocks';

		// underscore name for twig files
		$underscoreBlockName = str_replace("-", "_", $this->getKebabCaseClassName());

		$block = \Timber::compile( $underscoreBlockName. '.twig', $data );

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

	protected function enqueue_style ($filename, $dependencies = null) {

		$file_path       =  $_SERVER['DOCUMENT_ROOT'].'/wp-content/plugins/'.P4NL_GB_BKS_PLUGIN_DIRNAME.'/assets/build/'.$filename.'.min.css';
		$file_asset_path =  $_SERVER['DOCUMENT_ROOT'].'/wp-content/plugins/' . P4NL_GB_BKS_PLUGIN_DIRNAME .  '/assets/build/'. $filename.'.asset.php';

		$file_asset      = file_exists( $file_asset_path )
			? require( $file_asset_path )
			: array( 'dependencies' => [], 'version' => filemtime( $file_path ) );

		wp_enqueue_style( 'hero-image', P4NL_GB_BKS_PLUGIN_URL.'/assets/build/'.$filename.'.min.css', $dependencies , $file_asset['version'] );
	}
}
