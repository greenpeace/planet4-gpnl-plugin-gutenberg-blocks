import Edit from './Edit';
import Save from './Save';
import BaseBlock from '../BaseBlock';
import React from 'react';

/**
 * This block only acts as a wrapper for the InnerBlocks that are used in the 'Columns Block'.
 * Using this wrapper is required because it is not possible to use InnerBlocks more than once in a parent block.
 */
export class ModalBlock extends BaseBlock {

	constructor() {
		super();

		const {registerBlockType} = wp.blocks;

		const attributes = {
			openTitle: {
				type: 'string',
				default: ''
			},
			openButton: {
				type: 'boolean',
				default: true
			},
			modalTitle: {
				type: 'string',
				default: ''
			},
			ctaTitle: {
				type: 'string',
				default: 'Ga!'
			},
			cancelTitle: {
				type: 'string',
				default: 'annuleer',
			},
			showCta: {
				type: 'boolean',
				default: true
			},
			showCancel: {
				type: 'boolean',
				default: true
			},
			uniqueId: {
				type: 'string',
				default: ''
			}
		};

		registerBlockType('planet4-gpnl-blocks/' + this.blockNameKebabCase, {
			category: 'planet4-gpnl-blocks',
			title: 'modal',
			attributes,
			edit: Edit,
			save: Save
		});
	}
}
