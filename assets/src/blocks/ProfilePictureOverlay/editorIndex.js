import React from 'react';
import BaseBlock from '../BaseBlock';
import PropTypes from 'prop-types';
import edit from './scripts/edit';
const {withSelect} = wp.data;

export class ProfilePictureOverlayBlock extends BaseBlock {
  static get propTypes() {
    return {
      attributes: PropTypes.array,
      setAttributes: PropTypes.func,
      isSelected: PropTypes.bool,
    };
  }

  constructor() {
    super();

    // Setup references to external functions
    const {__} = wp.i18n;
    const {registerBlockType} = wp.blocks;


    // Register the block
    registerBlockType('planet4-gpnl-blocks/' + this.blockNameKebabCase, {
      title: 'Profile Picture Overlay',
      category: 'planet4-gpnl-blocks',
      keywords: [
        __(this.blockName),
        __('social media'),
        __('profiel foto'),
      ],
      attributes: {
        mediaId: {
          type: 'number',
          default: 0
        },
        mediaUrl: {
          type: 'string',
          default: ''
        }
      },
      edit: withSelect((select, props) => {
        return { media: props.attributes.mediaId ? select('core').getMedia(props.attributes.mediaId) : undefined };
      })(edit),
      save: (props) => {
        return (
          <div id={'profile-picture-overlay'} data-overlay-image={props.attributes.mediaUrl}/>
        );
      },
    });
  }
}
