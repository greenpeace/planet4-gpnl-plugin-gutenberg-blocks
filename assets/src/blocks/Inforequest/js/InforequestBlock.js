import React from 'react';
import BaseBlock from "../../BaseBlock";
import { ServerSideRender } from "@wordpress/components";
import { Preview } from '../../../components/Preview/js/Preview';
import Inforequest from "./Inforequest";
import Transform from "./Transform";



export class InforequestBlock extends BaseBlock {

  constructor() {
    super();

    // Setup references to external functions
    const { __ } = wp.i18n;
    const { registerBlockType } = wp.blocks;

    // Register the block
    registerBlockType('planet4-gpnl-blocks/' + this.blockNameKebabCase, {
      title: 'Docentenaanvraag',
      icon: 'welcome-widgets-menus',
      category: 'planet4-gpnl-blocks',
      transforms: Transform,
      keywords: [
        __(this.blockName),
        __('docenten'),
        __('educatie'),
        __('aanvraag'),
        __('informatie'),
        __('registratie'),
      ],
      attributes: {
        formtitle: {
          type: 'string',
        },
        itemtitle: {
          type: 'string',
        },
        mcode1_code: {
          type: 'string',
        },
        mcode1_label: {
          type: 'string',
        },
        mcode2_code: {
          type: 'string',
        },
        mcode2_label: {
          type: 'string',
        },
        mcode3_code: {
          type: 'string',
        },
        mcode3_label: {
          type: 'string',
        },
        mcode4_code: {
          type: 'string',
        },
        mcode4_label: {
          type: 'string',
        },
        mcode5_code: {
          type: 'string',
        },
        mcode5_label: {
          type: 'string',
        },
        consent: {
          type: 'string',
          default: 'Als je dit aanvinkt, mag Greenpeace je per e-mail op de hoogte houden over onze campagnes. Ook vragen we je af en toe om steun. Afmelden kan natuurlijk altijd.'
        },
        sign: {
          type: 'string',
          default: 'Registreer'
        },
        hider: {
          type: 'string',
          default: '0'
        },
      },

      edit: (({ attributes, setAttributes, isSelected }) => {

        // Functions we want to call while editing to change attributes.
        function onValueChange(value) {
          setAttributes({[this]: value});
        }

        // if the block is selected, the block-editor is rendered, otherwise the block is rendered server-side.
        if (isSelected){
          return ([
            <Inforequest
              {...attributes}
              onValueChange={onValueChange}
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
          )}
      }),


      // This is not used, because rendering is done server-side. The method has to be defined though for wordpress.
      save: () => null,

    });
  };
}
