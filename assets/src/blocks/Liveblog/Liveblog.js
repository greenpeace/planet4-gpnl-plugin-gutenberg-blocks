import { Fragment } from "@wordpress/element";
import { React, Component } from 'react';
import { PanelBody, PanelRow, DateTimePicker, ServerSideRender } from '@wordpress/components';
const { RichText, MediaUpload ,MediaUploadCheck, InspectorControls, InnerBlocks } = wp.editor;

export class Liveblog extends Component {

	constructor(props) {
		super(props);
	}

	renderEdit() {

		console.table(this.props);

	return (



		<div className="container">
					<div className="row">


						<p>test</p>



						<InnerBlocks />



					</div>
				</div>
		);
	}

	renderView() {
		return (
			<ServerSideRender
				block={'planet4-gpnl-blocks/liveblogitem'}
				attributes={{
					title: this.props.title,
					datetime: this.props.datetime,
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
