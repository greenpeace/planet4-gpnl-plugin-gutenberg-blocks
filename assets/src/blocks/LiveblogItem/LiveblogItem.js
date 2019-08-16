import { Fragment } from "@wordpress/element";
import { React, Component } from 'react';
import { PanelBody, PanelRow, DateTimePicker, ServerSideRender } from '@wordpress/components';
const { RichText, MediaUpload ,MediaUploadCheck, InspectorControls } = wp.editor;
var dateFormat = require('dateformat');

export class LiveblogItem extends Component {

	constructor(props) {
		super(props);
	}

	renderEdit() {

		console.table(this.props);

	return (



		<div className="container">
					<div className="row">
						<div>
							<RichText
								onChange={this.props.onTitleChange}
								value={this.props.title}
								tagName="h3"
								className=""
								placeholder="enter a title"
							/>
							<span>



								        {this.props.datetime ?
											<span>{this.props.datetime} </span> :
											<span>
												{new Date().getDate()}/
												{new Date().getMonth() + 1}/
												{new Date().getFullYear()} -
												{new Date().getHours()}:
												{new Date().getMinutes()}
											</span>
										}

							</span>
						</div>
						<div className="col">
							<Fragment>
								<InspectorControls>
									<PanelBody
										title="Date & time for liveblog item/event"
										icon=""
										initialOpen={ true }
									>
										<PanelRow>
											<DateTimePicker
												currentDate={ this.props.datetime }
												onChange={ ( val ) => this.props.onUpdateDatetime( val ) }
												value={ this.props.datetime }
												is12Hour={ false }
											/>
										</PanelRow>
									</PanelBody>
								</InspectorControls>
							</Fragment>
						</div>
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
