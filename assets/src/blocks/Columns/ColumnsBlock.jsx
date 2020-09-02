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
				default: 0
			},
			background: {
				type: 'string',
				default: 'bg-none'
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
			icon: Icon,
			edit: Edit,
			save: Save
		});
	}
}
