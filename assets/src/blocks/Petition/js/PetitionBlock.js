import React from 'react';
import BaseBlock from "../../BaseBlock";
import { ServerSideRender } from "@wordpress/components";
import { Preview } from '../../../components/Preview/js/Preview';
const { withSelect } = wp.data;
import Petition from "./Petition";


export class PetitionBlock extends BaseBlock {

  constructor() {
    super();

    // Setup references to external functions
    const { __ } = wp.i18n;
    const { registerBlockType } = wp.blocks;

    // Register the block
    registerBlockType('planet4-gpnl-blocks/' + this.blockNameKebabCase, {
      title: this.blockName,
      icon: 'welcome-widgets-menus',
      category: 'planet4-gpnl-blocks',
      keywords: [
        __(this.blockName),
        __('petitie'),
      ],
      // in reality, for the image only the imageId is stored. With the higher order function 'withSelect' the imageUrl is retrieved.
      attributes: {
        title: {
          type: 'string',
        },
        subtitle: {
          type: 'string',
        },
        image: {
          type: 'number',
        },
        consent: {
          type: 'string',
          default: 'Als je dit aanvinkt, mag Greenpeace je per e-mail op de hoogte houden over onze campagnes. Ook vragen we je af en toe om steun. Afmelden kan natuurlijk altijd.'
        },
        sign: {
          type: 'string',
        },
        campaignpolicy: {
          type: 'string',
        },
        thanktitle: {
          type: 'string',
        },
        thanktext: {
          type: 'string',
        },
        donatebuttontext: {
          type: 'string',
          default: 'Doneer'
        },
        donatebuttonlink: {
          type: 'string',
          default: '/doneren'
        },
        hidesharingbuttons: {
          type: 'boolean',
        },
        twittertext: {
          type: 'string',
        },
        whatsapptext: {
          type: 'string',
        },
        marketingcode: {
          type: 'string',
        },
        literaturecode: {
          type: 'string',
        },
        campaigncode: {
          type: 'string',
        },
        countermin: {
          type: 'number',
          default: 1000
        },
        countermax: {
          type: 'integer',
        },
        countertext: {
          type: 'string',
          default: 'handtekeningen'
        },
        ga_action: {
          type: 'string',
          default: 'Petitie'
        },
        ad_campaign: {
          type: 'string',
          default: 'GP'
        },
        apref: {
          type: 'string',
        },
        jalt_track: {
          type: 'string',
          default: 'lead'
        },
        form_id: {
          type: 'number',
          default: 1
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
          return ([
            <Petition
              {...attributes}
              image_url={image_url}
              onValueChange={onValueChange}
              onNumberChange={onNumberChange}
              onSelectImage={onSelectImage}
            />,
              <Preview showBar={isSelected}>
                <ServerSideRender
                  block={'planet4-gpnl-blocks/' + this.blockNameKebabCase}
                  attributes={attributes}
                />
              </Preview>
              ]
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
