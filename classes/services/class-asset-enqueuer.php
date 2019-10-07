<?php
/**
 * Class to enqueue assets; both css and js.
 *
 * @package P4NL_GB_BKS
 * @since 0.1.0
 */

namespace P4NL_GB_BKS\Services;

class Asset_Enqueuer {

	/**
	 * This will enqueue an asset. Either a style-file (css) or a script-file (js).
	 * The name of the file that should be passed as an argument is the name defined in the webpack config.
	 */
	public static function enqueue_asset( $filename, $asset_type, $in_footer = false ) {

		$build_path = $_SERVER['DOCUMENT_ROOT'] . '/wp-content/plugins/' . P4NL_GB_BKS_PLUGIN_DIRNAME . '/assets/build/';

		if ( 'style' === $asset_type ) {
			$file_path = $build_path . $filename . '.min.css';
		} elseif ( 'script' === $asset_type ) {
			$file_path = $build_path . $filename . '.min.js';
		}

		$file_asset_path = $build_path . $filename . '.asset.php';
		$file_asset      = file_exists( $file_asset_path ) ? require $file_asset_path : [
			'dependencies' => [],
			'version'      => filemtime( $file_path ),
		];

		if ( 'style' === $asset_type ) {
			wp_enqueue_style( $filename, P4NL_GB_BKS_PLUGIN_URL . 'assets/build/' . $filename . '.min.css', $file_asset['dependencies'], $file_asset['version'] );
		} elseif ( 'script' === $asset_type ) {
			wp_enqueue_script( $filename, P4NL_GB_BKS_PLUGIN_URL . 'assets/build/' . $filename . '.min.js', $file_asset['dependencies'], $file_asset['version'], $in_footer );
		}
	}

}
