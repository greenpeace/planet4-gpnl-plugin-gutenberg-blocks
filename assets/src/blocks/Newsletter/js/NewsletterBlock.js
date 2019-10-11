import React from 'react';
import BaseBlock from "../../BaseBlock";
import {ServerSideRender} from "@wordpress/components";
import Newsletter from "./Newsletter";
import { Icon } from './NewsletterIcon';
const {withSelect} = wp.data;


export class NewsletterBlock extends BaseBlock {

  constructor() {
    super();

    // Setup references to external functions
    const {__} = wp.i18n;
    const {registerBlockType} = wp.blocks;

    // Register the block
    registerBlockType('planet4-gpnl-blocks/' + this.blockNameKebabCase, {
      title: 'Nieuwsbrief',
      icon: Icon,
      category: 'planet4-gpnl-blocks',
      keywords: [
        __(this.blockName),
        __('subscription'),
        __('nieuwsbrief'),
      ],
      attributes: {
        title: {
          type: 'string',
          default: 'Mis geen van onze acties!'
        },
        subtitle: {
          type: 'string',
          default: 'Laat merken dat de aarde ook van jou is. Meld je aan en je ontvangt iedere maand een actiemail.'
        },
        background: {
          type: 'number'
        },
        opacity: {
          type: 'number',
          default: 100,
        },
        focus_image: {
          type: 'string',
          default: '50% 50%'
        },
        marketingcode: {
          type: 'string',
          default: '04950',

        },
        literaturecode: {
          type: 'string',
          default: 'EN009',
        },
        screenid: {
          type: 'string',
          default: '250',
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
