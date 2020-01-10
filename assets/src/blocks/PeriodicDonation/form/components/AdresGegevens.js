import React, {Component} from 'react';

import InputField from './InputField';

export default class AdresGegevens extends Component {

  render() {

    return (
      <div className="form-card">

        <InputField
          name={'postcode'}
          value={this.props.postcode}
          placeholder={'1234XX'}
          onChange={this.props.handleChange}
        />

        <InputField
          name={'huisnummer'}
          value={this.props.huisnummer}
          placeholder={''}
          onChange={this.props.handleChange}
        />

        <InputField
          name={'huisnummertoevoeging'}
          value={this.props.huisnummertoevoeging}
          placeholder={''}
          onChange={this.props.handleChange}
        />

        <InputField
          name={'straat'}
          value={this.props.straat}
          onChange={this.props.handleChange}
        />

        <InputField
          name={'woonplaats'}
          value={this.props.woonplaats}
          onChange={this.props.handleChange}
        />


        <InputField
          name={'telefoonnummer'}
          value={this.props.telefoonnummer}
          placeholder={'0612345678'}
          onChange={this.props.handleChange}
        />

        <InputField
          name={'email'}
          value={this.props.email}
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
