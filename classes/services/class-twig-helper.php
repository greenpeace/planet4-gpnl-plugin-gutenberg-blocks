<?php


namespace P4NL_GB_BKS\Services;

use Timber\Twig_Function;

class Twig_Helper {


	/**
	 * A Twig functionality to add the image scr path.
	 *
	 * @param \Twig\Environment $twig
	 * @return \Twig\Environment
	 */
	public static function add_to_twig( $twig ) {

		$twig->addFunction( new Twig_Function( 'image', function ( $param1 ) {
			return isset( $param1 ) ? P4NL_GB_BKS_PUBLIC_DIR . '/images/' . $param1 : '';
		} ) );

		return $twig;
	}

	/**
	 * A Twig functionality to add the image scr path.
	 *
	 * @param \Twig\Environment $twig
	 * @return \Twig\Environment
	 */
	public static function add_file_to_twig( $twig ) {

		$twig->addFunction( new Twig_Function( 'file', function ( $param1 ) {
			return isset( $param1 ) ? P4NL_GB_BKS_PUBLIC_DIR . $param1 : '';
		} ) );

		return $twig;
	}

}

add_filter( 'timber/twig', [ 'P4NL_GB_BKS\Services\Twig_Helper', 'add_to_twig' ] );
add_filter( 'timber/twig', [ 'P4NL_GB_BKS\Services\Twig_Helper', 'add_file_to_twig' ] );
