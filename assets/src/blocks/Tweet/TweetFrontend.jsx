import {Component, Fragment} from '@wordpress/element';

export class TweetFrontend extends Component {
  constructor(props) {
	super();
	this.state = {
	  textareaValue: props.defaultTweet
	};

	this.changeTextareaValue = this.changeTextareaValue.bind(this);
  }

  changeTextareaValue(event) {
	this.setState({textareaValue: event.target.value});
  }

  render() {

	return (
	  <Fragment>
		<section>
		  <h2>Verstuur een Tweet</h2>
		  <form>
			<textarea id="tweetTextarea" name="tweetTextarea" className="form-control" value={this.state.textareaValue} onChange={this.changeTextareaValue}/>
			<a className="btn btn-primary" href={'https://twitter.com/intent/tweet?text=' + this.state.textareaValue}>Tweet</a>
		  </form>
		</section>
	  </Fragment>
	);
  }
}
