import React, {Component} from 'react';

import InputField from '../../../../components/forms/InputField';
import {isValidIban, isValidNotEmpty} from '../../../../components/forms/Validators';
import RadioGroup from '../../../../components/forms/RadioGroup';

export default class BetaalGegevens extends Component {
  constructor(props) {
    super(props);

    this.references = {};
  }

  // Creating a map of references.
  getOrCreateRef(reference) {
    if (!this.references.hasOwnProperty(reference)) {
      this.references[reference] = React.createRef();
    }
    return this.references[reference];
  }

  handleNextClick = (e) => {

    let isValid = true;
    // Checking with the references if their inputs are valid.
    for (const reference in this.references) {
      if (this.references[reference]['current'].handleIsValid() !== true){
        isValid = false;
      }
    }

    // Check isValid before moving to the next step.
    if (isValid === true) {
      this.props.handleChange(e)
    }
  };

  render() {

    const {rekeningnummer, betalingstermijn, handleChange} = this.props;


    return (
      <div className="card">

        <InputField
          ref={this.getOrCreateRef('rekeningnummer')}
          propertyName={'rekeningnummer'}
          value={rekeningnummer}
          label={'IBAN rekeningnummer'}
          onChange={handleChange}
          isValid={isValidIban(rekeningnummer)}
          errorMessage={'Vul alsjeblieft een geldig IBAN rekeningnummer is.'}
        />

        <RadioGroup
          ref={this.getOrCreateRef('betalingstermijn')}
          propertyName={'betalingstermijn'}
          value={betalingstermijn}
          onChange={handleChange}
          options={{
            1: {value: 'maand', label: 'Maand'},
            2: {value: 'kwartaal', label: 'Kwartaal'},
            3: {value: 'semester', label: 'Elk half jaar'},
            4: {value: 'jaar', label: 'Jaarlijks'},
          }}
          isValid={isValidNotEmpty(betalingstermijn)}
          errorMessage={'Vul alsjeblieft je gewenste betalingstermijn in.'}
        />

        {/*<label htmlFor={'betalingstermijn'}>Betalingstermijn</label>*/}
        {/*<div id={'betalingstermijn'} className="radio-inline-group">*/}
        {/*  <input className="form-check-input" type="radio" name="betalingstermijn" id="Maand" value="Maand"*/}
        {/*         onChange={handleChange} checked={betalingstermijn === 'Maand'}/>*/}
        {/*  <label className="form-check-label" htmlFor="Maand">Maandelijks</label>*/}

        {/*  <input className="form-check-input" type="radio" name="betalingstermijn" id="Kwartaal" value="Kwartaal"*/}
        {/*         onChange={handleChange} checked={betalingstermijn === 'Kwartaal'}/>*/}
        {/*  <label className="form-check-label" htmlFor="Kwartaal">Elke drie maanden</label>*/}

        {/*  <input className="form-check-input" type="radio" name="betalingstermijn" id="Semester" value="Semester"*/}
        {/*         onChange={handleChange} checked={betalingstermijn === 'Semester'}/>*/}
        {/*  <label className="form-check-label" htmlFor="Semester">Elk half jaar</label>*/}

        {/*  <input className="form-check-input" type="radio" name="betalingstermijn" id="Jaar" value="Jaar"*/}
        {/*         onChange={handleChange} checked={betalingstermijn === 'Jaar'}/>*/}
        {/*  <label className="form-check-label" htmlFor="Jaar">Jaarlijks</label>*/}
        {/*</div>*/}

        <div className="form-group">
          <button
            className="btn btn-previous"
            onClick={handleChange}
            name={'step'}
            value={'adresgegevens'}
          >
            Vorige
          </button>
          <button
            className="btn btn-next"
            onClick={this.handleNextClick}
            name={'step'}
            value={'controleer'}
          >
            Volgende
          </button>
        </div>
      </div>
    );
  }
}
