<?php
/**
 * User: oscar
 * Date: 13-04-21
 * Time: 15:54
 */

namespace GPNL\Plugin\Blocks;


use GPNL\Plugin\Services\Asset_Enqueuer;
use PDO;
use PDOException;

class ShipCompetition extends Base_Block
{
	/**
	 * Defines the fields and render callback for Gutenberg
	 */
	public function __construct() {

		// - Register the block for the editor
		// in the PHP side.
		register_block_type(
			'planet4-gpnl-blocks/' . $this->getKebabCaseClassName(),
			[
				'editor_script'   => 'planet4-gpnl-blocks',
				'render_callback' => [ $this, 'render' ],
				'attributes'      => [
					'quote'     => [
						'type'    => 'string',
						'default' => '',
					],
					'quotee'    => [
						'type'    => 'string',
						'default' => '',
					],
					'image_url' => [
						'type'    => 'string',
						'default' => '',
					],
					'image_id'  => [
						'type'    => 'number',
						'default' => '',
					]
				]
			]
		);
		add_action( 'wp_enqueue_scripts', [ $this, 'enqueue_if_block_is_present' ] );
		add_action('admin_post_process_ship_naming_competition_form_data', [$this, 'process_ship_naming_competition_form_data']);
	}

	/**
	 * This will run before determining which template to load.
	 */
	public function enqueue_if_block_is_present()
	{
		// Check if the block is present on the page that is requested.
		if ( has_block( 'planet4-gpnl-blocks/' . $this->getKebabCaseClassName() ) ) {
			Asset_Enqueuer::enqueue_asset( 'collapsible', 'style' );
		}
	}

	/**
	 * Get all the data that will be needed to render the block correctly.
	 *
	 * @param array $fields This is the array of fields of this block.
	 *
	 * @return array The data to be passed in the View.
	 */
	public function prepare_data( $fields ): array {

		if(isset($_GET['submitted'])) {
			$fields['form_submitted'] = true;
			$fields['form_submitter'] = $_GET['submitter'];
		}

		return [
			'fields' => $fields,
		];
	}

	public function process_ship_naming_competition_form_data(): void
	{
		$_POST = wp_unslash( $_POST );
		$firstname  = htmlspecialchars( wp_strip_all_tags( $_POST['firstname'] ));
		$lastname  = htmlspecialchars( wp_strip_all_tags( $_POST['lastname'] ));
		$name= urlencode($firstname . " " . $lastname);
		$HTTPREFERER = htmlspecialchars( wp_strip_all_tags( $_SERVER['HTTP_REFERER'] ));

		$this->dbconn();

		header('Location: ' . $HTTPREFERER . '?submitted=true&submitter=' . $name);
		exit;
	}

	public function dbconn(): void
	{
		try {
//			TODO: Fix connection to db server
			$options = get_option('planet4nl_options');
			$host        = $options['gpnl_db_host'];
			$db          = $options['gpnl_db'];
			$user        = $options['gpnl_db_user'];
			$pass        = $options['gpnl_db_pass'];
			$ca          = '/app/source/public/wp-content/uploads/ca.pem';
			$client_cert = '/app/source/public/wp-content/uploads/client-cert.pem';
			$client_key  = '/app/source/public/wp-content/uploads/client-key.pem';
			$trusted_ca  = $host === "vmkepler.greenpeace.nl";

			$options = [
				PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8',
//				PDO::MYSQL_ATTR_SSL_CA => $ca,
//				PDO::MYSQL_ATTR_SSL_CERT => $client_cert,
//				PDO::MYSQL_ATTR_SSL_KEY => $client_key,
//				PDO::MYSQL_ATTR_SSL_VERIFY_SERVER_CERT => false,
			];

			$conn = new PDO("mysql:host=$host;port=3306;dbname=$db", $user, $pass, $options);
			// set the PDO error mode to exception
			$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
			echo "Connected successfully";
			$bla = $conn->query("SHOW STATUS LIKE 'Ssl_cipher';")->fetchAll();
			$conn = null;
		} catch (PDOException $e) {
			echo "Connection failed: " . $e->getMessage();
		}
	}
}
