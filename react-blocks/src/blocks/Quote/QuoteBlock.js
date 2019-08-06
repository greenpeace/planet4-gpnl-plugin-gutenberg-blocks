import BaseBlock from "../BaseBlock";

import { Icon } from './QuoteIcon';
import { Quote } from "./Quote";

export class QuoteBlock extends BaseBlock {

	constructor() {
		super();

		// Setup references to external functions
		const {__} = wp.i18n;
		const { registerBlockType } = wp.blocks;


		// Register the block
		registerBlockType('planet4-gpnl-blocks/' + this.blockNameLowerCase, {
			title: this.blockName,
			icon: Icon,
			category: 'planet4-gpnl-blocks',
			keywords: [
				__(this.blockName),
				__('Another keyword'),
			],
			attributes: {
				quote: {
					type: 'string',
				},
				quotee: {
					type: 'string',
				},
				imageId: {
					type: 'number'
				},
				imageUrl: {
					type: 'string',
					source: 'attribute',
					selector: 'img',
					attribute: 'src',
					default: null, // no image by default!
				},
			},

			edit({
					 attributes, 		// - The block's attributes
					 setAttributes,    	// - Method to set the attributes
					 isSelected        	// - Handy flag to toggle the edit view
				 }) {
				function onQuoteChange(value) {
					setAttributes({quote: value});
				}
				function onQuoteeChange(value) {
					setAttributes({quotee: value});
				}
				function onSelectImage(media) {
					setAttributes({
						imageUrl: media.url,
						imageId: media.id
					})
				}

				return <Quote
					{...attributes}
					isSelected={isSelected}
					quote={attributes.quote}
					onQuoteChange={onQuoteChange}
					quotee={attributes.quotee}
					onQuoteeChange={onQuoteeChange}
					imageUrl={attributes.imageUrl}
					imageId={attributes.imageId}
					onSelectImage={onSelectImage}

				/>;
			},

			save: () => null,
		});
	};
}
