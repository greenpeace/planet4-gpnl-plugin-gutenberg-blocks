import BaseBlock from "../BaseBlock";

// import { Icon } from './QuoteIcon';
import { Liveblog } from "./Liveblog";

export class LiveblogBlock extends BaseBlock {

	constructor() {
		super();

		// Setup references to external functions
		const {__} = wp.i18n;
		const { registerBlockType } = wp.blocks;


		// Register the block
		registerBlockType('planet4-gpnl-blocks/' + this.blockNameLowerCase, {
			title: this.blockName,
			// icon: Icon,
			category: 'planet4-gpnl-blocks',
			keywords: [
				__(this.blockName),
			],
			attributes: {
				maxNumberOfItems: {
					type: 'number',
				},
			},

			edit({
					 attributes, 		// - The block's attributes
					 setAttributes,    	// - Method to set the attributes
					 isSelected        	// - Handy flag to toggle the edit view
				 }

				 )
			{
				function onNumberChange(value) {
					setAttributes({maxNumberOfItems: value});
				}

				return <Liveblog
					{...attributes}
					isSelected={isSelected}
					onNumberChange={onNumberChange}
				/>;
			},

			save: () => null,
		});
	};
}
