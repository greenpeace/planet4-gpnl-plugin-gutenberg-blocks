import React, {Component} from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import InputField from './InputField';

export default class Gegevens extends Component {

  render() {


    return (
      <div className="card">

        <label htmlFor={'geslacht'}>Geslacht</label>
        <div id={'geslacht'} className="radio-inline-group">
          <input className="form-check-input" type="radio" name="geslacht" id="V" value="V"
                 onChange={this.props.handleChange} checked={this.props.geslacht === 'V'}/>
          <label htmlFor="V">Vrouw</label>

          <input className="form-check-input" type="radio" name="geslacht" id="M" value="M"
                 onChange={this.props.handleChange} checked={this.props.geslacht === 'M'}/>
          <label className="form-check-label radio-inline" htmlFor="M">Man</label>

          <input className="form-check-input" type="radio" name="geslacht" id="O" value="O"
                 onChange={this.props.handleChange} checked={this.props.geslacht === 'O'}/>
          <label className="form-check-label radio-inline" htmlFor="O">Anders</label>

        </div>

        {this.props.errors.geslachtError && <span className="error-message"> {this.props.errors.geslachtError} </span>}


        <InputField
          name={'initialen'}
          value={this.props.initialen}
          onChange={this.props.handleChange}
          hidden={true}
          errors={this.props.errors}
        />

        <InputField
          name={'voornamen'}
          value={this.props.voornamen}
          onChange={this.props.handleFirstNamesChange}
          errors={this.props.errors}
        />

        <div className={'form-row'}>
          <div className={'col-4'}>
            <InputField
              name={'tussenvoegsel'}
              value={this.props.tussenvoegsel}
              onChange={this.props.handleChange}
              errors={this.props.errors}
            />
          </div>
          <div className={'col-8'}>
            <InputField
              name={'achternaam'}
              value={this.props.achternaam}
              onChange={this.props.handleChange}
              errors={this.props.errors}
            />
          </div>
        </div>





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
          errors={this.props.errors}
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

          {this.props.errors.burgelijkestaatError && <span className="error-message"> {this.props.errors.burgelijkestaatError} </span>}

        </div>

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
