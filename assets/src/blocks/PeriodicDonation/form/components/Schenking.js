import React, {Component} from 'react';
import InputField from '../../../../components/forms/InputField';
import {isValidNumber} from '../../../../components/forms/Validators';

export default class Schenking extends Component {
  constructor(props) {
    super(props);

    // Creating a reference so the field's validate method can be called.
    this.inputField = React.createRef();
  }

  handleNextClick = (e) => {
    // Checking with the reference if the input is valid.
    if (this.inputField.current.handleIsValid() === true) {
      this.props.handleChange(e)
    }
  };

  render() {
    const { bedrag, jaar, handleChange } = {...this.props};

    const currentYear = new Date().getFullYear();

    return (
      <div className="card">

        <InputField
          ref={this.inputField}
          propertyName={'bedrag'}
          label={'Bedrag per jaar'}
          value={bedrag}
          onChange={handleChange}
          errors={this.props.errors}
          prepend={'€'}
          helpText={'Minimaal €50.-'}
          isValid={isValidNumber(bedrag, 50)}
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

        <div>
          <button
            className="btn btn-next"
            onClick={this.handleNextClick}
            name={'step'}
            value={'gegevens'}
          >
            Volgende
          </button>
        </div>
      </div>
    );
  }
}
