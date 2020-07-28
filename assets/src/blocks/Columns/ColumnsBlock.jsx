import BaseBlock from '../BaseBlock';
import {Editor} from './Editor';
// import {Frontend} from '../Frontend';

export class ColumnsBlock extends BaseBlock {

  constructor() {
    super();

    const { registerBlockType } = wp.blocks;
    const attributes = {
      numberOfColumns: {
        type: 'number',
		default: 3
	  },
      columns: {
		type: 'array',
		default: ['uno', 'due'],
      },
	  background: {
        type: 'string',
        default: 'light'
      },
	  distribution: {
		type: 'string',
		default: 'even'
	  },
    };

    registerBlockType('planet4-gpnl-blocks/' + this.blockNameKebabCase, {
      title: 'Columns',
      category: 'planet4-gpnl-blocks',
      attributes,

      edit: ( { isSelected, attributes, setAttributes } ) => {

		const updateAttribute = (attributeName) => value => {
		  setAttributes({[attributeName]: value});
		};

		const addColumn = () => {
		  // let newArray = [...attributes.columns];
		  // newArray.push('');
		  console.log(attributes.numberOfColumns);
		  setAttributes({numberOfColumns : attributes.numberOfColumns+1});
		};

		const removeColumn = (index) => {
		  let newArray = [...attributes.columns];
		  newArray.splice(index, 1);
		  setAttributes({columns : newArray});
		};

		const changeColumn = (index, value) => {
		  let newArray = [...attributes.columns];
		  newArray[index] = value;
		  setAttributes({columns : newArray});
		};

        return <Editor
          attributes={attributes}
          setAttributes={setAttributes}
          isSelected={ isSelected }
		  updateAttribute={updateAttribute}
		  addColumn={addColumn}
		  changeColumn={changeColumn}
		  removeColumn={removeColumn}
        />;
      },
	  save() {
		return null;
	  }
    } );
  }
}
