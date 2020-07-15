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

	this.state = {
	  textareaValue: props.alwaysRandom === false ? props.defaultTweet : allTweets[Math.floor(Math.random()*allTweets.length)]
	};

	this.changeTextareaValue = this.changeTextareaValue.bind(this);
  }

  changeTextareaValue(event) {
	this.setState({textareaValue: event.target.value});
  }

  render() {

    // Encoding the URL for sending the data to Twitter.
	let url = encodeURI(this.state.textareaValue);
	url = url.replace(/#/g, '%23');

	return (
	  <Fragment>
		<section>
		  <h2>Verstuur een Tweet</h2>
		  <form>
			<textarea id="tweetTextarea" name="tweetTextarea" className="form-control" value={this.state.textareaValue} onChange={this.changeTextareaValue}/>
			<a className="btn btn-primary" href={'https://twitter.com/intent/tweet?text='+url} target={'_blank'}>Tweet</a>
		  </form>
		</section>
	  </Fragment>
	);
  }
}
