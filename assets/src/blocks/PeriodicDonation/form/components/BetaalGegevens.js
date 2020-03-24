import React, {Component} from 'react';

import InputField from '../../../../components/forms/InputField';
import {isValidIban, isValidNotEmpty} from '../../../../components/forms/Validators';
import RadioGroup from '../../../../components/forms/RadioGroup';
import SelectGroup from '../../../../components/forms/SelectGroup';

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
      if (this.references[reference]['current'] !== null && this.references[reference]['current'].handleIsValid() !== true) {
        isValid = false;
      }
    }

    // Check isValid before moving to the next step.
    if (isValid === true) {
      this.props.handleChange(e);
    }
  };

  render() {

    const {rekeningnummer, betalingstermijn, machtiging, handleChange} = this.props;

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

        <SelectGroup
          ref={this.getOrCreateRef('machtiging')}
          propertyName={'machtiging'}
          label={'Ik betaal'}
          value={machtiging}
          onChange={(e) => handleChange(e, 'boolean')}
          options={{
            1: {value: true, label: 'Middels een machtiging'},
            2: {value: false, label: 'Ik maak het zelf over'}
          }}
        />
        {machtiging &&
        <RadioGroup
          ref={this.getOrCreateRef('betalingstermijn')}
          propertyName={'betalingstermijn'}
          value={betalingstermijn}
          onChange={handleChange}
          options={{
            1: {value: 'Maand', label: 'Maand'},
            2: {value: 'Kwartaal', label: 'Kwartaal'},
            3: {value: 'Semester', label: 'Elk half jaar'},
            4: {value: 'Jaar', label: 'Jaarlijks'},
          }}
          isValid={isValidNotEmpty(betalingstermijn)}
          errorMessage={'Vul alsjeblieft je gewenste betalingstermijn in.'}
        />
        }

        <div>
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