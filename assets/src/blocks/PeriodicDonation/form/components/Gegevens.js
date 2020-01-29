import React, {Component} from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import InputField from '../../../../components/forms/InputField';
import RadioGroup from '../../../../components/forms/RadioGroup';
import SelectGroup from '../../../../components/forms/SelectGroup';
import {isValidString, isValidNotEmpty} from '../../../../components/forms/Validators';

export default class Gegevens extends Component {
  constructor(props) {
    super(props);

    this.references = {};

    // Extra state for date error because we use an external component.
    this.state = {
      geboortedatumError: ''
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
    if (isValidNotEmpty(this.props.geboortedatum) === false){
      this.setState({geboortedatumError: 'Vul alsjeblieft je geboortedatum in.'})
      return false;
    } else {
      this.setState({geboortedatumError: ''});
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
    const {voornamen, initialen, achternaam, geslacht, tussenvoegsel, geboortedatum, burgelijkestaat, handleChange, handleDateChange, handleFirstNamesChange, errors} = {...this.props};

    return (
      <div className="card">

        <RadioGroup
          ref={this.getOrCreateRef('geslacht')}
          propertyName={'geslacht'}
          value={geslacht}
          onChange={handleChange}
          errors={errors}
          options={{1: {value: 'V', label: 'Vrouw'}, 2: {value: 'M', label: 'Man'}, 3: {value: 'O', label: 'Anders'}}}
          isValid={isValidNotEmpty(geslacht)}
          errorMessage={'Vul alsjeblieft je geslacht in.'}
        />

        <InputField
          ref={this.getOrCreateRef('voornamen')}
          propertyName={'voornamen'}
          key={'voornamen'}
          value={voornamen}
          onChange={handleFirstNamesChange}
          errors={errors}
          isValid={isValidString(voornamen)}
          errorMessage={'Vul alsjeblieft je voornaam / voornamen in.'}
        />

        <InputField
          propertyName={'initialen'}
          value={initialen}
          onChange={handleChange}
          hidden={true}
          errors={errors}
        />

        <div className={'form-row'}>
          <div className={'col-4'}>
            <InputField
              propertyName={'tussenvoegsel'}
              value={tussenvoegsel}
              onChange={handleChange}
              errors={errors}
            />
          </div>
          <div className={'col-8'}>
            <InputField
              ref={this.getOrCreateRef('achternaam')}
              propertyName={'achternaam'}
              value={achternaam}
              onChange={handleChange}
              isValid={isValidString(achternaam)}
              errorMessage={'Vul alsjeblieft je achternaam in.'}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="geboortedatum">Geboortedatum</label>
          <DatePicker
            selected={geboortedatum}
            onChange={handleDateChange.bind(this, 'geboortedatum')}
            className={'form-control'}
            dateFormat="dd-MM-yyyy"
            placeholderText="dd-mm-yyyy"
            name="geboortedatum"
            onBlur={() => this.handleBirthDateValidation()}
          />
          {this.state.geboortedatumError && <span className="error-message"> {this.state.geboortedatumError} </span>}
        </div>

        <SelectGroup
          ref={this.getOrCreateRef('burgelijkestaat')}
          propertyName={'burgelijkestaat'}
          label={'Burgelijke staat'}
          value={burgelijkestaat}
          onChange={handleChange}
          errors={errors}
          options={{1: {value: 0, label: 'Selecteer je burgelijke staat'}, 2: {value: 'ongehuwd', label: 'Ongehuwd'}, 3: {value: 'gehuwd', label: 'Gehuwd'}, 4: {value: 'partner', label: 'Als partner geregistreerd'}}}
          isValid={isValidString(burgelijkestaat)}
          errorMessage={'Vul alsjeblieft je burgelijke staat in.'}
        />

        <div className="form-group">
          <button
            className="btn btn-previous"
            onClick={handleChange}
            name={'step'}
            value={'schenking'}
          >
            Vorige
          </button>
          <button
            className="btn btn-next"
            onClick={this.handleNextClick}
            name={'step'}
            value={ burgelijkestaat === 'gehuwd' || burgelijkestaat === 'partner' ? 'partnergegevens' : 'adresgegevens'}
          >
            Volgende
          </button>
        </div>
      </div>
    );
  }
}
