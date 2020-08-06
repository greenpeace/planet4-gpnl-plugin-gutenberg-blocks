import BaseBlock from '../BaseBlock';
import Edit from './Edit';
import {InnerBlocks} from '@wordpress/block-editor';
import Save from './Save';

export class ColumnsBlock extends BaseBlock {

  constructor() {
	super();

	const {registerBlockType} = wp.blocks;
	const attributes = {
	  numberOfColumns: {
		type: 'number',
		default: 2
	  },
	  columns: {
		type: 'array',
		default: ['uno', 'due'],
	  },
	  background: {
		type: 'string',
		default: 'light'
	  },
	  distributionOfColumns: {
		type: 'string',
		default: 'even'
	  },
	};

	registerBlockType('planet4-gpnl-blocks/' + this.blockNameKebabCase, {
	  title: 'Columns',
	  category: 'planet4-gpnl-blocks',
	  attributes,

	  edit: Edit,
	  save: Save
	});
  }
}
