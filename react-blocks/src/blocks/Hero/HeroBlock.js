import BaseBlock from "../BaseBlock";
import { Hero } from "./Hero";

export class HeroBlock extends BaseBlock {

	constructor() {
		super();

		// Setup references to external functions
		const {__} = wp.i18n;
		const { registerBlockType } = wp.blocks;

		// Register the block
		registerBlockType('planet4-gpnl-blocks/' + this.blockNameLowerCase, {
			title: this.blockName,
			icon: 'format-image',
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
				description: {
					type: 'string',
				},
				imageId: {
					type: 'number'
				},
				imageUrl: {
					type: 'string',
				},
			},

			edit({
					 attributes, 		// - The block's attributes
					 setAttributes,    	// - Method to set the attributes
					 isSelected        	// - Handy flag to toggle the edit view
				 }

				 ) {
				function onTitleChange(value) {
					setAttributes({title: value});
				}
				function onDescriptionChange(value) {
					setAttributes({description: value});
				}
				function onSelectImage(media) {
					setAttributes({
						imageUrl: media.url,
						imageId: media.id
					});
				}

				return <Hero
					{...attributes}
					isSelected={isSelected}
					onTitleChange={onTitleChange}
					onDescriptionChange={onDescriptionChange}
					onSelectImage={onSelectImage}
				/>;
			},

			save: () => null,
		});
	};
}
