import React, {Component} from 'react';
import RadioOption from './RadioOption';
import SelectOption from './SelectOption';


export default class SelectGroup extends Component {
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
				onBlur={() => this.validateOnBlur()}
		>
		  {this.renderOptions()}
		</select>

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
