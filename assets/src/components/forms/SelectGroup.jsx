import React, {Component} from 'react';
import SelectOption from './SelectOption';

export default class SelectGroup extends Component {
  constructor(props) {
	super(props);

	this.state = {
	  error: '',
	};

	this.handleIsValid = this.handleIsValid.bind(this);
  }

  handleIsValid() {
	if (this.props.isValid === false) {
	  this.setState({error: this.props.errorMessage});
	  return false
	} else {
	  this.setState({error: ''});
	  return true
	}
  }

  handleOnBlur(){
	// By default validation is done onBlur. If you don't want this use "validateOnBlur={false}"
	if (this.props.validateOnBlur === true || typeof this.props.validateOnBlur === 'undefined'){
	  this.handleIsValid()
	}
  }

  renderHelpOrError() {
	if (this.state.error === '' && this.props.helpText) {
	  return <small id={this.props.propertyName + 'Help'} className="form-text text-muted">{this.props.helpText}</small>;
	} else if (this.state.error !== '') {
	  return <span className="error-message">{this.state.error}</span>;
	}
  };

  renderOptions() {
    const options = [];
	for (const key in this.props.options) {
	  if (this.props.options.hasOwnProperty(key)) {
		let option = this.props.options[key];
		options.push(
		  <SelectOption
			key={option.value}
			propertyName={this.props.propertyName}
			propertyValue={this.props.value}
			onChange={this.props.onChange}
			value={option.value}
			label={option.label}
		  />
		)
	  }
	}
	return options;
  }


  render() {

	const {propertyName, label, helpText, errors, onChange, value} = this.props;

	return (

	  <div className="form-group">

		<label htmlFor={propertyName}>{label ? label : propertyName}</label>
		<select id={propertyName}
				name={propertyName}
				className="form-control"
				onChange={onChange}
				value={value}
				onBlur={() => this.handleOnBlur()}
		>
		  {this.renderOptions()}
		</select>
		{this.renderHelpOrError()}
	  </div>
	);
  }
}
