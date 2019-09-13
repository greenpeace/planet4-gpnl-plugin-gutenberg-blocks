import React from 'react';
import BaseBlock from "../../BaseBlock";
import { ServerSideRender } from "@wordpress/components";
import { Preview } from '../../../components/Preview/js/Preview';
const { withSelect } = wp.data;
import Donation from "./Donation";


export class DonationBlock extends BaseBlock {

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
        __('doneer'),
      ],
      attributes: {
        title: {
          type: 'string',
        },
        description: {
          type: 'string',
        },
        suggested_frequency: {
          type: 'string',
        },
        allow_frequency_override: {
          type: 'string',
        },
        min_amount: {
          type: 'number',
        },
        oneoff_amount1: {
          type: 'number',
        },
        oneoff_amount2: {
          type: 'number',
        },
        oneoff_amount3: {
          type: 'number',
        },
        oneoff_suggested_amount: {
          type: 'number',
        },
        recurring_amount1: {
          type: 'number',
        },
        recurring_amount2: {
          type: 'number',
        },
        recurring_amount3: {
          type: 'number',
        },
        recurring_suggested_amount: {
          type: 'number',
        },
        thanktitle: {
          type: 'string',
        },
        thankdescription: {
          type: 'string',
        },
        literatuurcode: {
          type: 'string',
          default: 'EN999'
        },
        marketingcode_recurring: {
          type: 'string',
          default: '04888'
        },
        marketingcode_oneoff: {
          type: 'string',
          default: '04888'
        },
        returnpage: {
          type: 'string',
          default: 'https://www.greenpeace.org/nl/'
        },
        errorpage: {
          type: 'string',
          default: 'https://www.greenpeace.org/nl/'
        },
      },

      edit: ( ({ attributes, setAttributes, isSelected }) => {

        // Functions we want to call while editing to change attributes.
        function onValueChange(value) {
          setAttributes({[this]: value});
        }

        function onNumberChange(value) {
          setAttributes({[this]: Number(value)});
        }

        // if the block is selected, the block-editor is rendered, otherwise the block is rendered server-side.
        if (isSelected){
          return ([
            <Donation
              {...attributes}
              onValueChange={onValueChange}
              onNumberChange={onNumberChange}
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
