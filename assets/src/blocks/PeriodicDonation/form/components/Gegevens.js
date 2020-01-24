import React, {Component} from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import InputField from '../../../../components/forms/InputField';
import {isValidString, isValidNotEmpty, isValidReactDatePicker} from '../../../../components/forms/Validators';
import RadioGroup from '../../../../components/forms/RadioGroup';
import SelectGroup from '../../../../components/forms/SelectGroup';

export default class Gegevens extends Component {
  constructor(props) {
    super(props);

    this.state = {
      geboortedatumError: ''
    };

    this.handleBirthDateValidation = this.handleBirthDateValidation.bind(this);
  }


  handleBirthDateValidation() {
    isValidNotEmpty(this.props.geboortedatum) === false ? this.setState({geboortedatumError: 'Vul alsjeblieft je geboortedatum in.'}) : this.setState({geboortedatumError: ''});
  };


  render() {

    const {voornamen, initialen, achternaam, geslacht, tussenvoegsel, geboortedatum, burgelijkestaat, handleChange, handleDateChange, handleFirstNamesChange, errors, prev, next} = {...this.props};


    return (
      <div className="card">

        <RadioGroup
          propertyName={'geslacht'}
          value={geslacht}
          onChange={handleChange}
          errors={errors}
          options={{1: {value: 'V', label: 'Vrouw'}, 2: {value: 'M', label: 'Man'}, 3: {value: 'O', label: 'Anders'}}}
        />

        <InputField
          propertyName={'voornamen'}
          value={voornamen}
          onChange={handleFirstNamesChange}
          errors={errors}
          isValidOnBlur={isValidString(voornamen)}
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
              propertyName={'achternaam'}
              value={achternaam}
              onChange={handleChange}
              isValidOnBlur={isValidString(achternaam)}
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
          propertyName={'burgelijkestaat'}
          label={'Burgelijke staat'}
          value={burgelijkestaat}
          onChange={handleChange}
          errors={errors}
          options={{1: {value: 0, label: 'Selecteer je burgelijke staat'}, 2: {value: 'Ongehuwd', label: 'Ongehuwd'}, 3: {value: 'Gehuwd', label: 'Gehuwd'}, 4: {value: 'Nvt', label: 'N.v.t.'}}}
          isValidOnBlur={isValidString(burgelijkestaat)}
          errorMessage={'Vul alsjeblieft je burgelijke staat in.'}
        />

        <div className="form-group">
          <button className="btn btn-previous"
                  onClick={prev}>Vorige
          </button>
          <button className="btn btn-next"
                  onClick={next}>Volgende
          </button>
        </div>
      </div>
    );
  }
}
