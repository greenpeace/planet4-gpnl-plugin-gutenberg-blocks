import React from 'react';
import {Component} from '@wordpress/element';
import {InnerBlocks, RichText} from '@wordpress/block-editor';
import {InspectorControls, BlockControls, URLInput} from '@wordpress/editor';
import {SelectControl, PanelBody, TextControl, ToggleControl} from '@wordpress/components';

export default class Edit extends Component {
	constructor(props) {
		super();

		if (props.attributes.uniqueId < 1) {
			props.setAttributes({uniqueId: new Date().getTime()});
		}
	}

	render() {

		const {attributes, setAttributes} = this.props;
		const {
			openTitle,
			openButton,
			modalTitle,
			ctaTitle,
			ctaUrl,
			ctaUrlInNewTab,
			cancelTitle,
			showCta,
			showCancel,
		} = attributes;

		return (
				<div className={this.props.attributes.className}>
					<RichText
							tagName={'a'}
							className={'btn btn-priary'}
							placeholder={'Text to click for opening the modal'}
							value={openTitle}
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
						<PanelBody title={'Options for opening modal'} initialOpen={false}>
							<ToggleControl
									label={'Button to open modal'}
									value={openButton}
									help={'Button to open the modal (otherwise a regular link).'}
									checked={openButton}
									onChange={() => setAttributes({openButton: !openButton})}
							/>
						</PanelBody>
						<PanelBody title={'Options for inside of modal'}>
							<TextControl
									label={'Modal title'}
									value={modalTitle}
									onChange={(value) => setAttributes({modalTitle: value})}
							/>
							<SelectControl
									label={'Show CTA button'}
									value={showCta}
									onChange={() => setAttributes({showCta: !attributes.showCta})}
									options={[
										{value: true, label: 'Yes'},
										{value: false, label: 'No'},
									]}
							/>
							{showCta &&
							<>
								<TextControl
										label={'Text for call to action button'}
										value={ctaTitle}
										onChange={(value) => setAttributes({ctaTitle: value})}
								/>
								<URLInput
										label={'Call to action url'}
										value={ctaUrl}
										onChange={(value) => setAttributes({ctaUrl: value})}
								/>
								<ToggleControl
										label={'Open URL in new tab'}
										value={ctaUrlInNewTab}
										checked={ctaUrlInNewTab}
										onChange={() => setAttributes({ctaUrlInNewTab: !ctaUrlInNewTab})}
										ctaUrlInNewTab
								/>
							</>
							}
							<SelectControl
									label={'Show cancel button'}
									value={attributes.showCancel}
									onChange={() => setAttributes({showCancel: !attributes.showCancel})}
									options={[
										{value: true, label: 'Yes'},
										{value: false, label: 'No'},
									]}
							/>
							{showCancel &&
							<>
								<TextControl
										label={'Cancel text in modal'}
										value={cancelTitle}
										onChange={(value) => setAttributes({cancelTitle: value})}
								/>
							</>
							}
						</PanelBody>
					</InspectorControls>

				</div>
		);
	}
}
