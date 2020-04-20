import React from 'react';
import BaseBlock from "../../BaseBlock";

import { Testimonial } from "./Testimonial";

export class TestimonialBlock extends BaseBlock {

	constructor() {
		super();

		// Setup references to external functions
		const {__} = wp.i18n;
		const { registerBlockType } = wp.blocks;
		const blockNameKebabCase = this.blockNameKebabCase;


		// Register the block
		registerBlockType('planet4-gpnl-blocks/' + this.blockNameLowerCase, {
			title: this.blockName,
			category: 'planet4-gpnl-blocks',
			keywords: [
				__(this.blockName),
        __('aanbeveling'),
        __('citaat'),
			],
			attributes: {
        title: {
          type: 'string',
        },
				name: {
					type: 'string',
				},
        content: {
          type: 'string',
        },
				image_id: {
					type: 'integer'
				},
				image_url: {
					type: 'string',
				},
        image_right: {
				  type: 'boolean', // Reverse the order (set image on right hand side on large displays)
          default: false
        }
			},

      edit({
          attributes, 		    // - The block's attributes
          setAttributes,    	// - Method to set the attributes
          isSelected        	// - Handy flag to toggle the edit view
        })
      {

        function handleValueChange(value) {
          setAttributes({[this]: value});
        }

        function onSelectImage(media) {
          setAttributes({
            image_url: media.url,
            image_id: media.id
          });
        }

        return <Testimonial
          {...attributes}
          isSelected={isSelected}
          blockNameKebabCase={blockNameKebabCase}
          handleValueChange={handleValueChange}
          onSelectImage={onSelectImage}
        />;
      },

			save: () => null,
		});
	};
}
