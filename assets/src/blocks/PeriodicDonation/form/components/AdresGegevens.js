import React, {Component} from 'react';

import InputField from '../../../../components/forms/InputField';
import {isValidString, isValidEmail, isValidAny} from '../../../../components/forms/Validators';

export default class AdresGegevens extends Component {
  constructor(props) {
    super(props);

    this.references = {};

    this.handleAddressAutofill = this.handleAddressAutofill.bind(this);
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
      if (this.references[reference]['current'].handleIsValid() !== true){
        isValid = false;
      }
    }

    // Check isValid before moving to the next step.
    if (isValid === true) {
      this.props.handleChange(e)
    }
  };

  handleAddressAutofill(){
    jQuery.ajax({
      type: "POST",
      data: {
        action: 'periodic_donation_address_autofill', // This is the action in your server-side code (PHP) that will be triggered
        postcode: this.props.postcode,
        huisnummer: this.props.huisnummer,
      },
      url: window.p4nl_vars.ajaxurl,
      success: function(response)
      {
        const result = response.data.output.result;
        this.props.handleManualChange({straat: result.straat, woonplaats: result.woonplaats })

      }.bind(this),
      error:function (xhr, statusText, thrownError) {
        console.error(xhr.status, statusText, thrownError);
      }.bind(this)
    });
  }



  render() {

    const {burgelijkestaat, postcode, huisnummer, straat, woonplaats, telefoonnummer, email, handleChange} = this.props;

    return (
      <div className="card">

        <div className={'form-row'} >

          <div className={'col-12 col-md-5'}>
            <InputField
              ref={this.getOrCreateRef('postcode')}
              propertyName={'postcode'}
              placeholder={'1234XX'}
              value={postcode}
              onChange={handleChange}
              isValid={isValidString(postcode, 6, 6)}
              errorMessage={'Vul alsjeblieft je postcode in. Bijvoorbeeld "1234XX"'}
            />
          </div>
          <div className={'col-12 col-md-4'}>
            <InputField
              ref={this.getOrCreateRef('huisnummer')}
              propertyName={'huisnummer'}
              value={huisnummer}
              onChange={handleChange}
              onBlur={this.handleAddressAutofill}
            />
          </div>
          <div className={'col-12 col-md-3'}>
            <InputField
              label={'toevoeging'}
              propertyName={'huisnummertoevoeging'}
              value={this.props.huisnummertoevoeging}
              onChange={this.props.handleChange}
              errors={this.props.errors}
            />
          </div>
        </div>

        <InputField
          ref={this.getOrCreateRef('straat')}
          propertyName={'straat'}
          value={straat}
          onChange={handleChange}
          isValid={isValidString(straat)}
          errorMessage={'Vul alsjeblieft je straatnaam in.'}
        />

        <InputField
          ref={this.getOrCreateRef('woonplaats')}
          propertyName={'woonplaats'}
          label={'plaats'}
          value={woonplaats}
          onChange={handleChange}
          isValid={isValidString(woonplaats)}
          errorMessage={'Vul alsjeblieft je straatnaam in.'}
        />

        <InputField
          ref={this.getOrCreateRef('telefoonnummer')}
          propertyName={'telefoonnummer'}
          value={telefoonnummer}
          placeholder={'0612345678'}
          onChange={handleChange}
          isValid={isValidAny(telefoonnummer, 10, 13)}
          errorMessage={'Vul alsjeblieft je telefoonnummer in.'}
        />

        <InputField
          ref={this.getOrCreateRef('email')}
          propertyName={'email'}
          value={email}
          onChange={handleChange}
          isValid={isValidEmail(email)}
          errorMessage={'Vul alsjeblieft een geldig emailadres in.'}
        />

        <div>
          <button
            className="btn btn-previous"
            onClick={handleChange}
            name={'step'}
            value={ burgelijkestaat === 'gehuwd' || burgelijkestaat === 'partner' ? 'partnergegevens' : 'gegevens'}
          >
            Vorige
          </button>
          <button
            className="btn btn-next"
            onClick={this.handleNextClick}
            name={'step'}
            value={'betaalgegevens'}
          >
            Volgende
          </button>
        </div>
      </div>
    );
  }
}