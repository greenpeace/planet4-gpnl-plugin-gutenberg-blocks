import BaseBlock from '../BaseBlock';
import Edit from './Edit';
import Save from './Save';
import Icon from './Icon';

export class ColumnsBlock extends BaseBlock {

  constructor() {
    super();

    const {registerBlockType} = wp.blocks;
    const attributes = {
      numberOfColumns: {
        type: 'number',
        default: 2
      },
      background: {
        type: 'string',
        default: 'bg-none'
      },
      distributionOfColumns: {
        type: 'string',
        default: 'even'
      },
    };

		registerBlockType('planet4-gpnl-blocks/' + this.blockNameKebabCase, {
			title: 'GPNL Columns',
			category: 'layout',
			attributes,
			icon: Icon,
			edit: Edit,
			save: Save
		});
	}
}
