<?php

namespace GPNL\Plugin\Blocks;


use GPNL\Plugin\Services\Asset_Enqueuer;
use PDO;
use PDOException;

class ShipCompetition extends Base_Block
{
	/**
	 * Defines the fields and render callback for Gutenberg
	 */
	public function __construct()
	{
		// - Register the block for the editor
		// in the PHP side.
		register_block_type(
			'planet4-gpnl-blocks/' . $this->getKebabCaseClassName(),
			[
				'editor_script'   => 'planet4-gpnl-blocks',
				'render_callback' => [$this, 'render'],
			]
		);
		add_action('wp_enqueue_scripts', [$this, 'enqueue_if_block_is_present']);
		add_action('admin_post_process_ship_naming_competition_form_data', [$this, 'process_ship_naming_competition_form_data']);
		add_action('admin_post_nopriv_process_ship_naming_competition_form_data', [$this, 'process_ship_naming_competition_form_data']);
	}

	/**
	 * This will run before determining which template to load.
	 */
	public function enqueue_if_block_is_present()
	{
		// Check if the block is present on the page that is requested.
		if (has_block('planet4-gpnl-blocks/' . $this->getKebabCaseClassName())) {
			Asset_Enqueuer::enqueue_asset('ship-naming-competition', 'style');
			Asset_Enqueuer::enqueue_asset('ship-naming-competition', 'script', [], true);
		}
	}

	/**
	 * Get all the data that will be needed to render the block correctly.
	 *
	 * @param array $fields This is the array of fields of this block.
	 *
	 * @return array The data to be passed in the View.
	 */
	public function prepare_data($fields)
	{
		if (isset($_GET['submitter'])) {
			$fields['form_submitted'] = true;
			$fields['form_submitter'] = $_GET['submitter'];
		}
		if (isset($_GET['form_error'])) {
			$fields['form_error'] = true;
		}
		return ['fields' => $fields];
	}

	public function process_ship_naming_competition_form_data(): void
	{
		$_POST = wp_unslash($_POST);
		$form_data = array(
			'first_name' => htmlspecialchars(wp_strip_all_tags($_POST['first_name'])),
			'last_name'  => htmlspecialchars(wp_strip_all_tags($_POST['last_name'])),
			'email'      => htmlspecialchars(wp_strip_all_tags($_POST['email'])),
			'ship_name'  => htmlspecialchars(wp_strip_all_tags($_POST['ship_name'])),
			'optin'      => isset($_POST['optin']) ? 1 : 0
		);

		$this->insertDataInDatabase($form_data);
	}

	public function insertDataInDatabase($form_data)
	{
		$options = get_option('planet4nl_options');
		$host = $options['gpnl_db_host'];
		$db = $options['gpnl_db'];
		$user = $options['gpnl_db_user'];
		$pass = $options['gpnl_db_pass'];

		$PdoOptions = array(
			PDO::MYSQL_ATTR_INIT_COMMAND           => 'SET NAMES utf8',
			PDO::MYSQL_ATTR_SSL_CA                 => true,
			PDO::MYSQL_ATTR_SSL_VERIFY_SERVER_CERT => false,
		);

		$HTTP_REFERER = htmlspecialchars(wp_strip_all_tags($_SERVER['HTTP_REFERER']));

		try {
			$conn = new PDO("mysql:host=$host;dbname=$db", $user, $pass, $PdoOptions);
			// set the PDO error mode to exception for testing:
//			 $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
			$sql = "INSERT INTO shipname (first_name, last_name, email, ship_name, optin) VALUES (:first_name, :last_name, :email, :ship_name, :optin)";
			$conn->prepare($sql)->execute($form_data);
			header('Location: ' . $HTTP_REFERER . '?submitter=' . $form_data['first_name']);
			exit();
		} catch (PDOException $e) {
			header('Location: ' . $HTTP_REFERER . '?form_error=true');
			exit();
		}
	}
}
