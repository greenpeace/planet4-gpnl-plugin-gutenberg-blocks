import React, {Component} from 'react';

import InputField from './InputField';

export default class BetaalGegevens extends Component {

  render() {

    return (
      <div className="card">

        <InputField
          name={'rekeningnummer'}
          value={this.props.rekeningnummer}
          label={'IBAN rekeningnummer'}
          onChange={this.props.handleChange}
          errors={this.props.errors}
        />

        <label htmlFor={'betalingstermijn'}>Betalingstermijn</label>
        <div id={'betalingstermijn'} className="radio-inline-group">
          <input className="form-check-input" type="radio" name="betalingstermijn" id="Maand" value="Maand"
                 onChange={this.props.handleChange} checked={this.props.betalingstermijn === 'Maand'}/>
          <label className="form-check-label" htmlFor="Maand">Maandelijks</label>

          <input className="form-check-input" type="radio" name="betalingstermijn" id="Kwartaal" value="Kwartaal"
                 onChange={this.props.handleChange} checked={this.props.betalingstermijn === 'Kwartaal'}/>
          <label className="form-check-label" htmlFor="Kwartaal">Elke drie maanden</label>

          <input className="form-check-input" type="radio" name="betalingstermijn" id="Semester" value="Semester"
                 onChange={this.props.handleChange} checked={this.props.betalingstermijn === 'Semester'}/>
          <label className="form-check-label" htmlFor="Semester">Elk half jaar</label>

          <input className="form-check-input" type="radio" name="betalingstermijn" id="Jaar" value="Jaar"
                 onChange={this.props.handleChange} checked={this.props.betalingstermijn === 'Jaar'}/>
          <label className="form-check-label" htmlFor="Jaar">Jaarlijks</label>
        </div>
        {this.props.errors.betalingstermijnError && <span className="error-message"> {this.props.errors.betalingstermijnError} </span>}




        <div className="form-group">
          <button className="btn btn-previous"
                  onClick={this.props.prev}>Vorige
          </button>
          <button className="btn btn-next"
                  onClick={this.props.next}>Volgende
          </button>
        </div>
      </div>
    );
  }
}
