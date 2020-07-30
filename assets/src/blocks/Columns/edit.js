import classNames from 'classnames'; // Used to to join classes together

import {Component, Fragment} from '@wordpress/element';
import {InnerBlocks, InspectorControls} from '@wordpress/block-editor';
import {SelectControl, TextareaControl, PanelBody, ToggleControl} from '@wordpress/components';
import {useSelect, useDispatch, withSelect} from '@wordpress/data';

// import {Frontend} from './Frontend';
import React from 'react';

function Edit(props) {

  console.log(props);

  const {attributes, setAttributes, clientId} = props;

  const updateAttribute = (attributeName) => value => {
    setAttributes({[attributeName]: value});
  };


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
    {value: 'even', label: 'All columns same size'},
  ];

  if (attributes.numberOfColumns > 1 && attributes.numberOfColumns < 4) {
    distributionOptions.push({value: 'leftBig', label: 'A bigger column on the left'}, {value: 'rightBig', label: 'A bigger column on the right'});
  }

  if (attributes.numberOfColumns == 3) {
    distributionOptions.push({value: 'middleBig', label: 'A bigger column in the middle'});
  }

  // Required for updating/replacing the inner blocks.
  const {replaceInnerBlocks} = useDispatch('core/block-editor');
  const {currentInnerBlocks} = useSelect(select => ({
    currentInnerBlocks: select('core/block-editor').getBlocks(clientId)
  }));

  // Replaces the inner blocks with new inner blocks that are copies of the current inner blocks, but with updates classes.
  // As silly as this may seem, this is "the Wordpress/Gutenberg way".
  const updateInnerBlocks = (d, n) => {

    const newInnerBlocks = [...currentInnerBlocks];

    for (const [index, newInnerBlock] of newInnerBlocks.entries()) {
      if (n == 1) {
        newInnerBlock.attributes.className = 'col-12';
      }
      if (n == 2 && d == 'even') {
        newInnerBlock.attributes.className = 'col-12 col-md-6';
      }
      if (n == 2 && d == 'leftBig') {
        index === 0 ? newInnerBlock.attributes.className = 'col-12 col-md-8' : '';
        index === 1 ? newInnerBlock.attributes.className = 'col-12 col-md-4' : '';
      }
      if (n == 2 && d == 'rightBig') {
        index === 0 ? newInnerBlock.attributes.className = 'col-12 col-md-4' : '';
        index === 1 ? newInnerBlock.attributes.className = 'col-12 col-md-8' : '';
      }
      if (n == 3 && d == 'even') {
        newInnerBlock.attributes.className = 'col-12 col-md-4';
      }
      if (n == 3 && d == 'leftBig') {
        index === 0 ? newInnerBlock.attributes.className = 'col-12 col-md-6' : '';
        index === 1 ? newInnerBlock.attributes.className = 'col-12 col-md-3' : '';
        index === 2 ? newInnerBlock.attributes.className = 'col-12 col-md-3' : '';
      }
      if (n == 3 && d == 'rightBig') {
        index === 0 ? newInnerBlock.attributes.className = 'col-12 col-md-3' : '';
        index === 1 ? newInnerBlock.attributes.className = 'col-12 col-md-3' : '';
        index === 2 ? newInnerBlock.attributes.className = 'col-12 col-md-6' : '';
      }
      if (n == 3 && d == 'middleBig') {
        index === 0 ? newInnerBlock.attributes.className = 'col-12 col-md-3' : '';
        index === 1 ? newInnerBlock.attributes.className = 'col-12 col-md-6' : '';
        index === 2 ? newInnerBlock.attributes.className = 'col-12 col-md-3' : '';
      }
      if (n == 4) {
        newInnerBlock.attributes.className = 'col-12 col-md-3';
      }
    }
    replaceInnerBlocks(clientId, newInnerBlocks, true);
  };

  const changeNumberOfColumns = (value) => {
    setAttributes({numberOfColumns: value});
    updateInnerBlocks(attributes.distributionOfColumns, value);
  };

  const changeDistributionOfColumns = (value) => {
    setAttributes({distributionOfColumns: value});
    updateInnerBlocks(value, attributes.numberOfColumns);
  };

  return (
    <>
      <span>Columns Block (this is just to make it easier to select this block)</span>
      <InnerBlocks
        templateLock={'all'}
        template={activeTemplate()}
      />
      <InspectorControls>
        <PanelBody title={'Columns'}>
          <SelectControl
            label={'Number of columns'}
            type={'number'}
            value={attributes.numberOfColumns}
            onChange={changeNumberOfColumns}
            options={[
              {value: 1, label: 'One'},
              {value: 2, label: 'Two'},
              {value: 3, label: 'Three'},
              {value: 4, label: 'Four'},
            ]}
          />
          <SelectControl
            label={'Distribution of columns'}
            value={attributes.distributionOfColumns}
            onChange={changeDistributionOfColumns}
            options={distributionOptions}
          />
        </PanelBody>
      </InspectorControls>
    </>
  );
}

export default Edit;
