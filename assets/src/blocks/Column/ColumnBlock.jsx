/**
 * Internal dependencies
 */
import edit from './edit';
import {Editor} from './edit';
import metadata from './block.json';
import save from './save';
import BaseBlock from '../BaseBlock';
import React from 'react';

// const {name} = metadata;

// export {metadata, name};

// export const settings = {
//   title: __('Column'),
//   icon,
//   description: __('A single column within a columns block.'),
//   edit,
//   save,
// };


export class ColumnBlock extends BaseBlock{

  constructor(props) {
    super();

    const { registerBlockType } = wp.blocks;

    registerBlockType('planet4-gpnl-blocks/' + this.blockNameKebabCase, {
	  title: 'Column',
	  category: 'planet4-gpnl-blocks',
	  parent: [
        'planet4-gpnl-blocks/columns'
      ],
      attributes: {
        verticalAlignment: {
          type: 'string'
        },
        width: {
          type: 'number',
          min: 0,
          max: 100
        }
      },
      supports: {
        anchor: true,
        reusable: false,
        html: false,
        lightBlockWrapper: true
      },
	  edit: Editor,
	  save: save
    });
  }
}
