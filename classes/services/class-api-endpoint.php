<?php


namespace P4NL_GB_BKS\Services;

use Timber\Twig_Function;

class API_Endpoint {

	public function __construct(){
		add_action( 'rest_api_init', function () {
			register_rest_route( 'myplugin/v1', '/author/(?P<id>\d+)', array(
				'methods' => 'GET',
				'callback' => 'my_awesome_func',
			) );
		} );
	}

	/**
	 * Grab latest post title by an author!
	 *
	 * @param array $data Options for the function.
	 * @return string|null Post title for the latest,  * or null if none.
	 */
	function my_awesome_func( $data ) {
		return "test";

//		$posts = get_posts( array(
//			'author' => $data['id'],
//		) );
//
//		if ( empty( $posts ) ) {
//			return null;
//		}
//
//		return $posts[0]->post_title;
	}




}


