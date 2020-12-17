import React from 'react';

import {InnerBlocks, InspectorControls} from '@wordpress/block-editor';
import {SelectControl, PanelBody} from '@wordpress/components';
import {useSelect, useDispatch } from '@wordpress/data';

export default function Edit(props) {

	const {attributes, setAttributes, clientId} = props;

	// Templates for the initial rendering of the column.
	const templates = [
		[['planet4-gpnl-blocks/column', {className: 'col-12'}]],
		{
			'even': [
				['planet4-gpnl-blocks/column', {className: 'col-12 col-sm-6'}],
				['planet4-gpnl-blocks/column', {className: 'col-12 col-sm-6'}]
			],
			'leftBig': [
				['planet4-gpnl-blocks/column', {className: 'col-12 col-md-8'}],
				['planet4-gpnl-blocks/column', {className: 'col-12 col-md-4'}],
			],
			'rightBig': [
				['planet4-gpnl-blocks/column', {className: 'col-12 col-md-4'}],
				['planet4-gpnl-blocks/column', {className: 'col-12 col-md-8'}],
			],
		},
		{
			'even': [
				['planet4-gpnl-blocks/column', {className: 'col-12 col-lg-4'}],
				['planet4-gpnl-blocks/column', {className: 'col-12 col-lg-4'}],
				['planet4-gpnl-blocks/column', {className: 'col-12 col-lg-4'}],
			],
			'leftBig': [
				['planet4-gpnl-blocks/column', {className: 'col-12 col-lg-6'}],
				['planet4-gpnl-blocks/column', {className: 'col-12 col-lg-3'}],
				['planet4-gpnl-blocks/column', {className: 'col-12 col-lg-3'}],
			],
			'rightBig': [
				['planet4-gpnl-blocks/column', {className: 'col-12 col-lg-3'}],
				['planet4-gpnl-blocks/column', {className: 'col-12 col-lg-3'}],
				['planet4-gpnl-blocks/column', {className: 'col-12 col-lg-6'}],
			],
			'middleBig': [
				['planet4-gpnl-blocks/column', {className: 'col-12 col-lg-3'}],
				['planet4-gpnl-blocks/column', {className: 'col-12 col-lg-6'}],
				['planet4-gpnl-blocks/column', {className: 'col-12 col-lg-3'}],
			],
		},
		[
			['planet4-gpnl-blocks/column', {className: 'col-12 col-lg-3'}],
			['planet4-gpnl-blocks/column', {className: 'col-12 col-lg-3'}],
			['planet4-gpnl-blocks/column', {className: 'col-12 col-lg-3'}],
			['planet4-gpnl-blocks/column', {className: 'col-12 col-lg-3'}],
		]
	];

	const activeTemplate = () => {

		const numberOfColumns = attributes.numberOfColumns;
		const distributionOfColumns = attributes.distributionOfColumns;

		switch (numberOfColumns) {
			case 1:
				return templates[numberOfColumns-1];
			case 2:
			case 3:
				return templates[numberOfColumns-1][distributionOfColumns];
			case 4:
				return templates[numberOfColumns-1];
		}
	};

	// Required for updating/replacing the inner blocks.
	const {replaceInnerBlocks} = useDispatch('core/block-editor');
	const {currentInnerBlocks} = useSelect(select => ({
		currentInnerBlocks: select('core/block-editor').getBlocks(clientId)
	}));

	// Replaces the inner blocks with new inner blocks that are copies of the current inner blocks, but with updates classes.
	// As silly as this may seem, this is "the Wordpress/Gutenberg way".
	const updateInnerBlocks = (distributionOfColumns, numberOfColumns) => {

		const newInnerBlocks = [...currentInnerBlocks];

		// Changing the classes for the current blocks accordingly.
		for (const [index, newInnerBlock] of newInnerBlocks.entries()) {
			switch (numberOfColumns) {
				case 1:
					newInnerBlock.attributes.className = 'col-12';
					break;
				case 2:
				case 3:
					newInnerBlock.attributes.className = templates[numberOfColumns-1][distributionOfColumns][index];
					break;
				case 4:
					newInnerBlock.attributes.className = 'col-12 col-lg-3';
					break;
			}
		}
		replaceInnerBlocks(clientId, newInnerBlocks, false);
	};

	const changeNumberOfColumns = (value) => {

		const numberOfColumns = Number(value);
		let distributionOfColumns = attributes.distributionOfColumns;

		// Only when there are 3 columns the middle can be bigger.
		if (value !== 3 && attributes.distributionOfColumns === 'middleBig') {
			distributionOfColumns = 'even';
		}

		setAttributes({numberOfColumns: numberOfColumns});
		setAttributes({distributionOfColumns: distributionOfColumns});
		updateInnerBlocks(distributionOfColumns, numberOfColumns);
	};

	const changeDistributionOfColumns = (value) => {
		setAttributes({distributionOfColumns: value});
		updateInnerBlocks(value, attributes.numberOfColumns);
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
	const blockHasNoParent = (clientId) => clientId === wp.data.select('core/editor').getBlockHierarchyRootClientId(clientId);

	const beforeChoosing = () => {
		if (attributes.numberOfColumns < 1) {
			return (
				<div className={'pre-select-columns-wrapper'}>
					<h2>How many columns would you like?</h2>
					<div className={'button-wrapper'}>
						<button className={'button'} onClick={() => setAttributes({numberOfColumns: 1})}>1</button>
						<button className={'button'} onClick={() => setAttributes({numberOfColumns: 2})}>2</button>
						<button className={'button'} onClick={() => setAttributes({numberOfColumns: 3})}>3</button>
						<button className={'button'} onClick={() => setAttributes({numberOfColumns: 4})}>4</button>
					</div>
				</div>
			);
		}
		if (attributes.distributionOfColumns === '' && attributes.numberOfColumns !== 1 && attributes.numberOfColumns !== 4) {

			const distribution = () => {
				if (attributes.numberOfColumns === 2) {
					return (
						<div className={'button-wrapper'}>
							<button className={'button'} onClick={() => setAttributes({distributionOfColumns: 'even'})}>50% / 50% <br/> (even)</button>
							<button className={'button'} onClick={() => setAttributes({distributionOfColumns: 'leftBig'})}>66% / 33% <br/> (left big)</button>
							<button className={'button'} onClick={() => setAttributes({distributionOfColumns: 'rightBig'})}>33% / 66% <br/> (right big)</button>
						</div>
					);
				}
				if (attributes.numberOfColumns === 3) {
					return (
						<div className={'button-wrapper'}>
							<button className={'button'} onClick={() => setAttributes({distributionOfColumns: 'even'})}>33% / 33% / 33% <br/> (even) </button>
							<button className={'button'} onClick={() => setAttributes({distributionOfColumns: 'leftBig'})}>50% / 25% / 25% <br/> (left big)</button>
							<button className={'button'} onClick={() => setAttributes({distributionOfColumns: 'middleBig'})}>25% / 50% / 25% <br/> (middle big)</button>
							<button className={'button'} onClick={() => setAttributes({distributionOfColumns: 'rightBig'})}>25% / 25% / 50% <br/> (right big)</button>
						</div>
					);
				}
			};

			return (
				<div className={'pre-select-columns-wrapper'}>
					<h2>How do you want your columns distributed?</h2>
					{distribution()}
				</div>
			);
		}
	};

	return (
		<div className={'wp-block-planet4-gpnl-blocks-columns' + ' ' + attributes.background}>

			<div className={'inner-blocks-wrapper ' + 'number-of-columns-' + attributes.numberOfColumns + ' distribution-of-columns-' + attributes.distributionOfColumns}>
				{beforeChoosing()}

				<InnerBlocks
					templateLock={'all'}
					template={activeTemplate()}
				/>
			</div>

			<InspectorControls>
				<PanelBody title={'Theme'}>

					{blockHasNoParent(clientId) === true &&
					<SelectControl
						label={'Background color'}
						help={'If a background color is selected, all columns will be wrapped in a component with that color.'}

						value={attributes.background}
						onChange={changeBackgroundColor}
						options={[
							{value: 'bg-anthracite', label: 'Anthracite'},
							{value: 'bg-dark-blue', label: 'Dark blue'},
							{value: 'bg-sea-blue', label: 'Sea blue'},
							{value: 'bg-white', label: 'White'},
							{value: 'bg-none', label: 'None'}
						]}
					/>
					}
					{blockHasNoParent(clientId) === false &&
					<span>Nested column blocks inherit the theme from their parent block.</span>
					}
				</PanelBody>
				{attributes.numberOfColumns !== 0 && attributes.distributionOfColumns !== ''
				&&
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
				}

			</InspectorControls>
		</div>
	);
}
