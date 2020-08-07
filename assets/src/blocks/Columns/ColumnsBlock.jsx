import BaseBlock from '../BaseBlock';
import Edit from './Edit';
import Save from './Save';

export class ColumnsBlock extends BaseBlock {

  constructor() {
	super();

	const {registerBlockType} = wp.blocks;
	const attributes = {
	  numberOfColumns: {
		type: 'number',
		default: 0
	  },
	  background: {
		type: 'string',
		default: 'no-background'
	  },
	  distributionOfColumns: {
		type: 'string',
		default: ''
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
