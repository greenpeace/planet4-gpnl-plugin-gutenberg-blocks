<?php


/**
 * Educationcovers block class
 *
 * @package P4NL_GB_BKS
 * @since 0.1
 */

namespace P4NL_GB_BKS\Blocks;


/**
 * @package P4BKS\Controllers\Blocks
 * @since 0.1
 */
class Educationcovers extends Base_Block {

	public function __construct() {

		// - Register the block for the editor in the PHP side.
		register_block_type(
			'planet4-gpnl-blocks/' . $this->getKebabCaseClassName(),
			[
				'editor_script' => 'planet4-gpnl-blocks',
				'render_callback' => [$this, 'render'],
				'attributes' => [ ]
			]

		);
	}




	/**
	 * Get all the data that will be needed to render the block correctly.
	 *
	 * @param array $fields This is the array of fields of this block.
	 *
	 * @return array The data to be passed in the View.
	 */
	public function prepare_data( $fields ): array {

		wp_enqueue_style( 'educationcovers', P4NL_GB_BKS_PLUGIN_URL . '/assets/build/educationcovers.min.css', [], '2.11.0' );
		wp_enqueue_script( 'educationcovers', P4NL_GB_BKS_PLUGIN_URL . '/assets/build/educationcoversHelper.js', ['jquery'], '2.11.0', true );

		$args     = array(
			'numberposts'   => -1, // magic number for retrieving all
			'category_name' => 'lesmateriaal',
			'post_type'     => 'page',
		);
		$tagcloud = [];
		$i        = 0;

		$pages = get_posts( $args );
		foreach ( $pages as $page ) {
			// Fetch the featured image and tags from each of the entries
			$page_id            = $page->ID;
			$pages[ $i ]->image = get_the_post_thumbnail_url( $page_id, 'large' );
			$post_tags          = get_the_tags( $page_id );
			// Add the names of the tags to the associated page and the global tagcloud
			$post_tag_names = [];
			if ( ! empty( $post_tags ) ) {
				foreach ( $post_tags as $post_tag ) {
					array_push( $post_tag_names, html_entity_decode($post_tag->name) );
				}
				$pages[ $i ]->tags = wp_json_encode( $post_tag_names );
				$tagcloud          = array_merge( $tagcloud, $post_tag_names );
			}

			$pages[ $i ]->link = get_permalink( $page_id );
			$i++;
		}

		// Filter out audiences, remove duplicates and sort the tags
		$audiences = [ 'PO', 'VO', 'MBO', 'DO' ];
		$tagcloud  = array_diff( array_unique( $tagcloud ), $audiences );
		sort( $tagcloud );

		$fields =  [
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

