import React, {Component} from 'react';


export default class InputField extends Component {
  constructor(props) {
	super(props);

	this.state = {
	  error: '',
	};

	this.validateOnBlur = this.validateOnBlur.bind(this);
  }

  validateOnBlur() {
    this.props.isValidOnBlur === false ? this.setState({error: this.props.errorMessage }) : this.setState({error: ''}) ;
  }

  renderHelpOrError() {
	if (this.state.error === '' && this.props.helpText) {
	  return <small id={this.props.propertyName + 'Help'} className="form-text text-muted">{this.props.helpText}</small>;
	} else if (this.state.error !== '') {
	  return <span className="error-message">{this.state.error}</span>;
	}
  };

  render() {

	const {propertyName, prepend, label, placeholder, value, hidden, onChange} = this.props;


	return (
	  <div className="form-group">

		{(() => {
		  if (hidden == null || hidden === false) {
			return (<label htmlFor={propertyName}>{label ? label : propertyName}</label>);
		  }
		})()}

		<div className="input-group">
		  {prepend &&
		  <div className="input-group-prepend">
			<span className="input-group-text" id={'addon' + prepend}>{prepend}</span>
		  </div>
		  }

		  <input
			type="text"
			className="form-control"
			id={propertyName}
			aria-describedby={propertyName + 'Help'}
			placeholder={placeholder != null ? placeholder : null}
			name={propertyName}
			onChange={onChange}
			value={value}
			onBlur={() => this.validateOnBlur()}
			hidden={hidden}
		  />

		</div>
		{this.renderHelpOrError()}
	  </div>
	);
  }
}
