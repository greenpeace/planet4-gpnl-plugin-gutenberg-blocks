import React, {Component} from 'react';
import InputField from '../../../../components/forms/InputField';
import {isValidNumber} from '../../../../components/forms/Validators';

export default class Schenking extends Component {

  render() {
    const { bedrag, jaar, handleChange, next } = {...this.props};

    const currentYear = new Date().getFullYear();

    return (
      <div className="card">

        <InputField
          propertyName={'bedrag'}
          label={'Bedrag per jaar'}
          value={bedrag}
          onChange={handleChange}
          errors={this.props.errors}
          prepend={'€'}
          helpText={'Minimaal €50.-'}
          isValidOnBlur={isValidNumber(bedrag, 50)}
          errorMessage={'Vul een bedrag in van minimaal €50.-'}
        />


        <div className="form-group">
          <label>Ingaande in</label>
          <select className={'form-control'} id="jaar" name="jaar" value={jaar}
                  onChange={handleChange}>
            <option value={currentYear}>{currentYear}</option>
            <option value={currentYear + 1}>{currentYear + 1}</option>
            <option value={currentYear + 2}>{currentYear + 2}</option>
          </select>
        </div>

        <div className="form-group">
          <button className="btn btn-next"
                  onClick={next}>Volgende
          </button>
        </div>
      </div>
    );
  }
}
