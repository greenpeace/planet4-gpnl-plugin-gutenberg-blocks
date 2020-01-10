import React, {Component} from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import InputField from './InputField';

export default class Gegevens extends Component {

  render() {

    return (
      <div className="form-card">

        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="geslacht" id="V" value="V"
                 onChange={this.props.handleChange} checked={this.props.geslacht === 'V'}/>
          <label className="form-check-label" htmlFor="V">Vrouw</label>
        </div>

        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="geslacht" id="M" value="M"
                 onChange={this.props.handleChange} checked={this.props.geslacht === 'M'}/>
          <label className="form-check-label" htmlFor="M">Man</label>
        </div>

        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="geslacht" id="O" value="O"
                 onChange={this.props.handleChange} checked={this.props.geslacht === 'O'}/>
          <label className="form-check-label" htmlFor="O">Anders</label>
        </div>

        <InputField
          name={'initialen'}
          value={this.props.initialen}
          onChange={this.props.handleChange}
        />

        <InputField
          name={'voornamen'}
          value={this.props.voornamen}
          onChange={this.props.handleChange}
        />

        <InputField
          name={'tussenvoegsel'}
          value={this.props.tussenvoegsel}
          onChange={this.props.handleChange}
        />

        <InputField
          name={'achternaam'}
          value={this.props.achternaam}
          onChange={this.props.handleChange}
        />

        <div className="form-group">
          <label htmlFor="geboortedatum">Geboortedatum</label>
          <DatePicker
            selected={this.props.geboortedatum}
            onChange={this.props.handleDateChange.bind(this, 'geboortedatum')}
            className={'form-control'}
            dateFormat="dd-MM-yyyy"
            placeholderText="dd-mm-yyyy"
            name="geboortedatum"
          />
        </div>

        <InputField
          name={'geboorteplaats'}
          value={this.props.geboorteplaats}
          onChange={this.props.handleChange}
        />

        <div className="form-group">
          <label>Burgelijke staat</label>
          <select className={'form-control'} id="burgelijkestaat" name="burgelijkestaat"
                  value={this.props.burgelijkestaat} onChange={this.props.handleChange}>
            <option value="0">Selecteer je burgelijke staat</option>
            <option value="Ongehuwd">Ongehuwd</option>
            <option value="Gehuwd">Gehuwd</option>
            <option value="Partner">Als partner geregistreerd</option>
            <option value="Nvt">N.v.t.</option>
          </select>
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
