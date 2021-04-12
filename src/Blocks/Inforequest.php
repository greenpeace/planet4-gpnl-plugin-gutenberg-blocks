<?php


/**
 * Petition block class
 *
 * @package GPNL\Plugin
 * @since 0.1
 */

namespace GPNL\Plugin\Blocks;


use GPNL\Plugin\Services\Asset_Enqueuer;

/**
 * @package GPNL\Plugin\Blocks
 * @since 0.1
 */
class Inforequest extends Base_Block {

	public function __construct() {

		// - Register the block for the editor in the PHP side.
		register_block_type(
			'planet4-gpnl-blocks/' . $this->getKebabCaseClassName(),
			[
				'editor_script'   => 'planet4-gpnl-blocks',
				'render_callback' => [ $this, 'render' ],
				'attributes'      => [
					'hider'        => [
						'type'    => 'text',
						'default' => '0'
					]
				]
			]
		);
		add_action( 'wp_enqueue_scripts', [ $this, 'enqueue_if_block_is_present' ] );
	}

	/**
	 * This will run before determining which template to load.
	 */
	public function enqueue_if_block_is_present(): void
	{

		// Check if the block is present on the page that is requested.
		if ( has_block( 'planet4-gpnl-blocks/' . $this->getKebabCaseClassName() ) ) {
			Asset_Enqueuer::enqueue_asset( 'inforequest', 'style' );
			Asset_Enqueuer::enqueue_asset( 'inforequestHelper', 'script', [], true );
		}
	}


	/**
	 * Callback for the shortcake_twocolumn shortcode.
	 * It renders the shortcode based on supplied attributes.
	 *
	 * @param array $fields Array of fields that are to be used in the template.
	 * @return array The complete html of the block
	 */
	public function prepare_data(array $fields): array {

		global $post;

		$parent = wp_get_canonical_url( $post->post_parent );


		$data = [
			'fields' => $fields,
			'parent' => $parent,
		];

		// Pass options to frontend code.
		wp_localize_script(
			'inforequestHelper',
			'request_form_object',
			[
				'hider'          => $fields['hider'],
			]
		);

		return $data;
	}
}
