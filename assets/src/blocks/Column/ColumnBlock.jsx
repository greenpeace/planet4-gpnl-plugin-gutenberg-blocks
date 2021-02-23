import Edit from './Edit';
import Save from './Save';
import BaseBlock from '../BaseBlock';
import Icon from './Icon';

/**
 * This block only acts as a wrapper for the InnerBlocks that are used in the 'Columns Block'.
 * Using this wrapper is required because it is not possible to use InnerBlocks more than once in a parent block.
 */
export class ColumnBlock extends BaseBlock {

  constructor() {
    super();

    const {registerBlockType} = wp.blocks;

    registerBlockType('planet4-gpnl-blocks/' + this.blockNameKebabCase, {
      title: 'Column',
      category: 'planet4-gpnl-blocks',
      parent: [
        'planet4-gpnl-blocks/columns'
      ],
      supports: {
        className: true,
        anchor: true,
        reusable: false,
        html: false,
        lightBlockWrapper: true
      },
      icon: Icon,
      edit: Edit,
      save: Save
    });
  }
}
