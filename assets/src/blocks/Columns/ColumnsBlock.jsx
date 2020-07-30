import BaseBlock from '../BaseBlock';
import EditorFunctional from './EditorFunctional';
import { Editor } from './Editor';
import Edit from './edit';
// import {Frontend} from '../Frontend';
import {InnerBlocks} from '@wordpress/block-editor';
const {withSelect} = wp.data;

export class ColumnsBlock extends BaseBlock {

  constructor() {
	super();

	const {registerBlockType} = wp.blocks;
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
	  // withSelect((select, props) => {
	  //
		// // console.log(props);
	  //
	  // })(({isSelected, attributes, setAttributes}) => {
	  //
		// const updateAttribute = (attributeName) => value => {
		// 	  setAttributes({[attributeName]: value});
		// 	};
	  //
		// 	const addColumn = () => {
		// 	  // let newArray = [...attributes.columns];
		// 	  // newArray.push('');
		// 	  setAttributes({numberOfColumns: attributes.numberOfColumns + 1});
		// 	};
	  //
		// 	const removeColumn = (index) => {
		// 	  let newArray = [...attributes.columns];
		// 	  newArray.splice(index, 1);
		// 	  setAttributes({columns: newArray});
		// 	};
	  //
		// 	const changeColumn = (index, value) => {
		// 	  let newArray = [...attributes.columns];
		// 	  newArray[index] = value;
		// 	  setAttributes({columns: newArray});
		// 	};
	  //
		// 	const updateDistribution = (value) => {
		// 	  setAttributes({distributionOfColumns: value});
		// 	};
	  //
	  //
		// 	return <Editor
		// 	  attributes={attributes}
		// 	  setAttributes={setAttributes}
		// 	  isSelected={isSelected}
		// 	  updateAttribute={updateAttribute}
		// 	  updateDistribution={updateDistribution}
		// 	  addColumn={addColumn}
		// 	  changeColumn={changeColumn}
		// 	  removeColumn={removeColumn}
		// 	/>;
		//   }),
	  save: (attributes) => {
		return (
		  <section className={'container'}>
			<div className={'row'}>
			  <InnerBlocks.Content/>
			  {attributes.content}
			</div>
		  </section>
		);
	  }
	});
  }
}
