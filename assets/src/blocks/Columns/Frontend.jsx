import {Component, Fragment} from '@wordpress/element';

export class Frontend extends Component {
  constructor() {
	super();

	this.state = {
	};
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

    console.log(this.props.attributes);

	return (
	  <Fragment>
		<section>
		  frontend
		</section>
	  </Fragment>
	);
  }
}
