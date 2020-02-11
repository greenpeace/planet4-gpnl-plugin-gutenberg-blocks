<?php
/**
 * Loader class
 *
 * @package P4NL_GB_BKS
 * @since 0.1.0
 */

namespace P4NL_GB_BKS;

use WP_CLI;

/**
 * Class Loader
 *
 * Loads required files.
 * Starts services.
 * Loads commands.
 * Checks requirements and if all are met.
 * Hooks plugin and loads assets.
 */
final class Loader {

	/**
	 * A static instance of Loader.
	 *
	 * @var Loader $instance
	 */
	private static $instance;
	/**
	 * Indexed array of all the classes/services that are needed.
	 *
	 * @var array $services
	 */
	private $services;
	/**
	 * An instance of the View class.
	 *
	 * @var Views\View $view
	 */
	private $view;
	/**
	 * Required version of php.
	 *
	 * @var string $required_php
	 */
	private $required_php = P4NL_GB_BKS_REQUIRED_PHP;
	/**
	 * Array with all required plugins and their required versions.
	 *
	 * @var array $required_plugins
	 */
	private $required_plugins = P4NL_GB_BKS_REQUIRED_PLUGINS;

	/**
	 * Block instances
	 *
	 * @var $blocks
	 */
	private $blocks;

	/**
	 * Singleton creational pattern.
	 * Makes sure there is only one instance at all times.
	 *
	 * @param array $services The Controller services to inject.
	 * @param string $view_class The View class name.
	 *
	 * @return Loader
	 */
	public static function get_instance( $services, $view_class ): Loader {
		if ( ! isset( self::$instance ) ) {
			self::$instance = new self( $services, $view_class );
		}

		return self::$instance;
	}

	/**
	 * Creates the plugin's loader object.
	 * Checks requirements and if its ok it hooks the hook_plugin method on the 'init' action which fires
	 * after WordPress has finished loading but before any headers are sent.
	 * Most of WP is loaded at this stage (but not all) and the user is authenticated.
	 *
	 * @param array $services The Controller services to inject.
	 * @param string $view_class The View class name.
	 */
	private function __construct( $services, $view_class ) {

		$this->load_files();
		$this->check_requirements();

		$this->services = [
			new Services\Twig_helper()
		];

		// Load Blocks.
		$this->blocks = [
			new Blocks\Quote(),
			new Blocks\HeroImage(),
			new Blocks\Newsletter(),
			new Blocks\Petition(),
			new Blocks\Donation(),
			new Blocks\TwoColumnEmbed(),
			new Blocks\Inforequest(),
			new Blocks\Noindex(),
			new Blocks\Educationcovers(),
			new Blocks\Collapsible(),
			new Blocks\PdfEmbed(),
			new Blocks\PeriodicDonation(),
			new Blocks\Testimonial(),
		];
	}

	/**
	 * Load required files. The plugins namespaces should:
	 * a. include P4NL_GB_BKS string
	 * b. follow the names of the sub-directories of the current __DIR__ (classes/)
	 *    - if not, then proper replacements should be added like below
	 */
	private function load_files() {
		try {
			spl_autoload_register(
				function ( $class_name ) {
					if ( false !== strpos( $class_name, 'P4NL_GB_BKS' ) ) {
						$class_name_parts = explode( '\\', $class_name );
						$real_class_name  = array_pop( $class_name_parts );
						$file_name        = 'class-' . str_ireplace( '_', '-', strtolower( $real_class_name ) );

						$namespace = implode( '\\', $class_name_parts );
						$path      = str_ireplace(
							[ 'P4NL_GB_BKS', 'Blocks', 'Controllers', 'Views', 'Services', '_', '\\' ],
							[ '', 'blocks', 'controller', 'view', 'services', '-', '/' ],
							strtolower( $namespace )
						);
						require_once __DIR__ . '/' . $path . '/' . $file_name . '.php';
					}
				}
			);
		} catch ( \Exception $e ) {
			echo esc_html( $e->getMessage() );
		}
	}

	/**
	 * Loads all shortcake blocks registered from within this plugin.
	 *
	 * @param array $services The Controller services to inject.
	 * @param string $view_class The View class name.
	 */
	public function load_services( $services, $view_class ) {
		$this->services = $services;
		$this->view     = new $view_class();

		if ( $this->services ) {
			foreach ( $this->services as $service ) {
				( new $service( $this->view ) )->load();
			}
		}
	}

	/**
	 * Registers commands for Blocks plugin.
	 */
	public function load_commands() {
		if ( defined( 'WP_CLI' ) && WP_CLI ) {
			try {
				WP_CLI::add_command(
					'p4-blocks',
					'P4NL_GB_BKS\Command\Controller'
				);
			} catch ( \Exception $e ) {
				WP_CLI::log( 'Exception: ' . $e->getMessage() );
			}
		}
	}

	/**
	 * Hooks the plugin.
	 */
	private function hook_plugin() {
		// Load the editor scripts
		add_action( 'enqueue_block_assets', [ $this, 'enqueue_editor_scripts' ] );

		// Register a block category.
		add_filter( 'block_categories', [ $this, 'register_block_category' ], 10, 2 );
		// Provide hook for other plugins.
		do_action( 'P4NL_GB_BKS_plugin_loaded' );
	}

