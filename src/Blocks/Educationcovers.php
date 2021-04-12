<?php


/**
 * Educationcovers block class
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
class Educationcovers extends Base_Block {

	public function __construct() {

		// - Register the block for the editor in the PHP side.
		register_block_type(
			'planet4-gpnl-blocks/' . $this->getKebabCaseClassName(),
			[
				'editor_script'   => 'planet4-gpnl-blocks',
				'render_callback' => [ $this, 'render' ],
				'attributes'      => []
			]

		);
		add_action( 'wp_enqueue_scripts', [ $this, 'enqueue_if_block_is_present' ] );
	}

	/**
	 * This will run before determining which template to load.
	 */
	public function enqueue_if_block_is_present() {

		// Check if the block is present on the page that is requested.
		if ( has_block( 'planet4-gpnl-blocks/' . $this->getKebabCaseClassName() ) ) {
			Asset_Enqueuer::enqueue_asset( 'educationcovers', 'style' );
			Asset_Enqueuer::enqueue_asset( 'educationcoversHelper', 'script', [], true );
		}
	}


	/**
	 * Get all the data that will be needed to render the block correctly.
	 *
	 * @param array $fields This is the array of fields of this block.
	 *
	 * @return array The data to be passed in the View.
	 */
	public function prepare_data( ): array {


		$args     = array(
			'numberposts'   => - 1, // magic number for retrieving all.
			'category_name' => 'lesmateriaal',
			'post_type'     => 'page',
		);
		$tagcloud = [];
		$i        = 0;

		$pages = get_posts( $args );
		foreach ( $pages as $page ) {
			// Fetch the featured image and tags from each of the entries.
			$page_id            = $page->ID;
			$pages[ $i ]->image = get_the_post_thumbnail_url( $page_id, 'large' );
			$post_tags          = get_the_tags( $page_id );
			// Add the names of the tags to the associated page and the global tagcloud.
			$post_tag_names = [];
			if ( ! empty( $post_tags ) ) {
				foreach ( $post_tags as $post_tag ) {
					array_push( $post_tag_names, html_entity_decode( $post_tag->name ) );
				}
				$pages[ $i ]->tags = wp_json_encode( $post_tag_names );
				$tagcloud          = array_merge( $tagcloud, $post_tag_names );
			}

			$pages[ $i ]->link = get_permalink( $page_id );
			$i ++;
		}

		// Filter out audiences, remove duplicates and sort the tags.
		$audiences = [ 'Primair onderwijs', 'Voortgezet onderwijs', 'MBO', 'Docenten' ];
		$tagcloud  = array_diff( array_unique( $tagcloud ), $audiences );
		sort( $tagcloud );

		$fields = [
			'pages'     => $pages,
			'tags'      => $tagcloud,
			'audiences' => $audiences,
		];

		$data = [
			'fields' => $fields,
		];

		return $data;

	}


}

