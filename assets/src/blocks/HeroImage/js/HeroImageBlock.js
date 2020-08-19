import React, {Component, Fragment} from 'react';
import BaseBlock from "../../BaseBlock";
import {ServerSideRender} from "@wordpress/components";
import {Icon} from './HeroImageIcon';
import HeroImage from "./HeroImage";
import Transform from "./Transform";

const {withSelect} = wp.data;


export class HeroImageBlock extends BaseBlock {

  constructor() {
    super();

    // Setup references to external functions
    const {__} = wp.i18n;
    const {registerBlockType} = wp.blocks;

    // Register the block
    registerBlockType('planet4-gpnl-blocks/' + this.blockNameKebabCase, {
      title: 'Hero afbeelding',
      icon: Icon,
      category: 'planet4-gpnl-blocks',
      keywords: [
        __(this.blockName),
        __('hero'),
        __('banner'),
        __('header'),
        __('image'),
        __('afbeelding'),
        __('held'),
      ],
      transforms: Transform,
      attributes: {
        title: {
          type: 'string',
        },
        description: {
          type: 'string',
        },
        image: {
          type: 'number'
        },
        link_text: {
          type: 'string'
        },
        link_url: {
          type: 'string',
        },
        small: {
          type: 'boolean',
          default: false
        },
        focus_image: {
          type: 'string',
          default: '50% 50%'
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
      })(({
            attributes, setAttributes, isSelected, image_url
          }) => {

        // Functions we want to call while editing to change attributes.
        function onValueChange(value) {
          setAttributes({[this]: value});
        }

        function onSelectImage(media) {
          setAttributes({
            image: media.id
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
            <HeroImage
              {...attributes}
              image_url={image_url}
              onValueChange={onValueChange}
              onSelectImage={onSelectImage}
              onFocalPointChange={onFocalPointChange}
            />
          );
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
