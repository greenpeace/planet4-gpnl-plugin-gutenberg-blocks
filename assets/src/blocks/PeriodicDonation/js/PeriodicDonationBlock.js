import React from 'react';
import BaseBlock from '../../BaseBlock';
import {ServerSideRender, TextareaControl, TextControl} from '@wordpress/components';
import {Preview} from '../../../components/Preview/js/Preview';
import DynamicPlaceholder from '../../../components/DynamicPlaceholder';

export class PeriodicDonationBlock extends BaseBlock {

  constructor() {
    super();

    // Setup references to external functions
    const {__} = wp.i18n;
    const {registerBlockType} = wp.blocks;
    const blockNameKebabCase = this.blockNameKebabCase;

    // Register the block
    registerBlockType('planet4-gpnl-blocks/' + this.blockNameKebabCase, {
      title: 'Periodiek schenken',
      // icon: 'hidden',
      category: 'planet4-gpnl-blocks',
      keywords: [
        __(this.blockName),
        __('schenken'),
        __('periodiek'),
        __('belasting'),
      ],
      attributes: {
        title: {
          type: 'string',
        },
        description: {
          type: 'string',
        },
        marketingCode: {
          type: 'string',
          default: 'TODO'
        }
      },

      edit: ( ({ attributes, setAttributes, isSelected }) => {

        // Functions we want to call while editing to change attributes.
        function onValueChange(value) {
          setAttributes({[this]: value});
        }

        const serverRender = <>
          <ServerSideRender
            block={'planet4-gpnl-blocks/' + this.blockNameKebabCase}
            attributes={attributes}
          />
          <DynamicPlaceholder
            message={'Aan de voorkant komt hier het formulier voor periodiek schenken.'}
          />
        </>;

        // if the block is selected, the block-editor is rendered, otherwise the block is rendered server-side.
        if (isSelected){
          return ([
              <div>
                <TextControl
                  label={'Titel'}
                  onChange={onValueChange.bind('title')}
                  value={attributes.title}
                  placeholder={'Vul een titel in'}
                />
                <TextareaControl
                  label={'Omschrijving'}
                  onChange={onValueChange.bind('description')}
                  value={attributes.description}
                  placeholder={'Omschrijving'}
                />
                <TextControl
                  label={'Marketingcode'}
                  onChange={onValueChange.bind('marketingCode')}
                  value={attributes.marketingCode}
                />
              </div>,
              <Preview showBar={isSelected}>
                {serverRender}
              </Preview>
            ]
          )
        } else {
          return (
            <>
            {serverRender}
            </>
          )
        }
      }),

      // This is not used, because rendering is done server-side. The method has to be defined though for wordpress.
      save: () => null,

    });
  };
}
