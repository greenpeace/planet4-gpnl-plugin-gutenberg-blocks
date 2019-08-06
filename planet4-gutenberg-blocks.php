<?php
/**
 * Plugin Name: Planet4 - GPNL Gutenberg Blocks
 * Description: Contains the Gutenberg blocks that are used by Planet4 project.
 * Plugin URI: http://github.com/greenpeace/planet4-plugin-gutenberg-blocks
 * Version: 0.1
 * Php Version: 7.0
 *
 * Author: Greenpeace Netherlands
 * Author URI: http://www.greenpeace.org/
 * Text Domain: planet4-gpnl-blocks
 *
 * License:     GPLv3
 * Copyright (C) 2019 Greenpeace Netherlands
 *
 * @package P4NL_GB_BKS
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || die( 'Direct access is forbidden !' );


/*
========================
	C O N S T A N T S
========================
*/
if ( ! defined( 'P4NL_GB_BKS_REQUIRED_PHP' ) ) {
	define( 'P4NL_GB_BKS_REQUIRED_PHP', '7.0' );
}
if ( ! defined( 'P4NL_GB_BKS_REQUIRED_PLUGINS' ) ) {
	define(
		'P4NL_GB_BKS_REQUIRED_PLUGINS',
		[
			'timber' => [
				'min_version' => '1.9.0',
				'rel_path'    => 'timber-library/timber.php',
			],
		]
	);
}
if ( ! defined( 'P4NL_GB_BKS_PLUGIN_BASENAME' ) ) {
	define( 'P4NL_GB_BKS_PLUGIN_BASENAME', plugin_basename( __FILE__ ) );
}
if ( ! defined( 'P4NL_GB_BKS_PLUGIN_DIRNAME' ) ) {
	define( 'P4NL_GB_BKS_PLUGIN_DIRNAME', dirname( P4NL_GB_BKS_PLUGIN_BASENAME ) );
}
if ( ! defined( 'P4NL_GB_BKS_PLUGIN_DIR' ) ) {
	define( 'P4NL_GB_BKS_PLUGIN_DIR', WP_PLUGIN_DIR . '/' . P4NL_GB_BKS_PLUGIN_DIRNAME );
}
if ( ! defined( 'P4NL_GB_BKS_PLUGIN_URL' ) ) {
	define( 'P4NL_GB_BKS_PLUGIN_URL', plugin_dir_url( __FILE__ ) );
}
if ( ! defined( 'P4NL_GB_BKS_PLUGIN_NAME' ) ) {
	define( 'P4NL_GB_BKS_PLUGIN_NAME', 'Planet4 - Gutenberg Blocks' );
}
if ( ! defined( 'P4NL_GB_BKS_PLUGIN_SHORT_NAME' ) ) {
	define( 'P4NL_GB_BKS_PLUGIN_SHORT_NAME', 'Blocks' );
}
if ( ! defined( 'P4NL_GB_BKS_PLUGIN_SLUG_NAME' ) ) {
	define( 'P4NL_GB_BKS_PLUGIN_SLUG_NAME', 'blocks' );
}
if ( ! defined( 'P4NL_GB_BKS_INCLUDES_DIR' ) ) {
	define( 'P4NL_GB_BKS_INCLUDES_DIR', P4NL_GB_BKS_PLUGIN_DIR . '/templates/' );
}
if ( ! defined( 'P4NL_GB_BKS_TEMPLATE_OVERRIDE_SUBDIR' ) ) {
	define( 'P4NL_GB_BKS_TEMPLATE_OVERRIDE_SUBDIR', '/templates/plugins/planet4-plugin-gutenberg-blocks/includes/' );
}
if ( ! defined( 'P4NL_GB_BKS_ADMIN_DIR' ) ) {
	define( 'P4NL_GB_BKS_ADMIN_DIR', plugins_url( P4NL_GB_BKS_PLUGIN_DIRNAME . '/admin/' ) );
}
if ( ! defined( 'P4NL_GB_BKS_LANGUAGES' ) ) {
	define(
		'P4NL_GB_BKS_LANGUAGES',
		[
			'en_US' => 'English',
			'el_GR' => 'Ελληνικά',
		]
	);
}

if ( ! defined( 'P4NL_GB_BKS_ALLOWED_PAGETYPE' ) ) {
	define( 'P4NL_GB_BKS_ALLOWED_PAGETYPE', [ 'page', 'campaign' ] );
}
if ( ! defined( 'WP_UNINSTALL_PLUGIN' ) ) {
	define( 'WP_UNINSTALL_PLUGIN', P4NL_GB_BKS_PLUGIN_BASENAME );
}

require_once __DIR__ . '/classes/class-loader.php';
require_once ABSPATH . 'wp-admin/includes/plugin.php';


/*
==========================
	L O A D  P L U G I N
==========================
*/
P4NL_GB_BKS\Loader::get_instance(
	[
		// --- Add here your own Block Controller ---
		// DEPRECATED: Blocks could be registered inside Loader class
	// 'P4NL_GB_BKS\Controllers\Blocks\NewCovers_Controller',
	],
	'P4NL_GB_BKS\Views\View'
);
