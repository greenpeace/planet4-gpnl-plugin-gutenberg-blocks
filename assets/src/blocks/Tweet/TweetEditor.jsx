import {Component, Fragment} from '@wordpress/element';
import {InspectorControls} from '@wordpress/block-editor';
import {TextareaControl, PanelBody, ToggleControl} from '@wordpress/components';
import {TweetFrontend} from './TweetFrontend';
import {URLInput} from '@wordpress/block-editor';


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
		  <button onClick={() => removeAlternativeTweet(index)}>verwijder alternatieve tweet</button>
		  <hr/>
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
		/>

		<InspectorControls>
		  <PanelBody title={'Opties'}>
			<TextareaControl
			  label={'Bedanktekst'}
			  placeholder={''}
			  value={attributes.thanksText}
			  onChange={updateAttribute('thanksText')}
			/>
			<label className={'components-base-control__label'}><strong>URL</strong></label>
			<URLInput
			  value={attributes.url}
			  onChange={updateAttribute('url')}
			/>
			<p className={'components-base-control__help'}>
			  <em>
				Voer een optionele URL in als je deze aan de tweet wil koppelen.
			  </em>
			</p>
		  </PanelBody>

		  <PanelBody title={'Alternatieve Tweets'}>
			{alternativeTweets}
			<button onClick={this.props.addAlternativeTweet} className={'add'}>voeg alternatieve tweet toe</button>
			<hr/>

			<ToggleControl
			  label={'Toon willekeurig'}
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
