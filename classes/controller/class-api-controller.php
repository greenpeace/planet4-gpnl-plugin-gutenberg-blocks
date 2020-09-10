<?php


namespace P4NL_GB_BKS\Controllers;

use WP_REST_Response;

class API_Controller {

	public function __construct(){
		$this->register_routes();
	}

	/**
	 * Get the count from the specified counter
	 *
	 * @param array $data Options for the function.
	 * @return WP_REST_Response Post title for the latest, * or null if none.
	 */
	function get_counter($data ) {
		$post_id = $data['post_id'];
		$counter_id = $data['counter_id'];
		$db_counter = intval(get_post_meta($post_id, 'counter_test', true));
		$response =  ['unique_count' => $db_counter];

		$result = new WP_REST_Response($response, 200);
		$result->set_headers(wp_get_nocache_headers());
		return $result;
	}

	/**
	 * Increment the specified counter
	 *
	 * @param $request
	 * @return boolean Post title for the latest, * or null if none.
	 */
	function set_counter( $request ) {
		$data       = $request->get_json_params();
		$post_id    = $data['post_id'];
		$counter_id = $data['counter_id'];

		$db_counter =  get_post_meta($post_id, 'counter_test', true);
		$db_counter++;
		return update_post_meta($post_id, 'counter_test', $db_counter) ? $db_counter : false;
	}

	private function register_routes() {
		add_action( 'rest_api_init', function () {
			register_rest_route( 'P4NL/v1', '/counter/(?P<post_id>\d+)/(?P<counter_id>\d+)',
				[
					'methods' => 'GET',
					'callback' => [ $this, 'get_counter'],
					'permission_callback' => '__return_true',
				]
			);
			register_rest_route( 'P4NL/v1', '/counter/',
				[
					'methods' => 'PATCH',
					'callback' => [ $this, 'set_counter' ],
					'permission_callback' => '__return_true',
				]
			);
		} );
	}


}


