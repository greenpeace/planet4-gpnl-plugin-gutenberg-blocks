import classNames from 'classnames'; // Used to to join classes together

import {Component, Fragment} from '@wordpress/element';
import {InspectorControls} from '@wordpress/block-editor';
import {SelectControl, TextareaControl, PanelBody, ToggleControl} from '@wordpress/components';
import {InnerBlocks} from '@wordpress/block-editor';

import {Frontend} from './Frontend';
import React from 'react';

// import {ColumnWrapper} from './ColumnWrapper';


const { useDispatch, useSelect } = wp.data;


export class Editor extends Component {
  constructor(props) {
	super();
	this.state = {};
  }



  renderEdit() {

	console.log(this.props);


	const {attributes, updateAttribute, setAttributes, addColumn, removeColumn, changeColumn} = this.props;

	const templates = {
	  one: [
		['planet4-gpnl-blocks/column', {className: 'col-12'}]
	  ],
	  twoEven: [
		['planet4-gpnl-blocks/column', {className: 'col-12 col-sm-6'}],
		['planet4-gpnl-blocks/column', {className: 'col-12 col-sm-6'}]
	  ],
	  twoLeftBigger: [
		['planet4-gpnl-blocks/column', {className: 'col-12 col-md-8'}],
		['planet4-gpnl-blocks/column', {className: 'col-12 col-md-4'}],
	  ],
	  twoRightBigger: [
		['planet4-gpnl-blocks/column', {className: 'col-12 col-md-4'}],
		['planet4-gpnl-blocks/column', {className: 'col-12 col-md-8'}],
	  ],
	  threeEven: [
		['planet4-gpnl-blocks/column', {className: 'col-12 col-md-4'}],
		['planet4-gpnl-blocks/column', {className: 'col-12 col-md-4'}],
		['planet4-gpnl-blocks/column', {className: 'col-12 col-md-4'}],
	  ],
	  threeLeftBigger: [
		['planet4-gpnl-blocks/column', {className: 'col-12 col-md-6'}],
		['planet4-gpnl-blocks/column', {className: 'col-12 col-md-3'}],
		['planet4-gpnl-blocks/column', {className: 'col-12 col-md-3'}],
	  ],
	  threeRightBigger: [
		['planet4-gpnl-blocks/column', {className: 'col-12 col-md-3'}],
		['planet4-gpnl-blocks/column', {className: 'col-12 col-md-3'}],
		['planet4-gpnl-blocks/column', {className: 'col-12 col-md-6'}],
	  ],
	  threeMiddleBigger: [
		['planet4-gpnl-blocks/column', {className: 'col-12 col-md-3'}],
		['planet4-gpnl-blocks/column', {className: 'col-12 col-md-6'}],
		['planet4-gpnl-blocks/column', {className: 'col-12 col-md-3'}],
	  ],
	  four: [
		['planet4-gpnl-blocks/column', {className: 'col-12 col-md-3'}],
		['planet4-gpnl-blocks/column', {className: 'col-12 col-md-3'}],
		['planet4-gpnl-blocks/column', {className: 'col-12 col-md-3'}],
		['planet4-gpnl-blocks/column', {className: 'col-12 col-md-3'}],
	  ]
	};

	const activeTemplate = () => {

	  const n = attributes.numberOfColumns;
	  const d = attributes.distributionOfColumns;

	  if (n == 1) {
		return templates['one'];
	  }

	  if (n == 2) {
		if (d == 'even') {
		  return templates['twoEven'];
		} else if (d == 'leftBig') {
		  return templates['twoLeftBigger'];
		} else if (d == 'rightBig') {
		  return templates['twoRightBigger'];
		}
	  }
	  if (n == 3) {
		if (d == 'even') {
		  return templates['threeEven'];
		} else if (d == 'leftBig') {
		  return templates['threeLeftBigger'];
		} else if (d == 'rightBig') {
		  return templates['threeRightBigger'];
		} else if (d == 'middleBig') {
		  return templates['middleBigger'];
		}
	  }
	  if (n == 4) {
		return templates['four'];
	  }
	};


	const distributionOptions = [
	  {value: 'even', label: 'Even'},
	];

	if (attributes.numberOfColumns > 1 && attributes.numberOfColumns < 4) {
	  distributionOptions.push({value: 'leftBig', label: 'Left big'}, {value: 'rightBig', label: 'Right big'});
	}

	if (attributes.numberOfColumns == 3) {
	  distributionOptions.push({value: 'middleBig', label: 'Middle bigger'});
	}

	// console.log(activeTemplate());

	return (
	  <>
		<span>columns:</span>
		{/*<div className={'row'}>*/}
		<InnerBlocks
		  templateLock={'all'}
		  template={activeTemplate()}
		/>
		{/*</div>*/}
		{/*{innerBlocks}*/}
		{/*<InspectorControls>*/}
		{/*  <PanelBody title={'Columns'}>*/}
		{/*	<SelectControl*/}
		{/*	  label={'Number of columns'}*/}
		{/*	  type={'number'}*/}
		{/*	  value={attributes.numberOfColumns}*/}
		{/*	  onChange={updateAttribute('numberOfColumns')}*/}
		{/*	  options={[*/}
		{/*		{value: 1, label: 'One'},*/}
		{/*		{value: 2, label: 'Two'},*/}
		{/*		{value: 3, label: 'Three'},*/}
		{/*		{value: 4, label: 'Four'},*/}
		{/*	  ]}*/}
		{/*	/>*/}

		{/*	<SelectControl*/}
		{/*	  label={'Distribution of columns'}*/}
		{/*	  value={attributes.distributionOfColumns}*/}
		{/*	  onChange={updateAttribute('distributionOfColumns')}*/}
		{/*	  options={distributionOptions}*/}
		{/*	/>*/}

		{/*	/!*<button onClick={addColumn} className={'add'}>add column</button>*!/*/}
		{/*  </PanelBody>*/}
		{/*</InspectorControls>*/}
	  </>
	);
  }

  renderView() {
	const {attributes} = this.props;

	return <Fragment>
	  {/*<Frontend {...attributes} handleErrors={this.handleErrors}/>*/}
	</Fragment>;
  }

  render() {

	console.log(this.props.clientId);

	return (
	  <Fragment>
		{this.renderEdit()}
		{/*{*/}
		{/*  this.props.isSelected*/}
		{/*	? this.renderEdit()*/}
		{/*	: this.renderView()*/}
		{/*}*/}
	  </Fragment>
	);
  }
}
