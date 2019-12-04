import React, {Component } from 'react';
import BaseBlock from "../../BaseBlock";

import { Icon } from './QuoteIcon';
import { Quote } from "./Quote";
import Transform from "./Transform";

export class QuoteBlock extends BaseBlock {

	constructor() {
		super();

		// Setup references to external functions
		const {__} = wp.i18n;
		const { registerBlockType } = wp.blocks;
		const blockNameKebabCase = this.blockNameKebabCase;


		// Register the block
		registerBlockType('planet4-gpnl-blocks/' + this.blockNameLowerCase, {
			title: this.blockName,
			icon: Icon,
			category: 'planet4-gpnl-blocks',
			keywords: [
				__(this.blockName),
        __('citation'),
        __('cite'),
			],
			transforms: Transform,
			attributes: {
				quote: {
					type: 'string',
				},
				quotee: {
					type: 'string',
				},
				image_id: {
					type: 'number'
				},
				image_url: {
					type: 'string',
				},
			},

			edit({
					 attributes, 		// - The block's attributes
					 setAttributes,    	// - Method to set the attributes
					 isSelected        	// - Handy flag to toggle the edit view
				 }

				 ) {
				function onQuoteChange(value) {
					setAttributes({quote: value});
				}
				function onQuoteeChange(value) {
					setAttributes({quotee: value});
				}
				function onSelectImage(media) {
					setAttributes({
						image_url: media.url,
						image_id: media.id
					});
				}

				return <Quote
					{...attributes}
					isSelected={isSelected}
					blockNameKebabCase={blockNameKebabCase}
					onQuoteChange={onQuoteChange}
					onQuoteeChange={onQuoteeChange}
					onSelectImage={onSelectImage}


				/>;
			},

			save: () => null,
		});
	};
}
