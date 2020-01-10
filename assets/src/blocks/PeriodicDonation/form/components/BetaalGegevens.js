import React, {Component} from 'react';

import InputField from './InputField';

export default class BetaalGegevens extends Component {

  render() {

    return (
      <div className="form-card">

        <InputField
          name={'rekeningnummer'}
          value={this.props.rekeningnummer}
          label={'IBAN rekeningnummer'}
          onChange={this.props.handleChange}
        />

        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="betalingstermijn" id="Maand" value="Maand"
                 onChange={this.props.handleChange} checked={this.props.betalingstermijn === 'Maand'}/>
          <label className="form-check-label" htmlFor="Maand">Maand</label>
        </div>

        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="betalingstermijn" id="Kwartaal" value="Kwartaal"
                 onChange={this.props.handleChange} checked={this.props.betalingstermijn === 'Kwartaal'}/>
          <label className="form-check-label" htmlFor="Kwartaal">Elke drie maanden</label>
        </div>

        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="betalingstermijn" id="Semester" value="Semester"
                 onChange={this.props.handleChange} checked={this.props.betalingstermijn === 'Semester'}/>
          <label className="form-check-label" htmlFor="Semester">Elk half jaar</label>
        </div>

        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="betalingstermijn" id="Jaar" value="Jaar"
                 onChange={this.props.handleChange} checked={this.props.betalingstermijn === 'Jaar'}/>
          <label className="form-check-label" htmlFor="Jaar">Jaarlijks</label>
        </div>



        <div className="form-group">
          <button className="btn btn-danger"
                  onClick={this.props.prev}>Vorige
          </button>
          <button className="btn btn-success"
                  onClick={this.props.next}>Volgende
          </button>
        </div>
      </div>
    );
  }
}
