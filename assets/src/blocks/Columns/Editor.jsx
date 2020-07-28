import {Component, Fragment} from '@wordpress/element';
import {InspectorControls} from '@wordpress/block-editor';
import {TextareaControl, PanelBody, ToggleControl} from '@wordpress/components';
import {InnerBlocks} from '@wordpress/block-editor';

import {Frontend} from './Frontend';
import React from 'react';

// import {ColumnWrapper} from './ColumnWrapper';

export class Editor extends Component {
  constructor(props) {
	super(props);
	this.handleErrors = this.handleErrors.bind(this);
	this.state = {};
  }

  handleErrors(errors) {
	this.setState(errors);
  }

  renderEdit() {

	const {attributes, updateAttribute, setAttributes, addColumn, removeColumn, changeColumn} = this.props;

	// const toAttribute = attributeName => value => {
	//   setAttributes({[attributeName]: value});
	// };

	const columns = attributes.columns.map(function (value, index) {
	  return (
		<div key={index}>
		  <strong>column {index}</strong>


		  <button onClick={() => removeColumn(index)}>get rid of this column</button>
		</div>
	  );
	});

	const innerBlocks = () => {
	  wp.element.createElement(InnerBlocks, {
		template: [['core/column', {}, [['core/paragraph', {'placeholder': 'Put some thing in here...'}]]], ['core/column', {}, [['core/paragraph', {'placeholder': 'Inhalt rechte Spalte'}]]]],
		templateLock: 'all',
		allowedBlocks: ['core/column']
	  });
	};


	console.log(attributes.numberOfColumns);

	let ArrayTemplate = [];
	for (let i = 0; i < attributes.numberOfColumns; i++) {
	  ArrayTemplate.push(['core/column', {}, [['core/paragraph', {'placeholder': 'use this paragraph block or add something else ...' +i}]]]);
	}
	//
	//   const TEMPLATE = [
	// 	for (i = 0; i < attributes.numberOfColumns; i++) {
	// 	ArrayTemplate.push(['core/column', {}, [['core/paragraph', {'placeholder': 'use this paragraph block or add something else'}]]]);
	//   }
	//
	// 	['core/column', {}, [['core/paragraph', {'placeholder': 'use this paragraph block or add something else'}]]],
	//   ['core/column', {}, [['core/paragraph', {'placeholder': 'Tweetje'}]]]
	// ];

	return (
	  <Fragment>
		<h1>columsn?</h1>
		<InnerBlocks
		  templateLock={'all'}
		  template={ ArrayTemplate }
		/>
		{/*{innerBlocks}*/}
		<InspectorControls>
		  <PanelBody title={'Columns'}>
			<button onClick={addColumn} className={'add'}>add column</button>
			<hr/>
		  </PanelBody>
		</InspectorControls>
	  </Fragment>
	);
  }

  renderView() {
	const {attributes} = this.props;

	return <Fragment>
	  <Frontend {...attributes} handleErrors={this.handleErrors}/>
	</Fragment>;
  }

  render() {
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
