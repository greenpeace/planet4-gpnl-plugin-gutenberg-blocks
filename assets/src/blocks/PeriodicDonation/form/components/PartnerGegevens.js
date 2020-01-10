import React, {Component} from 'react';
import DatePicker from 'react-datepicker';

import InputField from './InputField';

export default class PartnerGegevens extends Component {

  render() {

    return (
      <div className="form-card">

        <InputField
          name={'voornamenPartner'}
          value={this.props.voornamenPartner}
          label={'voornamen van je partner'}
          placeholder={'voornamen van je partner'}
          onChange={this.props.handleChange}
        />

        <InputField
          name={'achternaamPartner'}
          value={this.props.achternaamPartner}
          label={'achternaam van je partner'}
          placeholder={'achternaam van je partner'}
          onChange={this.props.handleChange}
        />

        <div className="form-group">
          <label htmlFor="geboortedatumPartner">Geboortedatum van je partner</label>
          <DatePicker
            selected={this.props.geboortedatumPartner}
            onChange={this.props.handleDateChange.bind(this, 'geboortedatumPartner')}
            className={'form-control'}
            dateFormat="dd-MM-yyyy"
            placeholderText="dd-mm-yyyy"
          />
        </div>

        <InputField
          name={'geboorteplaatsPartner'}
          value={this.props.geboorteplaatsPartner}
          label={'geboorteplaats van je partner'}
          placeholder={'geboorteplaats van je partner'}
          onChange={this.props.handleChange}
        />

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
