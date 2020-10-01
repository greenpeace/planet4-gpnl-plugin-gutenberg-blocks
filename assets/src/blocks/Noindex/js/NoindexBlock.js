import React from 'react';
import BaseBlock from '../../BaseBlock';

export class NoindexBlock extends BaseBlock {

  constructor() {
    super();

    // Setup references to external functions
    const {__} = wp.i18n;
    const {registerBlockType} = wp.blocks;

		// Register the block
		registerBlockType('planet4-gpnl-blocks/' + this.blockNameLowerCase, {
			title: this.blockName,
			icon: 'hidden',
			category: 'widgets',
      transforms: Transform,
      keywords: [
        __(this.blockName),
        __('verborgen'),
        __('hidden'),
        __('robots'),
        __('indexed'),
      ],
      attributes: null,

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
