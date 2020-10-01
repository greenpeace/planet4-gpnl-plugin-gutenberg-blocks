import {Component, Fragment} from '@wordpress/element';
import TextareaAutosize from 'react-autosize-textarea';

export class Frontend extends Component {
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

	// Update the text field with a tweet different from the current one.
	getAnotherRandomTweet(e) {
		e.preventDefault();
		const arrayWithoutCurrentTweet = this.allTweets.filter((item) => item !== this.state.textareaValue);
		this.setState({textareaValue: arrayWithoutCurrentTweet[Math.floor(Math.random() * arrayWithoutCurrentTweet.length)]});
	}

	showThankYouMessage() {
		this.setState({showThankYouMessage: true});
	}

	toggleThankYouMessage() {
		this.setState(prevState => ({
			showThankYouMessage: !prevState.showThankYouMessage
		}));
	}


	render() {

		// Encoding the URL for sending the data to Twitter.
		let message = encodeURI(this.state.textareaValue);
		message = message.replace(/#/g, '%23');

		// This regex could be used to target all hashtags and @mentions. Perhaps to give them a blue color in the future.
		// const hashAndMetionRegex = /\s([@#][\w_-]+)/g;

		// WHATSAPP LINK EXAMPLE:
		// https://api.whatsapp.com/send?text=test&via=https://google.com&utm_source=whatsapp

		// FACEBOOK LINK EXAMPLE:
		// https://www.facebook.com/sharer/sharer.php?u=greenpeace.org%2Fnl&quote=this%20is%20a%20quote

		let sendButtonText = 'VERSTUUR';

		let shareURL = () => {
			if (this.props.medium === 'twitter') {
				sendButtonText = 'DEEL OP TWITTER';
				return ('https://twitter.com/intent/tweet?text=' + message + (this.props.url && '&url=' + this.props.url));
			}
			if (this.props.medium === 'facebook') {
				sendButtonText = 'DEEL OP FACEBOOK';
				return ('https://www.facebook.com/sharer/sharer.php?u=' + (this.props.url !== '' ? this.props.url : window.location.href) + '&quote=' + message);
			}
			if (this.props.medium === 'whatsapp') {
				sendButtonText = 'DEEL VIA WHATSAPP';
				return ('https://api.whatsapp.com/send?text=' + message + (this.props.url && '&via=' + this.props.url + '&utm_source=whatsapp'));
			}
		};

		return (
				<Fragment>
					<section>
						{this.state.showThankYouMessage === true ?
								<div className={'thank-you-message'}>
									<button type="button" className="close" aria-label="Close" onClick={() => this.toggleThankYouMessage()}>
										<span aria-hidden="true">&times;</span>
									</button>
									<div
											dangerouslySetInnerHTML={{
												__html: this.props.thanksText
											}}/>
								</div>
								: <>
									<form>
										<TextareaAutosize id="textarea" name="textarea" className="form-control" value={this.state.textareaValue} onChange={this.changeTextareaValue} rows={3}/>
										<div className={'button-row'} style={this.allTweets.length > 1 ? {justifyContent: 'space-between'} : null}>
											{this.allTweets.length > 1 ?
													<button className={'btn btn-change-message'} onClick={this.getAnotherRandomTweet}>ANDER BERICHT</button>
													: null
											}
											<a className={'btn btn-primary btn-send-message ' + this.props.medium} href={shareURL()} target={'_blank'} onClick={this.showThankYouMessage}>
												{sendButtonText}
											</a>
										</div>
									</form>
								</>
						}
					</section>
				</Fragment>
		);
	}
}