	/**
	 * Checks plugin requirements.
	 * If requirements are met then hook the plugin.
	 */
	private function check_requirements() {

		if ( is_admin() ) {         // If we are on the admin panel.
			// Run the version check. If it is successful, continue with hooking under 'init' the initialization of this plugin.
			if ( $this->check_required_php() ) {
				$plugins = [
					'not_found'   => [],
					'not_updated' => [],
				];
				if ( $this->check_required_plugins( $plugins ) ) {
					$this->hook_plugin();
				} elseif ( $plugins['not_found'] || $plugins['not_updated'] ) {

					deactivate_plugins( P4NL_GB_BKS_PLUGIN_BASENAME );
					$count   = 0;
					$message = '<div class="error fade">' .
					           '<u>' . esc_html( P4NL_GB_BKS_PLUGIN_NAME ) . ' > ' . esc_html__( 'Requirements Error(s)', 'planet4-gpnl-blocks-backend' ) . '</u><br /><br />';

					foreach ( $plugins['not_found'] as $plugin ) {
						$message .= '<br/><strong>' . ( ++ $count ) . '. ' . esc_html( $plugin['Name'] ) . '</strong> ' . esc_html__( 'plugin needs to be installed and activated.', 'planet4-gpnl-blocks-backend' ) . '<br />';
					}
					foreach ( $plugins['not_updated'] as $plugin ) {
						$message .= '<br/><strong>' . ( ++ $count ) . '. ' . esc_html( $plugin['Name'] ) . '</strong><br />' .
						            esc_html__( 'Minimum version ', 'planet4-gpnl-blocks-backend' ) . '<strong>' . esc_html( $plugin['min_version'] ) . '</strong>' .
						            '<br/>' . esc_html__( 'Current version ', 'planet4-gpnl-blocks-backend' ) . '<strong>' . esc_html( $plugin['Version'] ) . '</strong><br />';
					}

					$message .= '</div><br />';
					wp_die(
						$message, // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
						'Plugin Requirements Error',
						[
							'response'  => \WP_Http::OK,
							// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
							'back_link' => true,
						]
					);
				}
			} else {
				deactivate_plugins( P4NL_GB_BKS_PLUGIN_BASENAME );
				wp_die( // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
					'<div class="error fade">' .
					'<strong>' . esc_html__( 'PHP Requirements Error', 'planet4-gpnl-blocks-backend' ) . '</strong><br /><br />' . esc_html( P4NL_GB_BKS_PLUGIN_NAME . __( ' requires a newer version of PHP.', 'planet4-gpnl-blocks-backend' ) ) . '<br />' .
					'<br/>' . esc_html__( 'Minimum required version of PHP: ', 'planet4-gpnl-blocks-backend' ) . '<strong>' . esc_html( $this->required_php ) . '</strong>' .
					'<br/>' . esc_html__( 'Running version of PHP: ', 'planet4-gpnl-blocks-backend' ) . '<strong>' . esc_html( phpversion() ) . '</strong>' .
					'</div>',
					'Plugin Requirements Error',
					[
						'response'  => \WP_Http::OK, // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
						'back_link' => true,
					]
				);
			}
		}
	}

	/**
	 * Check if the server's php version is less than the required php version.
	 *
	 * @return bool true if version check passed or false otherwise.
	 */
	private function check_required_php(): bool {
		return version_compare( phpversion(), $this->required_php, '>=' );
	}

	/**
	 * Check if the version of a plugin is less than the required version.
	 *
	 * @param array $plugins Will contain information for those plugins whose requirements are not met.
	 *
	 * @return bool true if version check passed or false otherwise.
	 */
	private function check_required_plugins( &$plugins ): bool {
		$required_plugins = $this->required_plugins;

		if ( is_array( $required_plugins ) && $required_plugins ) {
			foreach ( $required_plugins as $required_plugin ) {
				$plugin_data = get_plugin_data( WP_PLUGIN_DIR . '/' . $required_plugin['rel_path'] );

				if ( ! is_plugin_active( $required_plugin['rel_path'] ) ) {
					array_push( $plugins['not_found'], array_merge( $plugin_data, $required_plugin ) );
				} elseif ( ! version_compare( $plugin_data['Version'], $required_plugin['min_version'], '>=' ) ) {
					array_push( $plugins['not_updated'], array_merge( $plugin_data, $required_plugin ) );
				}
			}
			foreach ( $plugins as $plugin ) {
				if ( is_array( $plugin ) && count( $plugin ) > 0 ) {
					return false;
				}
			}
		}

		return true;
	}

	/**
	 * Load assets only on the admin pages of the plugin.
	 *
	 * @param string $hook The slug name of the current admin page.
	 */
	public function enqueue_editor_scripts() {

		wp_enqueue_style( 'wp-components' );
		wp_enqueue_style( 'bootstrap', 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.1/css/bootstrap.min.css', array(), '4.1.1' );

		// Enqueueing asset files for the editor.
		$enque = new Services\Asset_Enqueuer();
		$enque->enqueue_asset( 'editor-style', 'style' );
		$enque->enqueue_asset( 'editorIndex', 'script', [], true );

		$plugin_version        = wp_get_theme()->get( 'Version' );
		$parent_plugin_version = filectime( get_template_directory() . '/style.css' );

		wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css', [], $parent_plugin_version );
		wp_enqueue_style( 'child-style', get_stylesheet_directory_uri() . '/style.css', [], $plugin_version );

	}

	/**
	 * Registers a new category for our blocks
	 *
	 * @param array $categories Blocks categories.
	 *
	 * @return array
	 */
	public function register_block_category( $categories ) {
		return array_merge(
			$categories,
			[
				[
					'slug'  => 'planet4-gpnl-blocks',
					'title' => __( 'GPNL Blocks', 'planet4-gpnl-blocks' ),
				],
			]
		);
	}

	/**
	 * Make clone magic method private, so nobody can clone instance.
	 */
	private function __clone() {
	}

	/**
	 * Make wakeup magic method private, so nobody can unserialize instance.
	 */
	private function __wakeup() {
	}
}
