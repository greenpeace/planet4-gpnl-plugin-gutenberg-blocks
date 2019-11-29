import React from 'react';
import BaseBlock from "../../BaseBlock";
import Icon from './Icon'
import Edit from "./Edit";
import Save from "./Save";

export class CollapsibleBlock extends BaseBlock {

  constructor() {
    super();

    // Setup references to external functions
    const {__} = wp.i18n;
    const {registerBlockType} = wp.blocks;

    // Register the block
    registerBlockType('planet4-gpnl-blocks/' + this.blockNameKebabCase, {
      title: 'Uitklapper',
      icon: Icon,
      category: 'planet4-gpnl-blocks',
      keywords: [
        __(this.blockName),
        __('uitklapper'),
        __('uitvouwer'),
        __('faq'),
      ],
      attributes: {
        title: {
          type: 'string',
        },
        open: {
          type: 'boolean',
          default: false
        }
      },
      edit: Edit,
      save: Save,
    });
  };
}
