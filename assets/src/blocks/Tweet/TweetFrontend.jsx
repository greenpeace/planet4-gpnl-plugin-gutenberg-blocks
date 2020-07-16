import {Component, Fragment} from '@wordpress/element';
import TextareaAutosize from 'react-autosize-textarea';

export class TweetFrontend extends Component {
  constructor(props) {
	super();

	// Array with all possible tweets.
	const allTweets = [];
	allTweets.push(props.defaultTweet);
	for (let tweet of props.alternativeTweets) {
	  allTweets.push(tweet);
	}

	this.allTweets = allTweets;
	this.randomTweet = allTweets[Math.floor(Math.random() * allTweets.length)];

	this.state = {
	  textareaValue: props.alwaysRandom === false ? props.defaultTweet : this.randomTweet,
	  showThankYouMessage: false
	};

	this.changeTextareaValue = this.changeTextareaValue.bind(this);
	this.getAnotherRandomTweet = this.getAnotherRandomTweet.bind(this);
	this.showThankYouMessage = this.showThankYouMessage.bind(this);
  }

  changeTextareaValue(event) {
	this.setState({textareaValue: event.target.value});
  }

  // Update the textfield with a tweet different from the current one.
  getAnotherRandomTweet(e) {
    e.preventDefault();
	const arrayWithoutCurrentTweet = this.allTweets.filter((item) => item !== this.state.textareaValue);
	this.setState({textareaValue: arrayWithoutCurrentTweet[Math.floor(Math.random() * arrayWithoutCurrentTweet.length)]});
  }

  showThankYouMessage() {
	this.setState({showThankYouMessage: true});
  }


  render() {

	// Encoding the URL for sending the data to Twitter.
	const url = encodeURI(this.state.textareaValue);
	url.replace(/#/g, '%23');

	return (
	  <Fragment>
		<section>
		  {this.state.showThankYouMessage === true ?
			<div>
			  {this.props.thanksText}
			</div>
			: <>
			  <form>
				<TextareaAutosize id="tweetTextarea" name="tweetTextarea" className="form-control" value={this.state.textareaValue} onChange={this.changeTextareaValue} rows={3}/>

				<div className={'button-row'}>
				  <a className="btn btn-primary btn-send-tweet" href={'https://twitter.com/intent/tweet?text=' + url} target={'_blank'} onClick={this.showThankYouMessage}/>
				  {this.allTweets.length > 1 ?
				  <button className={'btn btn-change-tweet'} onClick={this.getAnotherRandomTweet}/>
				  : null
				}
				</div>
			  </form>
			</>
		  }
		</section>
	  </Fragment>
	);
  }
}
