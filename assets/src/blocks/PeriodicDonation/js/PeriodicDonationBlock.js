import React from 'react';
import BaseBlock from '../../BaseBlock';
import {ServerSideRender} from '@wordpress/components';

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
      attributes: null,

      edit({}) {
        return <h4>Hier komt het formulier voor periodiek schenken
        </h4>;
      },

      save: () => null

    });
  };
}
