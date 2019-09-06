import React from 'react';
import BaseBlock from "../../BaseBlock";
import { ServerSideRender } from "@wordpress/components";
import HeroImage from "./HeroImage";

export class HeroImageBlock extends BaseBlock {

  constructor() {
    super();

    // Setup references to external functions
    const { __ } = wp.i18n;
    const { registerBlockType } = wp.blocks;

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
        focus_image: {
          type: 'string',
        },
      },

      edit: ({ attributes, setAttributes, isSelected }) => {

        // Functions we want to call while editing to change attributes.
        function onValueChange(value) {
          setAttributes({[this]: value});
        }
        function onSelectImage(media) {
          setAttributes({
            image_url: media.url,
            image_id: media.id
          });
        }

        function onFocalPointChange( {x,y} ) {
          x = parseFloat(x).toFixed(2);
          y = parseFloat(y).toFixed(2);
          setAttributes({focus_image: (x*100)+'% '+(y*100)+'%'});
        }

        // if the block is selected, the block-editor is rendered, otherwise the block is rendered server-side.
        if (isSelected){
          return (
            <HeroImage
              {...attributes}
              onValueChange={onValueChange}
              onSelectImage={onSelectImage}
              onFocalPointChange={onFocalPointChange}
            />
          )
        } else {
          return (
            <ServerSideRender
              block={'planet4-gpnl-blocks/' + this.blockNameKebabCase}
              attributes={attributes}
            />
          )
        }
      },

      // This is not used, because rendering is done server-side. The method has to be defined though for wordpress.
      save: () => null,

    });
  };
}
