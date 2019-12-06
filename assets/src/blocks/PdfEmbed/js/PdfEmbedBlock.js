import React, {Component, Fragment} from 'react';
import BaseBlock from "../../BaseBlock";
import {ServerSideRender} from "@wordpress/components";
import PdfEmbed from "./PdfEmbed";

const {withSelect} = wp.data;

export class PdfEmbedBlock extends BaseBlock {

  constructor() {
    super();

    // Setup references to external functions
    const {__} = wp.i18n;
    const {registerBlockType} = wp.blocks;

    // Register the block
    registerBlockType('planet4-gpnl-blocks/' + this.blockNameKebabCase, {
      title: 'Pdf Embed',
      // icon: Icon,
      category: 'planet4-gpnl-blocks',
      keywords: [
        __(this.blockName),
      ],
      attributes: {
        title: {
          type: 'string',
        },
        description: {
          type: 'string',
        },
        document_id: {
          type: 'number'
        }
      },

      edit: withSelect((select, props) => {
        const {attributes} = props;
        const {document_id} = attributes;

        let document_url = '';

        if (document_id && (0 < document_id)) {
          const document = wp.data.select('core').getMedia(document_id);
          if (document) {
            document_url = document.link;
          }
        }

        return {
          document_url
        };
      })(({
            attributes, setAttributes, isSelected, document_url
          }) => {

        // Functions we want to call while editing to change attributes.
        function onValueChange(value) {
          setAttributes({[this]: value});
        }

        function onSelectMedia(media) {
          setAttributes({
            document_id: media.id
          });
        }

        // if the block is selected, the block-editor is rendered, otherwise the block is rendered server-side.
        if (isSelected) {
          return (
            <PdfEmbed
              {...attributes}
              document_url={document_url}
              onValueChange={onValueChange}
              onSelectMedia={onSelectMedia}
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
