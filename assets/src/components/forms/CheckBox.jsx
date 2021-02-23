import React, {Component} from 'react';


export default class CheckBox extends Component {
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

  renderHelpOrError() {
    if (this.state.error === '' && this.props.helpText) {
      return <small id={this.props.propertyName + 'Help'}
        className="form-text text-muted">{this.props.helpText}</small>;
    } else if (this.state.error !== '') {
      return <span className="error-message">{this.state.error}</span>;
    }
  }

  render() {

    const {propertyName, label, placeholder, value, hidden, onChange} = this.props;


    return (
      <div className="form-group">
        <div className="">
          <input
            type="checkbox"
            // className="form-check-input"
            id={propertyName}
            aria-describedby={propertyName + 'Help'}
            placeholder={placeholder != null ? placeholder : null}
            name={propertyName}
            onChange={onChange}
            value={value}
            onBlur={() => this.handleOnBlur()}
            hidden={hidden}
          />
          {(() => {
            if (hidden == null || hidden === false) {
              return (<label htmlFor={propertyName}>{label ? label : propertyName}</label>);
            }
          })()}
        </div>
        {this.renderHelpOrError()}
      </div>
    );
  }
}
