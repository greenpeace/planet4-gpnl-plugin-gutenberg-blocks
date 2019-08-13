import BaseBlock from "../BaseBlock";
import { Newsletter } from "./Newsletter";

export class NewsletterBlock extends BaseBlock {

	constructor() {
		super();

		// Setup references to external functions
		const {__} = wp.i18n;
		const { registerBlockType } = wp.blocks;
		const blockNameLowerCase = this.blockNameLowerCase;

		console.table(this);


		// Register the block
		registerBlockType('planet4-gpnl-blocks/' + this.blockNameLowerCase, {

			title: this.blockName,
			icon: 'format-image',
			category: 'planet4-gpnl-blocks',
			keywords: [
				__(this.blockName),
				__('news'),
				__('subscription'),
				__('email'),
			],
			attributes: {
				title: {
					type: 'string',
				},
				subtitle: {
					type: 'string',
				},
				backgroundimage_id: {
					type: 'number'
				},
				backgroundimage_url: {
					type: 'string',
				},
				backgroundimage_opacity: {
					type: 'number'
				},
				marketingcode: {
					type: 'string',
				},
				literaturecode: {
					type: 'boolean',
				},
				screenid: {
					type: 'text',
				},
				form_id: {
					type: 'number',
				}
			},

			edit({
					 attributes, 		// - The block's attributes
					 setAttributes,    	// - Method to set the attributes
					 isSelected        	// - Handy flag to toggle the edit view
				 })
			{
				function onTitleChange(value) {
					setAttributes({title: value});
				}
				function onSubtitleChange(value) {
					setAttributes({subtitle: value});
				}
				function onMarketingcodeChange(value) {
					setAttributes({marketingcode: value});
				}
				function onLiteraturecodeChange(value) {
					setAttributes({literaturecode: value});
				}
				function onSelectImage(media) {
					setAttributes({
						backgroundimage_id: media.id,
						backgroundimage_url: media.url
					});
				}

				return <Newsletter
					{...attributes}
					blockNameLowerCase={blockNameLowerCase}
					isSelected={isSelected}
					onTitleChange={onTitleChange}
					onSubtitleChange={onSubtitleChange}
					onMarketingcodeChange={onMarketingcodeChange}
					onLiteraturecodeChange={onLiteraturecodeChange}
					onSelectImage={onSelectImage}
				/>;
			},

			save: () => null,
		});
	};
}
