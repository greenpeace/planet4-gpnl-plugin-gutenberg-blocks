import React from 'react';

import {InnerBlocks, InspectorControls} from '@wordpress/block-editor';
import {SelectControl, PanelBody, FocalPointPicker, ToggleControl} from '@wordpress/components';
import {useSelect, useDispatch, withSelect} from '@wordpress/data';

function Edit(props) {

  const {attributes, setAttributes, clientId} = props;

  // Templates for the inital rendering of the column.
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

    if (n === 1) {
      return templates['one'];
    }

    if (n === 2) {
      if (d === 'even') {
        return templates['twoEven'];
      } else if (d === 'leftBig') {
        return templates['twoLeftBigger'];
      } else if (d === 'rightBig') {
        return templates['twoRightBigger'];
      }
    }
    if (n === 3) {
      if (d === 'even') {
        return templates['threeEven'];
      } else if (d === 'leftBig') {
        return templates['threeLeftBigger'];
      } else if (d === 'rightBig') {
        return templates['threeRightBigger'];
      } else if (d === 'middleBig') {
        return templates['middleBigger'];
      }
    }
    if (n === 4) {
      return templates['four'];
    }
  };

  // Required for updating/replacing the inner blocks.
  const {replaceInnerBlocks} = useDispatch('core/block-editor');
  const {currentInnerBlocks} = useSelect(select => ({
    currentInnerBlocks: select('core/block-editor').getBlocks(clientId)
  }));

  // Replaces the inner blocks with new inner blocks that are copies of the current inner blocks, but with updates classes.
  // As silly as this may seem, this is "the Wordpress/Gutenberg way".
  const updateInnerBlocks = (d, n) => {

    const newInnerBlocks = [...currentInnerBlocks];

    // Changing the classes for the current blocks accordingly.
    for (const [index, newInnerBlock] of newInnerBlocks.entries()) {
      if (n === 1) {
        newInnerBlock.attributes.className = 'col-12';
      }
      if (n === 2 && d === 'even') {
        newInnerBlock.attributes.className = 'col-12 col-md-6';
      }
      if (n === 2 && d === 'leftBig') {
        index === 0 ? newInnerBlock.attributes.className = 'col-12 col-md-8' : '';
        index === 1 ? newInnerBlock.attributes.className = 'col-12 col-md-4' : '';
      }
      if (n === 2 && d === 'rightBig') {
        index === 0 ? newInnerBlock.attributes.className = 'col-12 col-md-4' : '';
        index === 1 ? newInnerBlock.attributes.className = 'col-12 col-md-8' : '';
      }
      if (n === 3 && d === 'even') {
        newInnerBlock.attributes.className = 'col-12 col-md-4';
      }
      if (n === 3 && d === 'leftBig') {
        index === 0 ? newInnerBlock.attributes.className = 'col-12 col-md-6' : '';
        index === 1 ? newInnerBlock.attributes.className = 'col-12 col-md-3' : '';
        index === 2 ? newInnerBlock.attributes.className = 'col-12 col-md-3' : '';
      }
      if (n === 3 && d === 'rightBig') {
        index === 0 ? newInnerBlock.attributes.className = 'col-12 col-md-3' : '';
        index === 1 ? newInnerBlock.attributes.className = 'col-12 col-md-3' : '';
        index === 2 ? newInnerBlock.attributes.className = 'col-12 col-md-6' : '';
      }
      if (n === 3 && d === 'middleBig') {
        index === 0 ? newInnerBlock.attributes.className = 'col-12 col-md-3' : '';
        index === 1 ? newInnerBlock.attributes.className = 'col-12 col-md-6' : '';
        index === 2 ? newInnerBlock.attributes.className = 'col-12 col-md-3' : '';
      }
      if (n === 4) {
        newInnerBlock.attributes.className = 'col-12 col-md-3';
      }
    }
    replaceInnerBlocks(clientId, newInnerBlocks, false);
  };

  const changeNumberOfColumns = (value) => {

    const numberOfColumns = Number(value);
    let distributionOfColumns = attributes.distributionOfColumns;

    // Only when there are 3 columns the middle can be bigger.
    if (value !== 3 && attributes.distributionOfColumns === 'middleBig'){
      distributionOfColumns = 'even';
    }

    setAttributes({numberOfColumns: numberOfColumns});
    updateInnerBlocks(distributionOfColumns, numberOfColumns);
  };

  const changeDistributionOfColumns = (value) => {
    setAttributes({distributionOfColumns: value});
    updateInnerBlocks( value, attributes.numberOfColumns);
  };

  const changeBackgroundColor = (value) => {
    setAttributes({background: value});
  };

  // Create dynamic distribution options depending on the number of columns.
  const distributionOptions = [
    {value: 'even', label: 'All columns same size'},
  ];
  if (attributes.numberOfColumns > 1 && attributes.numberOfColumns < 4) {
    distributionOptions.push({value: 'leftBig', label: 'A bigger column on the left'}, {value: 'rightBig', label: 'A bigger column on the right'});
  }
  if (attributes.numberOfColumns === 3) {
    distributionOptions.push({value: 'middleBig', label: 'A bigger column in the middle'});
  }

  // Function to check if the block is nested or not. Returns true if the block has no parent block.
  const blockHasNoParent = ( clientId ) => clientId === wp.data.select( 'core/editor' ).getBlockHierarchyRootClientId( clientId );

  return (
    <div className={'wp-block-planet4-gpnl-blocks-columns' + ' ' + attributes.background}>
      <div className={'inner-blocks-wrapper ' + 'number-of-columns-' + attributes.numberOfColumns + ' distribution-of-columns-' + attributes.distributionOfColumns}>
        <InnerBlocks
          templateLock={'all'}
          template={activeTemplate()}
        />
      </div>

      <InspectorControls>


        <PanelBody title={'Theme'}>
          { blockHasNoParent(clientId) === true
          &&
          <SelectControl
            label={'Background color'}
            help={'If you select \'none\' the content of the columns will appear as if there were no inner margin.'}

            value={attributes.background}
            onChange={changeBackgroundColor}
            options={[
              {value: 'light', label: 'Light'},
              {value: 'dark', label: 'Dark'},
              {value: 'no-background', label: 'None'}
            ]}
          />
          }
          {blockHasNoParent(clientId) === false
          &&
            <span>Nested column blocks inherit the theme from their parent block.</span>
          }
        </PanelBody>


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
    </div>
  );
}

export default Edit;
