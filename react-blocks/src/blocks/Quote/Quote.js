import {React, Component } from 'react';

import { ServerSideRender } from '@wordpress/components';
const { RichText, MediaUpload , MediaUploadCheck } = wp.editor;

export class Quote extends Component {

	constructor(props) {
		super(props);
	}

	renderEdit() {

		return (
			<div>
				<p>
					<em>This bit is show when editing</em>
				</p>

				<MediaUploadCheck>
					<MediaUpload
						type="image"
						onSelect={ this.props.onSelectImage }
						value={ this.props.imageId }
						render={({ open }) => (
							<button onClick={open}>
								Add image (optional)
							</button>
						)}
					/>
				</MediaUploadCheck>

				<RichText
					onChange={this.props.onQuoteChange}
					value={this.props.quote}
					tagName="p"
					className="quote__text"
					placeholder="enter a quote"
				/>

				<RichText
					onChange={this.props.onQuoteeChange}
					value={this.props.quotee}
					tagName="p"
					className="quote__author"
					placeholder="enter an author"
				/>


			</div>
		);
	}

	renderView() {
		return (
			<ServerSideRender
				block={'planet4-gpnl-blocks/quote'}
				attributes={{
					quote: this.props.quote,
					quotee: this.props.quotee,
					imageUrl: this.props.imageUrl,
					imageId: this.props.imageId,
				}}
			>
			</ServerSideRender>
		);
	}

	render() {
		return (
			<div>
				{
					this.props.isSelected
						? this.renderEdit()
						: this.renderView()
				}
			</div>
		)
	}
}
