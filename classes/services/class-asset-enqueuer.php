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
	 * It is also possible to add external dependencies that are loaded through a CDN. See the readme.md for an example.
	 */
	public static function enqueue_asset( $filename, $asset_type, $dependencies = [], $in_footer = false ) {

		$build_path = $_SERVER['DOCUMENT_ROOT'] . '/wp-content/plugins/' . P4NL_GB_BKS_PLUGIN_DIRNAME . '/assets/build/';

		// Bootstrap as a dependency
//		wp_enqueue_style( 'bootstrap', 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.1/css/bootstrap.min.css', array(), '4.1.1' );

		if ( 'style' === $asset_type ) {
			$file_path = $build_path . $filename . '.min.css';
		} elseif ( 'script' === $asset_type ) {
			$file_path = $build_path . $filename . '.min.js';
		}

		$file_asset_path = $build_path . $filename . '.min.asset.php';
		$file_asset      = file_exists( $file_asset_path ) ? require $file_asset_path : [
			'dependencies' => [],
			'version'      => filemtime( $file_path ),
		];

		if ( 'style' === $asset_type ) {
			// Always adding the child-style and bootstrap as a css depencency.
			$dependencies = array_merge( [ 'child-style', 'bootstrap' ], $dependencies );
			wp_enqueue_style( $filename, P4NL_GB_BKS_PLUGIN_URL . 'assets/build/' . $filename . '.min.css', $dependencies, $file_asset['version'] );
		} elseif ( 'script' === $asset_type ) {
			$dependencies = array_merge( $file_asset['dependencies'], $dependencies );
			wp_enqueue_script( $filename, P4NL_GB_BKS_PLUGIN_URL . 'assets/build/' . $filename . '.min.js',  $dependencies, $file_asset['version'], $in_footer );
		}
	}

	/**
	 * Enqueue external assets (such as assets from a CDN).
	 * See the readme.md for an example.
	 */
	public static function enqueue_external_asset($asset_handle, $asset_type, $asset_src, $asset_is_in_footer = false) {
			if ( 'style' === $asset_type ) {
				wp_enqueue_style( $asset_handle, $asset_src, [], null );
			} elseif ( 'script' === $asset_type ) {
				wp_enqueue_script( $asset_handle, $asset_src, [], null, $asset_is_in_footer );
			}
	}
}

