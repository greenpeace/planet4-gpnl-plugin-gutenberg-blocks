<?php


/**
 * Donation block class
 *
 * @package P4NL_GB_BKS
 * @since 0.1
 */

namespace P4NL_GB_BKS\Blocks;


/**
 * @package P4BKS\Controllers\Blocks
 * @since 0.1
 */
class Donation extends Base_Block {

	public function __construct() {
		// - Register the block for the editor
		// in the PHP side.
		register_block_type(
			'planet4-gpnl-blocks/' . $this->getKebabCaseClassName(),
			[
				'editor_script' => 'planet4-gpnl-blocks',
				'render_callback' => [$this, 'render'],
				'attributes' => [
					'title' => [
						'type' => 'string',
						'default' => '',
					],
					'description' => [
						'type' => 'text',
						'default' => '',
					],
					'suggested_frequency' => [
						'type' => 'select',
						'default' => '',
					],
					'allow_frequency_override' => [
						'type' => 'string',
						'default' => '',
					],
					'min_amount' => [
						'type' => 'number',
						'default' => 5,
					],
					'oneoff_amount1' => [
						'type' => 'number',
						'default' => 5,
					],
					'oneoff_amount2' => [
						'type' => 'number',
						'default' => 10,
					],
					'oneoff_amount3' => [
						'type' => 'number',
						'default' => 25,
					],
					'oneoff_suggested_amount' => [
						'type' => 'number',
						'default' => 10,
					],
					'recurring_amount1' => [
						'type' => 'number',
						'default' => 5,
					],
					'recurring_amount2' => [
						'type' => 'number',
						'default' => 10,
					],
					'recurring_amount3' => [
						'type' => 'number',
						'default' => 25,
					],
					'recurring_suggested_amount' => [
						'type' => 'number',
						'default' => 10,
					],
					'thanktitle' => [
						'type' => 'string',
						'default' => '',
					],
					'thankdescription' => [
						'type' => 'string',
						'default' => '',
					],
					'literatuurcode' => [
						'type' => 'string',
						'default' => '',
					],
					'marketingcode_recurring' => [
						'type' => 'string',
						'default' => '',
					],
					'marketingcode_oneoff' => [
						'type' => 'string',
						'default' => '',
					],
					'returnpage' => [
						'type' => 'string',
						'default' => 'https://www.greenpeace.org/nl/',
					],
					'errorpage' => [
						'type' => 'string',
						'default' => 'https://www.greenpeace.org/nl/',
					]
				]

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

		$data = [
			'fields' => $fields,
		];

		return $data;
	}

}

