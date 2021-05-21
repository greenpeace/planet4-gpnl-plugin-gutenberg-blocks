import React from 'react';
import BaseBlock from '../../BaseBlock';
import PropTypes from 'prop-types';

export class ShipCompetitionBlock extends BaseBlock {
  static get propTypes() {
    return {
      attributes: PropTypes.array,
    };
  }

  constructor() {
    super();

    // Setup references to external functions
    const {__} = wp.i18n;
    const {registerBlockType} = wp.blocks;

    // Register the block
    registerBlockType('planet4-gpnl-blocks/'+ this.blockNameKebabCase, {
      title: this.blockName,
      category: 'planet4-gpnl-blocks',
      icon: 'awards',
      keywords: [
        __(this.blockName),
      ],
      attributes: {
        quote: {
          type: 'string',
        },
        quotee: {
          type: 'string',
        },
        image_id: {
          type: 'number'
        },
        image_url: {
          type: 'string',
        },
      },

      edit() {
        return <h4 style={{'color': 'red'}}>
          Hier staat het nieuwe formulier
        </h4>;
      },


      save: () => null
    });
  }
}
