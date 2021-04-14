import React from 'react';
import BaseBlock from '../../BaseBlock';
import {Icon, ServerSideRender} from '@wordpress/components';
// import {ShipCompetition} from './ShipCompetition';
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
          Deze pagina wordt met dit blok &quot;verborgen&quot;. Gebruik dit enkel voor dingen als kopie-pagina&#39;s voor petities en
          speciale pagina&#39;s voor mailmarketing. Wat dit doet? Een instructie aan zoekmachines om deze pagina niet te
          indexeren. Ook worden alle categorieën en tags verwijderd.
        </h4>;
      },


      save: () => null
    });
  }
}
