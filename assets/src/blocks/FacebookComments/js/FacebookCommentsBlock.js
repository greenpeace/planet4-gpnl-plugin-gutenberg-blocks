import React from 'react';
import BaseBlock from '../../BaseBlock';
import FacebookComments from './FacebookComments';


export class FacebookCommentsBlock extends BaseBlock {

  getHTML(attributes) {
    return (
      <section className={'block'}>
        <h2 className={'page-section-header'}>{attributes.title}</h2>
        <p className={'page-section-description'}>{attributes.description}</p>
        <div id="fb-root"/>
        <script async="" defer="" crossOrigin="anonymous"
          src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&amp;version=v5.0"/>
        <div className="fb-comments" data-href={attributes.url} data-width={attributes.width} data-numposts={attributes.numberOfPosts}/>
      </section>
    );
  }

  constructor() {
    super();

    // Setup references to external functions
    const {__} = wp.i18n;
    const {registerBlockType} = wp.blocks;

    // Register the block
    registerBlockType('planet4-gpnl-blocks/' + this.blockNameKebabCase, {
      title: 'Facebook Commentaar',
      description: 'Geef bezoekers de mogelijkheid tot reageren op deze pagina via Facebook.',
      // icon: Icon,
      category: 'planet4-gpnl-blocks',
      keywords: [
        __(this.blockName),
        __('discussie'),
        __('reageer'),
        __('comments'),
      ],
      attributes: {
        title: {
          type: 'string',
        },
        description: {
          type: 'string',
        },
        url: {
          type: 'string',
        },
        width: {
          type: 'string',
          default: '100%'
        },
        numberOfPosts: {
          type: 'number',
          default: 10
        },
      },

      edit: ({ attributes, setAttributes, isSelected }) => {

        // Functions we want to call while editing to change attributes.
        function onValueChange(value) {
          setAttributes({[this]: value});
        }

        function onNumberChange(value) {
          setAttributes({[this]: Number(value)});
        }

        // if the block is selected, the block-editor is rendered, otherwise the block is rendered server-side.
        if (isSelected) {
          return (
            <FacebookComments
              {...attributes}
              onValueChange={onValueChange}
              onNumberChange={onNumberChange}
            />
          );
        } else {
          return ([this.getHTML({...attributes}),
            <div style={{backgroundColor: 'f3f3f3', padding: '10px', marginTop: '-60px'}}><em>Hier worden de reacties via Facebook getoond aan de "voorkant".</em></div>]);
        }
      },

      save: ({attributes}) => this.getHTML({...attributes})

    });
  }
}
