import BaseBlock from "../BaseBlock";

// import { Icon } from './QuoteIcon';
import { LiveblogItem } from "./LiveblogItem";

export class LiveblogItemBlock extends BaseBlock {

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
				__('hero'),
				__('header'),
				__('image'),
			],
			attributes: {
				title: {
					type: 'string',
				},
				datetime: {
					type: 'string',
				}
			},

			edit({
					 attributes, 		// - The block's attributes
					 setAttributes,    	// - Method to set the attributes
					 isSelected        	// - Handy flag to toggle the edit view
				 }

				 )
			{
				function onTitleChange(value) {
					setAttributes({title: value});
				}
				function onDatetimeChange(value) {
					setAttributes({datetime: value});
				}
				const onUpdateDatetime = ( datetime ) => {
					let newDateTime = moment(datetime).format( 'YYYY-MM-DD HH:mm' );
					// let newDateTime = datetime;
					// let newDateTime = datetime.map(datetime => new Date(datetime).getTime());
					// let newDateTime = datetime.map(Date.parse);
					setAttributes( { datetime: newDateTime } );
				};



				return <LiveblogItem
					{...attributes}
					isSelected={isSelected}
					onTitleChange={onTitleChange}
					onUpdateDatetime={onUpdateDatetime}
				/>;
			},

			save: () => null,
		});
	};
}
