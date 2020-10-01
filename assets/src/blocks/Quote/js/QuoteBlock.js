import React from 'react';
import BaseBlock from '../../BaseBlock';
import PropTypes from 'prop-types';
import {Icon} from './QuoteIcon';
import {Quote} from './Quote';

export class QuoteBlock extends BaseBlock {
  static get propTypes() {
    return {
      attributes: PropTypes.array,
      setAttributes: PropTypes.func,
      isSelected: PropTypes.bool,
    };
  }

  constructor() {
    super();

    // Setup references to external functions
    const {__} = wp.i18n;
    const {registerBlockType} = wp.blocks;
    const blockNameKebabCase = this.blockNameKebabCase;


		// Register the block
		registerBlockType('planet4-gpnl-blocks/' + this.blockNameLowerCase, {
			title: this.blockName,
			icon: Icon,
			category: 'common',
			keywords: [
				__(this.blockName),
        __('citation'),
        __('cite'),
      ],
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
  }
}
