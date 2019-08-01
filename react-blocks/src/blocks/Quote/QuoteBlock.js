import BaseBlock from "../BaseBlock.js";

import { Icon } from './QuoteIcon.js';
import { QuoteTest } from "./QuoteTest";

export class QuoteBlock extends BaseBlock {

	constructor() {
		super();

		// Setup references to external functions
		const {__} = wp.i18n;
		const { registerBlockType } = wp.blocks;


		// Register the block
		registerBlockType('planet4-blocks/' + this.blockNameLowerCase, {
			title: this.blockName,
			icon: Icon,
			category: 'planet4-gpnl-blocks',
			keywords: [
				__(this.blockName),
				__('Another keyword'),
			],
			attributes: {
				title: {
					type: 'string',
				},
			},

			edit({
					 attributes, 		// - The block's attributes
					 setAttributes,    	// - Method to set the attributes
					 isSelected        	// - Handy flag to toggle the edit view
				 }) {
				function onTitleChange(value) {
					setAttributes({title: value});
				}

				return <QuoteTest
					{...attributes}
					isSelected={isSelected}
					title={attributes.title}
					onTitleChange={onTitleChange}/>;
			},

			save: () => null,
		});
	};
}
