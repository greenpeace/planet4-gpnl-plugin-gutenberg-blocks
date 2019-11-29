import React from 'react';
import Inspector from './Inspector';
import Controls from './Controls';

/**
 * WordPress dependencies
 */
import { Component, Fragment } from '@wordpress/element';
import { InnerBlocks, RichText } from '@wordpress/block-editor';

/**
 * Constants
 */
const TEMPLATE = [ [ 'core/paragraph', { placeholder: 'Voeg content toe (dit gedeelte is zichtbaar als de uitklapper geopend is)…' } ] ];


/**
 * Block edit function
 */
export default class Edit extends Component {
	render() {

	  const { attributes, isSelected, setAttributes } = this.props;
		const { title } = attributes;

    return (
			<Fragment>
				{ isSelected && (
					<Controls
						{ ...this.props }
					/>
				) }
				{ isSelected && (
					<Inspector
						{ ...this.props }
					/>
				) }
				{/* I give this div the className of the block it also gets when saved, so the same styles can be applied. */}
				<div className={'wp-block-planet4-gpnl-blocks-collapsible'}>
					<RichText
						tagName="p"
            className={'title'}
						placeholder={ 'Voeg titel toe…' }
						value={ title }
						onChange={ ( nextTitle ) => setAttributes( { title: nextTitle } ) }
						keepPlaceholderOnFocus
					/>
					{/* TODO: hide content when parent is not selected. Problem: if child is selected parents is no longer selecten. */}
					<div className={ `content${this.props.isSelected ? ' selected' : ' unselected'}` } >
						<InnerBlocks
							template={ TEMPLATE }
							templateInsertUpdatesSelection={ false }
						/>
					</div>
				</div>
			</Fragment>
		);
	}
}
