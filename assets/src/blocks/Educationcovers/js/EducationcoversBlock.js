import React from 'react';
import BaseBlock from '../../BaseBlock';
import { ServerSideRender } from '@wordpress/components';
import Transform from './Transform';

export class EducationcoversBlock extends BaseBlock {

  constructor() {
    super();

    // Setup references to external functions
    const {__} = wp.i18n;
    const { registerBlockType } = wp.blocks;
    const blockNameKebabCase = this.blockNameKebabCase;

    // Register the block
    registerBlockType('planet4-gpnl-blocks/' + this.blockNameLowerCase, {
      title: 'lesmateriaal overzicht',
      icon: 'grid-view',
      category: 'planet4-gpnl-blocks',
      keywords: [
        __(this.blockName),
        __('educatie'),
        __('overzicht'),
      ],
      transforms: Transform,
      attributes: null,
      edit: () => {
			  return (
          <ServerSideRender
            block={'planet4-gpnl-blocks/' + this.blockNameKebabCase}
          />
        );
      }
      ,

      save: () => null

    });
  }
}
