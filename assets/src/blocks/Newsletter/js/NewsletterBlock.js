import React from 'react';
import BaseBlock from "../../BaseBlock";
import {ServerSideRender} from "@wordpress/components";
import Newsletter from "./Newsletter";
const {withSelect} = wp.data;


export class NewsletterBlock extends BaseBlock {

  constructor() {
    super();

    // Setup references to external functions
    const {__} = wp.i18n;
    const {registerBlockType} = wp.blocks;

    // Register the block
    registerBlockType('planet4-gpnl-blocks/' + this.blockNameKebabCase, {
      title: this.blockName,
      icon: 'format-image',
      category: 'planet4-gpnl-blocks',
      keywords: [
        __(this.blockName),
        __('subscription'),
        __('nieuwsbrief'),
      ],
      attributes: {
        title: {
          type: 'string',
        },
        subtitle: {
          type: 'string',
        },
        background: {
          type: 'number'
        },
        opacity: {
          type: 'number',
          default: 30,
        },
        focus_image: {
          type: 'string',
        },
        marketingcode: {
          type: 'string',
        },
        literaturecode: {
          type: 'string',
        },
        screenid: {
          type: 'string',
        },
        form_id: {
          type: 'number',
          default: 1,
        },

      },

      edit: withSelect((select, props) => {
        const {attributes} = props;
        const {background} = attributes;

        let image_url = '';

        if (background && (0 < background)) {
          const image_object = wp.data.select('core').getMedia(background);
          if (image_object) {
            image_url = image_object.source_url;
          }
        }

        return {
          image_url
        };
      })(({
            attributes, setAttributes, isSelected, image_url
          }) => {

        // Functions we want to call while editing to change attributes.
        function onValueChange(value) {
          setAttributes({[this]: value});
        }

        function onNumberChange(value) {
          setAttributes({[this]: Number(value)});
        }

        function onSelectImage(media) {
          setAttributes({
            background: media.id
          });
        }

        function onFocalPointChange({x, y}) {
          x = parseFloat(x).toFixed(2);
          y = parseFloat(y).toFixed(2);
          setAttributes({focus_image: (x * 100) + '% ' + (y * 100) + '%'});
        }

        // if the block is selected, the block-editor is rendered, otherwise the block is rendered server-side.
        if (isSelected) {
          return (
            <Newsletter
              {...attributes}
              image_url={image_url}
              onValueChange={onValueChange}
              onNumberChange={onNumberChange}
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
      })
      ,

      // This is not used, because rendering is done server-side. The method has to be defined though for wordpress.
      save: () => null,

    });
  };
}
