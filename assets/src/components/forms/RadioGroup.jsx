import React, {Component} from 'react';
import RadioOption from './RadioOption';


export default class RadioGroup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: '',
    };

    this.handleIsValid = this.handleIsValid.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
  }

  handleIsValid() {
    if (this.props.isValid === false) {
      this.setState({error: this.props.errorMessage});
      return false;
    } else {
      this.setState({error: ''});
      return true;
    }
  }

  handleOnBlur() {
    // By default validation is done onBlur. If you don't want this use "validateOnBlur={false}"
    if (this.props.validateOnBlur === true || typeof this.props.validateOnBlur === 'undefined') {
      this.handleIsValid();
    }
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
            onBlur={this.handleOnBlur}
          />
        );
      }
    }
    return options;
  }


  render() {

    const {propertyName, label, helpText} = this.props;

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
