import React from 'react';
import BaseBlock from '../../BaseBlock';
import {ServerSideRender, TextareaControl, TextControl} from '@wordpress/components';
import {Preview} from '../../../components/Preview/js/Preview';
import DynamicPlaceholder from '../../../components/DynamicPlaceholder';

export class BrochureRequestBlock extends BaseBlock {

  constructor() {
    super();

    // Setup references to external functions
    const {__} = wp.i18n;
    const {registerBlockType} = wp.blocks;
    const blockNameKebabCase = this.blockNameKebabCase;

    // Register the block
    registerBlockType('planet4-gpnl-blocks/' + this.blockNameKebabCase, {
      title: 'Brochure Infoaanvraag',
      // icon: 'hidden',
      category: 'planet4-gpnl-blocks',
      keywords: [
        __(this.blockName),
        __('information'),
        __('aanvraag'),
        __('brochure'),
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
          default: ''
        },
        requestedItemId: {
          type: 'string',
          default: ''
        },
        marketingCodeNewsletter: {
          type: 'string',
          default: '04950'
        },
        literatureCodeNewsletter: {
          type: 'string',
          default: 'EN009'
        },
        thankYouText: {
          type: 'string',
          default: ''
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
            message={'Aan de voorkant komt hier het formulier voor de brochure aanvraag.'}
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
                <TextControl
                  label={'Item Id'}
                  onChange={onValueChange.bind('requestedItemId')}
                  value={attributes.requestedItemId}
                />
                <TextControl
                  label={'Marketingcode nieuwsbrief'}
                  help={'De marketingcode die bij het aanmelden voor de nieuwsbrief hoort.'}
                  onChange={onValueChange.bind('marketingCodeNewsletter')}
                  value={attributes.marketingCodeNewsletter}
                />
                <TextControl
                  label={'Literatuurcode nieuwsbrief'}
                  help={'De literatuurcode die bij het aanmelden voor de nieuwsbrief hoort.'}
                  onChange={onValueChange.bind('literatureCodeNewsletter')}
                  value={attributes.literatureCodeNewsletter}
                />
                <TextareaControl
                  label={'Bedanktekst'}
                  onChange={onValueChange.bind('thankYouText')}
                  value={attributes.thankYouText}
                  placeholder={'Tekst die de bezoeker ziet nadat het formulier verstuurd is.'}
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
