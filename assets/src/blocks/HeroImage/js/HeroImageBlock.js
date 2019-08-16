import BaseBlock from "../../BaseBlock";
import { HeroImage } from "./HeroImage";
import {Quote} from "../../Quote/js/Quote";
// import registerBlockType from '@wordpress/blocks'

export class HeroImageBlock extends BaseBlock {

	constructor() {
		super();

		// Setup references to external functions
		const {__} = wp.i18n;
		const { registerBlockType } = wp.blocks;
		const blockNameKebabCase = this.blockNameKebabCase;

		// Register the block
		registerBlockType('planet4-gpnl-blocks/' + this.blockNameKebabCase, {
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
				image_id: {
					type: 'number'
				},
				image_url: {
					type: 'string',
				},
				link_text: {
					type: 'string'
				},
				link_url: {
					type: 'string',
				},
				is_small: {
					type: 'boolean',
				},
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
				function onDescriptionChange(value) {
					setAttributes({description: value});
				}
				function onSelectImage(media) {
					setAttributes({
						image_url: media.url,
						image_id: media.id
					});
				}
				function onLinkTextChange(value) {
					setAttributes({link_text: value});
				}
				function onLinkUrlChange(value) {
					setAttributes({link_url: value});
				}

				function onIsSmall( value ) {
					setAttributes( { is_small: value } );
				}

				return <HeroImage
					{...attributes}
					blockNameKebabCase={blockNameKebabCase}
					isSelected={isSelected}
					onTitleChange={onTitleChange}
					onDescriptionChange={onDescriptionChange}
					onSelectImage={onSelectImage}
					onLinkTextChange={onLinkTextChange}
					onLinkUrlChange={onLinkUrlChange}
					onIsSmall={onIsSmall}
				/>;
			},

			save: () => null,
		});
	};
}
