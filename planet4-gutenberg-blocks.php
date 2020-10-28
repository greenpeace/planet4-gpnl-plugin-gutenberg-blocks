<?php
/**
 * Plugin Name: Planet4 - GPNL Gutenberg Blocks
 * Description: Contains the Gutenberg blocks that are used by Planet4 project.
 * Plugin URI: https://github.com/greenpeace/planet4-gpnl-plugin-gutenberg-blocks
 * Version: 2.0.2
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
	define( 'P4NL_GB_BKS_PLUGIN_NAME', 'Planet4NL - Gutenberg Blocks' );
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
			'nl_NL' => 'Nederlands',
		]
	);
}

if ( ! defined( 'P4NL_GB_BKS_ALLOWED_PAGETYPE' ) ) {
	define( 'P4NL_GB_BKS_ALLOWED_PAGETYPE', [ 'page', 'campaign' ] );
}
if ( ! defined( 'WP_UNINSTALL_PLUGIN' ) ) {
	define( 'WP_UNINSTALL_PLUGIN', P4NL_GB_BKS_PLUGIN_BASENAME );
}
if ( ! defined( 'P4NL_GB_BKS_ASSETS_DIR' ) ) {
	define( 'P4NL_GB_BKS_ASSETS_DIR', P4NL_GB_BKS_PLUGIN_DIRNAME . 'assets/' );
}

if ( ! defined( 'P4NL_GB_BKS_ASSETS_BUILD_DIR' ) ) {
	define( 'P4NL_GB_BKS_ASSETS_BUILD_DIR', P4NL_GB_BKS_PLUGIN_URL . 'assets/build' );
}
if ( ! defined( 'P4NL_GB_BKS_PUBLIC_DIR' ) ) {
	define( 'P4NL_GB_BKS_PUBLIC_DIR', P4NL_GB_BKS_PLUGIN_URL . 'public' );
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



const BLOCK_WHITELIST = [
	'post'     => [
		'planet4-gpnl-blocks/newsletter',
		'planet4-gpnl-blocks/noindex',
		'planet4-gpnl-blocks/quote',
		'planet4-gpnl-blocks/collapsible',
		'planet4-gpnl-blocks/pdf-embed',
		'planet4-gpnl-blocks/social-message'
	],
	'page'     => [
		'planet4-gpnl-blocks/donation',
		'planet4-gpnl-blocks/educationcovers',
		'planet4-gpnl-blocks/hero-image',
		'planet4-gpnl-blocks/inforequest',
		'planet4-gpnl-blocks/newsletter',
		'planet4-gpnl-blocks/noindex',
		'planet4-gpnl-blocks/petition',
		'planet4-gpnl-blocks/quote',
		'planet4-gpnl-blocks/two-column-embed',
		'planet4-gpnl-blocks/collapsible',
		'planet4-gpnl-blocks/pdf-embed',
		'planet4-gpnl-blocks/facebook-comments',
		'planet4-gpnl-blocks/periodic-donation',
		'planet4-gpnl-blocks/brochure-request',
		'planet4-gpnl-blocks/testimonial',
		'planet4-gpnl-blocks/columns',
		'planet4-gpnl-blocks/column',
		'planet4-gpnl-blocks/social-message',
		'planet4-gpnl-blocks/modal'
	],
	'campaign' => [],
];
const BLOCK_BLACKLIST = [
	'post'     => [
		'core/separator',
		'core/spacer',
		'core/quote',
		'core-embed/mixcloud',
		'core-embed/dailymotion',
		'core-embed/flickr',
		'core-embed/reddit',
		'core-embed/scribd',
		'core-embed/videopress',
		'core/table',
		'core/shortcode',
		'planet4-blocks/socialshare',
		'planet4-blocks/spreadsheet',
		'planet4-blocks/happypoint',
		'planet4-blocks/enform',
	],
	'page'     => [
		'core/separator',
		'core/spacer',
		'core/quote',
		'core-embed/mixcloud',
		'core-embed/dailymotion',
		'core-embed/flickr',
		'core-embed/reddit',
		'core-embed/scribd',
		'core-embed/videopress',
		'core/table',
		'core/shortcode',
		'planet4-blocks/socialshare',
		'planet4-blocks/spreadsheet',
		'planet4-blocks/enform',
		'planet4-blocks/happypoint',
	],
	'campaign' => [],
];

function set_child_theme_allowed_block_types( $allowed_block_types, $post ) {
	if ( ! empty( BLOCK_WHITELIST[ $post->post_type ] ) ) {
		$allowed_block_types = array_merge( $allowed_block_types, BLOCK_WHITELIST[ $post->post_type ] );
	}
	if ( ! empty( BLOCK_BLACKLIST[ $post->post_type ] ) ) {
		$allowed_block_types = array_filter(
			$allowed_block_types,
			function ( $element ) use ( $post ) {
				return ! in_array( $element, BLOCK_BLACKLIST[ $post->post_type ] );
			}
		);
	}
	// array_values is required as array_filter removes indexes from the array.
	return array_values( $allowed_block_types );
}
add_filter( 'allowed_block_types', 'set_child_theme_allowed_block_types', 15, 2 );

#################################################################################################

function sidebar_plugin_register() {

	register_post_meta( 'page', 'e_activism', [
		'type'          => 'object',
		'single'        => true,
		'auth_callback'     => function() {
			return current_user_can( 'edit_posts' );
		},
		'show_in_rest'  => [
			'schema' => [
				'type'       => 'object',
				'properties' => [
					'actionsTracking' => [
						'type' => 'boolean',
					],
					'savedLinks' => [
						'type' => 'array',
					],
					'trackedLinks' => [
						'type' => 'array',
					],
				],
			],
		],
	]);
}
add_action( 'init', 'sidebar_plugin_register' );

#################################################################################################

function enqueue_eactivism_assets() {
	$post_id = get_the_ID();
//	$post_meta = get_post_meta($post_id, 'e_activism');
	$actionsTracking = get_post_meta($post_id, 'e_activism') ? get_post_meta($post_id, 'e_activism')[0]['actionsTracking'] : false;
	$trackedLinks    = get_post_meta($post_id, 'e_activism') ? get_post_meta($post_id, 'e_activism')[0]['savedLinks'] : false;
	if ( $actionsTracking ) {
		$filename = 'clickTracking';
		wp_enqueue_script( $filename, P4NL_GB_BKS_PLUGIN_URL . 'assets/build/' . $filename . '.min.js', ['jquery'], null, true );

		wp_localize_script(
			$filename,
			'e_activism',
			[
				'post_id' => $post_id,
				'links' => $trackedLinks,
			]
		);
		return;
	}
}
add_action( 'template_redirect', 'enqueue_eactivism_assets');
