import {Component, Fragment} from '@wordpress/element';

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
	  textareaValue: props.alwaysRandom === false ? props.defaultTweet : this.randomTweet
	};

	this.changeTextareaValue = this.changeTextareaValue.bind(this);
	this.getAnotherRandomTweet = this.getAnotherRandomTweet.bind(this);
  }

  changeTextareaValue(event) {
	this.setState({textareaValue: event.target.value});
  }

  // Update the textfield with a tweet different from the current one.
  getAnotherRandomTweet() {
	const arrayWithoutCurrentTweet = this.allTweets.filter((item) => item !== this.state.textareaValue);
	this.setState({textareaValue: arrayWithoutCurrentTweet[Math.floor(Math.random() * arrayWithoutCurrentTweet.length)]});
  }


  render() {

	// Encoding the URL for sending the data to Twitter.
	const url = encodeURI(this.state.textareaValue);
	url.replace(/#/g, '%23');

	return (
	  <Fragment>
		<section>
		  <h2>Verstuur een Tweet</h2>
		  <form>
			<textarea id="tweetTextarea" name="tweetTextarea" className="form-control" value={this.state.textareaValue} onChange={this.changeTextareaValue}/>
			<a className="btn btn-primary" href={'https://twitter.com/intent/tweet?text=' + url} target={'_blank'}>Tweet</a>
		  </form>
		  { this.allTweets.length > 1 ?
			<button onClick={this.getAnotherRandomTweet}> andere tweet</button>
			: null
		  }
		</section>
	  </Fragment>
	);
  }
}
