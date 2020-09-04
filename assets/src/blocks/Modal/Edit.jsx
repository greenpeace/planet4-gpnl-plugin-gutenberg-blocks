import React from 'react';
import {Component} from '@wordpress/element';
import {InnerBlocks, RichText} from '@wordpress/block-editor';
import {InspectorControls, BlockControls} from '@wordpress/editor';
import {SelectControl, PanelBody, TextControl, ToggleControl} from '@wordpress/components';

export default class Edit extends Component {
	constructor() {
		super();
	}

	componentDuniqueIdMount() {
		// Set a unique uniqueId on the block based on the current time.
		if (this.props.attributes.uniqueId === '') {
			this.props.setAttributes({uniqueId: new Date().getTime()});
		}
	}

	render() {

		const {attributes, setAttributes} = this.props;
		const {
			openTitle,
			openButton,
			modalTitle,
			ctaTitle,
			cancelTitle,
			showCta,
			showCancel,
			uniqueId,
		} = attributes;

		return (
				<div className={this.props.attributes.className}>
					<RichText
							tagName={'a'}
							className={'btn btn-priary'}
							placeholder={'Text to click for opening the modal'}
							value={attributes.openTitle}
							onChange={(value) => setAttributes({openTitle: value})}
							keepPlaceholderOnFocus={true}
					/>
					<div className={'modal-inner'}>
						<em>Everything inside this container will be shown in the modal.</em>
						<InnerBlocks
								templateLock={false}
						/>
					</div>
					<InspectorControls>
						<PanelBody title={'Options'}>

							<ToggleControl
									label={'Button to open modal'}
									value={openButton}
									help={'If unselected, the link to open the modal will be a regular link.'}
									checked={openButton}
									onChange={() => setAttributes({openButton: !attributes.openButton})}
									options={[
										{value: true, label: 'Yes'},
										{value: false, label: 'No'},
									]}
							/>

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
