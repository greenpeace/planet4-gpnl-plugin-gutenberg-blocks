<?php


namespace P4NL_GB_BKS\Controllers;

use WP_REST_Response;


class API_Controller {

	/** @var string $template_dir The path to the template files. */
	private $gpnl_eactivism_db_version = '1.0';


	public function __construct(){
		$this->gpnl_eactivism_db_version = '1.0';
		$this->check_db();
		$this->register_routes();
	}

	/**
	 * Get the count from the specified counter
	 *
	 * @param array $data Options for the function.
	 * @return WP_REST_Response Post title for the latest, * or null if none.
	 */
	function get_counter($data ) {
		global $wpdb;
		$table_name = $wpdb->prefix . 'gpnl_eactivism';

		$post_id = $data['post_id'];
		$counter_id = $data['counter_id'];

		$sql       = "SELECT count FROM {$table_name} WHERE page_id= '%d' AND counter_id = '%d' ;";
		$sql       = $wpdb->prepare( $sql, [$post_id, $counter_id] );
		$count	   = $wpdb->get_var( $sql );

		$response =  ['unique_count' => $count];
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
		global $wpdb;
		$table_name = $wpdb->prefix . 'gpnl_eactivism';

		$data       = $request->get_json_params();
		$post_id    = $data['post_id'];
		$counter_id = $data['counter_id'];
		if ($counter_id < 0) return false;

		$select_sql       = "SELECT count, id FROM {$table_name} WHERE page_id= '%d' AND counter_id = '%d'";
		$select_sql       = $wpdb->prepare( $select_sql, [$post_id, $counter_id] );
		$results   = $wpdb->get_results( $select_sql );
		if ($results == NULL) {
			$row_id = $wpdb->get_var("SELECT MAX(id) FROM {$table_name}")+1;
			$new_count = 1;
		}
		else{
			$count     = $results[0]->count;
			$row_id    = $results[0]->id;;
			$new_count = $count + 1;
		}

		$insert_sql = "INSERT INTO {$table_name} (id,page_id,counter_id,count) VALUES (%d,%d,%d,%d) ON DUPLICATE KEY UPDATE count = %d";
		$insert_sql = $wpdb->prepare($insert_sql,$row_id,$post_id,$counter_id,$new_count, $new_count);
		$updated = $wpdb->query($insert_sql);
		// TODO query returns 2 affected rows on update, why?

		return $updated > 0 ? $new_count : false;
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

	private function check_db()	{
		global $wpdb;
		$installed_ver = get_option( "gpnl_eactivism_db_version" );

		if ( $installed_ver != $this->gpnl_eactivism_db_version ) {
			$table_name = $wpdb->prefix . 'gpnl_eactivism';
			$charset_collate = $wpdb->get_charset_collate();

			$sql = "CREATE TABLE $table_name (
  		id bigint(20)  NOT NULL AUTO_INCREMENT,
  		page_id bigint(20) NOT NULL,
  		counter_id mediumint(9) NOT NULL,
  		count mediumint(9) NOT NULL,
  		last_update datetime DEFAULT CURRENT_TIMESTAMP NOT NULL,
  		PRIMARY KEY  (id)
		) $charset_collate;";

			require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );
			dbDelta( $sql );

			add_option( 'gpnl_eactivism_db_version', $this->gpnl_eactivism_db_version );
		}
	}


}


