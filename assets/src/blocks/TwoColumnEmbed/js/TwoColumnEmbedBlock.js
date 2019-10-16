import React from 'react';
import BaseBlock from "../../BaseBlock";
import { ServerSideRender } from "@wordpress/components";
import { Preview } from '../../../components/Preview/js/Preview';
const { withSelect } = wp.data;
import TwoColumnEmbed from "./TwoColumnEmbed";
import { Icon } from "./TwoColumnEmbedIcon";


export class TwoColumnEmbedBlock extends BaseBlock {

  constructor() {
    super();

    // Setup references to external functions
    const { __ } = wp.i18n;
    const { registerBlockType } = wp.blocks;

    // Register the block
    registerBlockType('planet4-gpnl-blocks/' + this.blockNameKebabCase, {
      title: '2 kolommen met iframe of afbeelding',
      icon: Icon,
      category: 'planet4-gpnl-blocks',
      keywords: [
        __(this.blockName),
        __('embed'),
        __('iframe'),
      ],
      attributes: {
        title: {
          type: 'string',
        },
        description: {
          type: 'string',
        },
        column_title: {
          type: 'string',
        },
        column_description: {
          type: 'string',
        },
        column_cta_text: {
          type: 'string',
        },
        column_cta_link: {
          type: 'string',
        },
        embed_option: {
          type: 'string',
          default: 'iframe'
        },
        iframe_src: {
          type: 'string',
        },
        iframe_height: {
          type: 'number',
          default: 400
        },
        image: {
          type: 'number',
        },
        column_size: {
          type: 'number',
          default: '6'
        },
      },

      edit: withSelect((select, props) => {
        const {attributes} = props;
        const {image} = attributes;

        let image_url = '';

        if (image && (0 < image)) {
          const image_object = wp.data.select('core').getMedia(image);
          if (image_object) {
            image_url = image_object.source_url;
          }
        }

        return {
          image_url
        };
      })(({ attributes, setAttributes, isSelected, image_url }) => {

        // Functions we want to call while editing to change attributes.
        function onValueChange(value) {
          setAttributes({[this]: value});
        }

        function onNumberChange(value) {
          setAttributes({[this]: Number(value)});
        }

        function onSelectImage(media) {
          setAttributes({
            image: media.id
          });
        }


        // if the block is selected, the block-editor is rendered, otherwise the block is rendered server-side.
        if (isSelected){
          return (
            <TwoColumnEmbed
              {...attributes}
              image_url={image_url}
              onValueChange={onValueChange}
              onNumberChange={onNumberChange}
              onSelectImage={onSelectImage}
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
      }),

      // This is not used, because rendering is done server-side. The method has to be defined though for wordpress.
      save: () => null,

    });
  };
}
