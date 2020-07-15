import React from 'react';
import {Component, Fragment} from '@wordpress/element';
import {InspectorControls} from '@wordpress/block-editor';

import {TextControl, TextareaControl, PanelBody, ToggleControl} from '@wordpress/components';

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

	const {attributes, setAttributes, changeAlternativeTweet, removeAlternativeTweet, updateAttribute} = this.props;

	// const toAttribute = attributeName => value => {
	//   setAttributes({[attributeName]: value});
	// };

	const alternativeTweets = attributes.alternativeTweets.map(function (value, index) {

	  return (
		<div key={index}>
		  <TextareaControl
			label={'Alternatieve Tweet ' + (index + 1)}
			placeholder={'Typ hier een alternatieve tweet...'}
			value={value}
			onChange={(value) => changeAlternativeTweet(index, value)}
		  />
		  <button onClick={() => removeAlternativeTweet(index)}>verwijder</button>
		</div>
	  );
	});

	return (
	  <Fragment>
		<TextareaControl
		  label={'Standaard Tweet'}
		  placeholder={'Typ hier de tweet...'}
		  value={attributes.defaultTweet}
		  onChange={updateAttribute('defaultTweet')}
		>

		</TextareaControl>
		<InspectorControls>
		  <PanelBody title={'Alternatieve Tweets'}>
			{alternativeTweets}
			<button onClick={this.props.addAlternativeTweet}>voeg tweet toe</button>

			<ToggleControl
			  label={'Willekeurig'}
			  help={'Vink dit aan om elke keer een willekeurige tweet te tonen ipv de standaardtweet.'}
			  value={attributes.alwaysRandom}
			  checked={attributes.alwaysRandom}
			  onChange={updateAttribute('alwaysRandom')}
			/>

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
