import React, {Component} from 'react';
import InputField from '../../../components/forms/InputField';
import {isValidAny, isValidEmail, isValidNotEmpty, isValidString} from '../../../components/forms/Validators';
import CheckBox from '../../../components/forms/CheckBox';
import SelectGroup from '../../../components/forms/SelectGroup';

export default class RegistrationForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      geslacht: 'V',
      initialen: '',
      voornaam: '',
      tussenvoegsel: '',
      achternaam: '',
      landcode: 'NL',
      postcode: '',
      huisnummer: '',
      huisnummertoevoeging: '',
      straat: '',
      woonplaats: '',
      telefoonnummer: '',
      mobielnummer: '',
      email: '',
      marketingcode: this.props.mcode,
      requestedItemId: this.props.itemid,
      aantal: 0,
      optIn: false,
      isSubmitting: false,
      isConfirmed: false
    };

    this.references = {};

    this.handleChange = this.handleChange.bind(this);
    this.handleFirstNamesChange = this.handleFirstNamesChange.bind(this);
  }

  // Creating a map of references.
  getOrCreateRef(reference) {
    if (!this.references.hasOwnProperty(reference)) {
      this.references[reference] = React.createRef();
    }
    return this.references[reference];
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  };

  // This function sets the firstnames to the correct value and generates the initials with a dot (.).
  handleFirstNamesChange(event) {
    this.setState({[event.target.name]: event.target.value});
    const firstNames = this.state.voornaam.split(' ');
    const initials = firstNames.map(name => name.charAt(0).toUpperCase() + '.').join('');
    this.setState({initialen: initials});
  };

  handleSubmit = () => {

    let isValid = true;
    // Checking with the references if their inputs are valid.
    for (const reference in this.references) {
      if (this.references[reference]['current'].handleIsValid() !== true){
        isValid = false;
      }
    }

    // Check isValid before moving to the next step.
    if (isValid === true) {
      console.log("VALID!");

      this.setState({isSubmitting: true});
      jQuery.ajax({
        type: "POST",
        data: {
          action: 'brochure_request__form_process', // This is the action in your server-side code (PHP) that will be triggered
          state: this.state
        },
        url: window.p4nl_vars.ajaxurl,
        success: function(result)
        {
          this.setState({isSubmitting: false, step: 'bevestiging', submissionError: false});
          console.log(result);
        }.bind(this),
        error:function (xhr, statusText, thrownError) {
          this.setState({isSubmitting: false, step: 'bevestiging', submissionError: true});
          console.log(xhr);
          console.log(xhr.status);
          console.log(statusText);
          console.log(thrownError);
        }.bind(this)
      });

    }
  };


  render() {

    const {geslacht, voornaam, initialen, achternaam, tussenvoegsel, postcode, huisnummer, huisnummertoevoeging, straat, woonplaats, telefoonnummer, email, optIn} = this.state;

    if (this.state.isConfirmed === true ) {
      return (
        <div className={'card'}>
          Good on ya matE!
        </div>
      )
    }

    const confirmButton = () => {
      const buttonValue = this.state.isSubmitting ?  <span className={'loader'}/> : 'Verstuur';

      return (
        <button
          className="btn btn-next"
          onClick={this.handleSubmit}
        >
          {buttonValue}
        </button>
      )
    };

    return (
      <div className="card">
        <SelectGroup
          ref={this.getOrCreateRef('geslacht')}
          propertyName={'geslacht'}
          label={'Aanhef'}
          value={geslacht}
          onChange={this.handleChange}
          options={{1: {value: 'V', label: 'Mevrouw'}, 2: {value: 'M', label: 'Meneer'}, 3: {value: 'O', label: 'N.v.t.'}}}
          isValid={isValidNotEmpty(geslacht)}
          errorMessage={'Vul alsjeblieft je aanhef in.'}
        />

        <div className={'form-row'}>
          <div className={'col-8'}>
            <InputField
              ref={this.getOrCreateRef('voornaam')}
              propertyName={'voornaam'}
              key={'voornaam'}
              value={voornaam}
              onChange={this.handleFirstNamesChange}
              isValid={isValidString(voornaam)}
              errorMessage={'Vul alsjeblieft je voornaam / voornaam in.'}
            />
          </div>
          <div className={'col-4'}>
            <InputField
              propertyName={'initialen'}
              value={initialen}
              onChange={this.handleChange}
            />
          </div>
        </div>

        <div className={'form-row'}>
          <div className={'col-4'}>
            <InputField
              propertyName={'tussenvoegsel'}
              value={tussenvoegsel}
              onChange={this.handleChange}
            />
          </div>
          <div className={'col-8'}>
            <InputField
              ref={this.getOrCreateRef('achternaam')}
              propertyName={'achternaam'}
              value={achternaam}
              onChange={this.handleChange}
              isValid={isValidString(achternaam)}
              errorMessage={'Vul alsjeblieft je achternaam in.'}
            />
          </div>
        </div>

        <div className={'form-row'}>

          <div className={'col-12 col-md-5'}>
            <InputField
              ref={this.getOrCreateRef('postcode')}
              propertyName={'postcode'}
              placeholder={'1234XX'}
              value={postcode}
              onChange={this.handleChange}
              isValid={isValidString(postcode, 6, 6)}
              errorMessage={'Vul alsjeblieft je postcode in. Bijvoorbeeld "1234XX"'}
            />
          </div>
          <div className={'col-12 col-md-4'}>
            <InputField
              ref={this.getOrCreateRef('huisnummer')}
              propertyName={'huisnummer'}
              value={huisnummer}
              onChange={this.handleChange}
            />
          </div>
          <div className={'col-12 col-md-3'}>
            <InputField
              label={'toevoeging'}
              propertyName={'huisnummertoevoeging'}
              value={huisnummertoevoeging}
              onChange={this.handleChange}
            />
          </div>
        </div>

        <InputField
          ref={this.getOrCreateRef('straat')}
          propertyName={'straat'}
          value={straat}
          onChange={this.handleChange}
          isValid={isValidString(straat)}
          errorMessage={'Vul alsjeblieft je straatnaam in.'}
        />

        <InputField
          ref={this.getOrCreateRef('woonplaats')}
          propertyName={'woonplaats'}
          label={'plaats'}
          value={woonplaats}
          onChange={this.handleChange}
          isValid={isValidString(woonplaats)}
          errorMessage={'Vul alsjeblieft je woonplaats in.'}
        />

        <InputField
          ref={this.getOrCreateRef('telefoonnummer')}
          propertyName={'telefoonnummer'}
          value={telefoonnummer}
          placeholder={'0612345678'}
          onChange={this.handleChange}
          isValid={isValidAny(telefoonnummer, 10, 16)}
          errorMessage={'Vul alsjeblieft je telefoonnummer in.'}
        />

        <InputField
          ref={this.getOrCreateRef('email')}
          propertyName={'email'}
          value={email}
          onChange={this.handleChange}
          isValid={isValidEmail(email)}
          errorMessage={'Vul alsjeblieft een geldig emailadres in.'}
        />

        <CheckBox
          ref={this.getOrCreateRef('optIn')}
          propertyName={'optIn'}
          value={optIn}
          label={'Ja, ik meld mij aan voor de actiemails en ontvang een e-mail zodra mijn hulp nodig is!'}
          onChange={this.handleChange}
        />

        <div className={'form-group'}>
          {confirmButton()}
        </div>
      </div>
    );
  }
}
