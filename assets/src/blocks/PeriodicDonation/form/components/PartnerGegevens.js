import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import InputField from '../../../../components/forms/InputField';
import {isValidNotEmpty, isValidString} from '../../../../components/forms/Validators';

export default class PartnerGegevens extends Component {
  constructor(props) {
    super(props);

    this.references = {};

    // Extra state for date error because we use an external component.
    this.state = {
      geboortedatumPartner: ''
    };

    this.handleBirthDateValidation = this.handleBirthDateValidation.bind(this);
  }

  // Creating a map of references.
  getOrCreateRef(reference) {
    if (!this.references.hasOwnProperty(reference)) {
      this.references[reference] = React.createRef();
    }
    return this.references[reference];
  }

  // Extra validation which is not inside the component because an external component is used.
  handleBirthDateValidation() {
    if (isValidNotEmpty(this.props.geboortedatumPartner) === false){
      this.setState({geboortedatumPartnerError: 'Vul alsjeblieft de geboortedatum van je partner in.'});
      return false;
    } else {
      this.setState({geboortedatumPartnerError: ''});
      return true;
    }
  };


  handleNextClick = (e) => {

    let isValid = true;

    // Checking with the references if their inputs are valid.
    for (const reference in this.references) {
      if (this.references[reference]['current'].handleIsValid() !== true){
        isValid = false;
      }
    }

    // Check date (external component) and isValid before moving to the next step.
    if (this.handleBirthDateValidation() && isValid === true) {
      this.props.handleChange(e)
    }
  };


  render() {

    const {voornamenPartner, achternaamPartner, geboortedatumPartner, handleChange, handleDateChange} = {...this.props};


    return (
      <div className="card">

        <InputField
          ref={this.getOrCreateRef('voornamenPartner')}
          name={'voornamenPartner'}
          propertyName={'voornamenPartner'}
          value={voornamenPartner}
          label={'voornamen van je partner'}
          onChange={handleChange}
          isValid={isValidString(voornamenPartner)}
          errorMessage={'Vul alsjeblieft de voornaam / voornamen van je partner in.'}
        />

        <InputField
          ref={this.getOrCreateRef('achternaamPartner')}
          propertyName={'achternaamPartner'}
          value={achternaamPartner}
          label={'achternaam van je partner'}
          onChange={handleChange}
          isValid={isValidString(achternaamPartner)}
          errorMessage={'Vul alsjeblieft de achternaam van je partner in.'}
        />

        <div className="form-group">
          <label htmlFor="geboortedatum">Geboortedatum van je partner</label>
          <DatePicker
            selected={geboortedatumPartner}
            onChange={handleDateChange.bind(this, 'geboortedatumPartner')}
            className={'form-control'}
            dateFormat="dd-MM-yyyy"
            placeholderText="dd-mm-yyyy"
            name="geboortedatumPartner"
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            onBlur={() => this.handleBirthDateValidation()}
          />
          {this.state.geboortedatumPartnerError && <span className="error-message"> {this.state.geboortedatumPartnerError} </span>}
        </div>

        <div>
          <button
            className="btn btn-previous"
            onClick={handleChange}
            name={'step'}
            value={'gegevens'}
          >
            Vorige
          </button>
          <button
            className="btn btn-next"
            onClick={this.handleNextClick}
            name={'step'}
            value={'adresgegevens'}
          >
            Volgende
          </button>
        </div>
      </div>
    );
  }
}
