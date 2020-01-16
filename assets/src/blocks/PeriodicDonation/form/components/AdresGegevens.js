import React, {Component} from 'react';

import InputField from './InputField';

export default class AdresGegevens extends Component {

  render() {

    return (
      <div className="card">

        <div className={'form-row'} >

          <div className={'col-12 col-md-5'}>
            <InputField
              name={'postcode'}
              value={this.props.postcode}
              placeholder={'1234 XX'}
              onChange={this.props.handleChange}
              errors={this.props.errors}
            />
          </div>
          <div className={'col-12 col-md-4'}>
            <InputField
              name={'huisnummer'}
              value={this.props.huisnummer}
              onChange={this.props.handleChange}
              errors={this.props.errors}
            />
          </div>
          <div className={'col-12 col-md-3'}>
            <InputField
              label={'toevoeging'}
              name={'huisnummertoevoeging'}
              value={this.props.huisnummertoevoeging}
              onChange={this.props.handleChange}
              errors={this.props.errors}
            />
          </div>
        </div>

        <InputField
          name={'straat'}
          value={this.props.straat}
          onChange={this.props.handleChange}
          errors={this.props.errors}
        />

        <InputField
          name={'woonplaats'}
          label={'plaats'}
          value={this.props.woonplaats}
          onChange={this.props.handleChange}
          errors={this.props.errors}
        />


        <InputField
          name={'telefoonnummer'}
          value={this.props.telefoonnummer}
          placeholder={'0612345678'}
          onChange={this.props.handleChange}
          errors={this.props.errors}
        />

        <InputField
          name={'email'}
          value={this.props.email}
          onChange={this.props.handleChange}
          errors={this.props.errors}
        />



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
