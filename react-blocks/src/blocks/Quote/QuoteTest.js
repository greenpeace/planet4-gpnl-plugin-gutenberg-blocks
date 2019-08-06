import React, { Component } from 'react';

import { ServerSideRender } from '@wordpress/components';
const { PlainText } = wp.editor;


export class QuoteTest extends Component {

	constructor(props) {
		super(props)
	}

	renderEdit() {
		return (
			<div>
				<p>
					<em>This bit is show when editing</em>
				</p>
				<PlainText
					onChange={this.props.onTitleChange}
					value={this.props.title}
					placeholder="enter a quote"
				/>
			</div>
		);
	}

	renderView() {
		return (
			<em>This bit is shown in the editor when you are not editing the block (or selecting it in reality)</em>
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
					<ServerSideRender
						block={'planet4-gpnl-blocks/quote'}
						attributes={{
							title: this.props.title,
						}}
					>
					</ServerSideRender>
			</div>
		)
	}
}

