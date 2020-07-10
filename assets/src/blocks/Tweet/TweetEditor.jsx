import React from 'react';
import {Component, Fragment} from '@wordpress/element';
import {InspectorControls} from '@wordpress/block-editor';

import {TextControl, TextareaControl, PanelBody} from '@wordpress/components';

import {TweetFrontend} from './TweetFrontend';

export class TweetEditor extends Component {
  constructor(props) {
	super(props);
	this.handleErrors = this.handleErrors.bind(this);
	this.state = {};
  }

  handleErrors(errors) {
	this.setState(errors);
  }

  renderEdit() {
	const {__} = wp.i18n;

	const {attributes, setAttributes} = this.props;

	const toAttribute = attributeName => value => {
	  setAttributes({[attributeName]: value});
	};

	return (
	  <Fragment>
		<TextareaControl
		  label={'Standaard Tweet'}
		  placeholder={'Typ hier de tweet...'}
		  value={attributes.defaultTweet}
		  onChange={toAttribute('defaultTweet')}
		>

		</TextareaControl>
		<InspectorControls>
		  <PanelBody title={'Alternatieve Tweets'}>
			<TextControl
			  label={'Tweet'}
			  placeholder={'Typ hier de tweet...'}
			/>
			{/* TODO: alternatieve Tweets met +1 add/remove mogelijkheid. */}

			<div className="sidebar-blocks-help">
			  <ul>
				<li>
				  Hier kan extra uitleg komen.
				</li>
			  </ul>
			</div>
		  </PanelBody>
		</InspectorControls>
	  </Fragment>
	);
  }

  renderView() {
	const {__} = wp.i18n;
	const {attributes} = this.props;

	return <Fragment>
	  <TweetFrontend {...attributes} handleErrors={this.handleErrors}/>
	</Fragment>;
  }

  render() {
	return (
	  <Fragment>
		{
		  this.props.isSelected
			? this.renderEdit()
			: this.renderView()
		}
	  </Fragment>
	);
  }
}
