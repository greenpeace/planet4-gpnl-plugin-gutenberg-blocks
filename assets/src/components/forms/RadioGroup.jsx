import React, {Component} from 'react';
import RadioOption from './RadioOption';


export default class RadioGroup extends Component {
  constructor(props) {
	super(props);

	this.state = {
	  error: '',
	};

	this.validateOnBlur = this.validateOnBlur.bind(this);
  }

  validateOnBlur() {
	this.props.isValidOnBlur === false ? this.setState({error: this.props.errorMessage}) : this.setState({error: ''});
  }

  renderOptions() {
    const options = [];
	for (const key in this.props.options) {
	  if (this.props.options.hasOwnProperty(key)) {
		let option = this.props.options[key];
		options.push(
		  <RadioOption
			key={option.value}
			propertyName={this.props.propertyName}
			propertyValue={this.props.value}
			onChange={this.props.onChange}
			optionValue={option.value}
			label={option.label}
		  />
		)
	  }
	}
	return options;
  }


  render() {

	const {propertyName, label, helpText, errors, options, onChange} = this.props;

	return (

	  <div className="form-group">

		<label htmlFor={'propertyName'}>{label ? label : propertyName}</label>
		<div id={propertyName} className="radio-inline-group">
		  {this.renderOptions()}
		</div>

		{helpText &&
		<small id={name + 'Help'} className="form-text text-muted">{helpText}</small>
		}


		{this.state.error &&
		<span className="error-message">  {this.state.error} </span>
		}
	  </div>
	);
  }
}
