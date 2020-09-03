import React from 'react';
import {Component} from '@wordpress/element';
import {InnerBlocks, InspectorControls} from '@wordpress/block-editor';
import {SelectControl, PanelBody, TextControl, ToggleControl} from '@wordpress/components';

export default class Edit extends Component {
	constructor() {
		super();
	}

	render() {

		const {attributes, setAttributes} = this.props;

		return (
				<div className={this.props.attributes.className}>
					<TextControl
							label={'Text to click for opening the modal'}
							value={attributes.openTitle}
							onChange={(value) => setAttributes({openTitle: value})}
					/>
					<ToggleControl
							label={'Is a button'}
							value={attributes.openButton}
							checked={attributes.openButton}
							onChange={() => setAttributes({openButton: !attributes.openButton})}
							options={[
								{value: true, label: 'Yes'},
								{value: false, label: 'No'},
							]}
					/>

					<div style={{border: '1px solid red'}}>
						<InnerBlocks
								templateLock={false}
						/>
					</div>
					<InspectorControls>
						<PanelBody title={'Options'}>
							<SelectControl
									label={'Show CTA button'}
									value={attributes.showCta}
									onChange={() => setAttributes({showCta: !attributes.showCta})}
									options={[
										{value: true, label: 'Yes'},
										{value: false, label: 'No'},
									]}
							/>
							<SelectControl
									label={'Show cancel button'}
									value={attributes.showCancel}
									onChange={() => setAttributes({showCancel: !attributes.showCancel})}
									options={[
										{value: true, label: 'Yes'},
										{value: false, label: 'No'},
									]}
							/>
						</PanelBody>
					</InspectorControls>

				</div>
		);
	}
}
