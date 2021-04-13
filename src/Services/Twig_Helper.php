<?php


namespace GPNL\Plugin\Services;

use Timber\Twig_Function;

class Twig_Helper {

	public function __construct()
	{
		add_filter( 'timber/twig', [ $this, 'add_image_to_twig' ] );
		add_filter( 'timber/twig', [ $this, 'add_file_to_twig' ] );
	}

	/**
	 * A Twig functionality to add the image public path.
	 *
	 * @param \Twig\Environment $twig
	 * @return \Twig\Environment
	 */
	public static function add_image_to_twig( $twig ) {

		$twig->addFunction( new Twig_Function( 'image', function ( $param1 ) {
			return isset( $param1 ) ? P4NL_GB_BKS_PUBLIC_DIR . '/images/' . $param1 : '';
		} ) );

		return $twig;
	}

	/**
	 * A Twig functionality to add the public path.
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

