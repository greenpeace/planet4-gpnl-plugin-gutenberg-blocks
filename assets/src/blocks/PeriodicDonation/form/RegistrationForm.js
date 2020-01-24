import React, {Component} from 'react';

import Schenking from './components/Schenking';
import Gegevens from './components/Gegevens';
import Steps from './components/Steps';
import Controleer from './components/Controleer';
import Bevestiging from './components/Bevestiging';
import PartnerGegevens from './components/PartnerGegevens';
import AdresGegevens from './components/AdresGegevens';
import BetaalGegevens from './components/BetaalGegevens';


class RegistrationForm extends Component {

  constructor() {
    super();
    this.state = {
      step: 'gegevens',
      marketingcode: '',
      screenId: 0,
      bedrag: '',
      jaar: new Date().getFullYear(),
      geslacht: '',
      initialen: '',
      voornamen: '',
      tussenvoegsel: '',
      achternaam: '',
      geboortedatum: '',
      geboorteplaats: '',
      burgelijkestaat: '',
      postcode: '',
      huisnummer: '',
      huisnummertoevoeging: '',
      straat: '',
      woonplaats: '',
      telefoonnummer: '',
      email: '',
      rekeningnummer: '',
      betalingstermijn: '',
      landcode: 'NL',
      voornamenPartner: '',
      achternaamPartner: '',
      geboortedatumPartner: '',
      geboorteplaatsPartner: '',
      errors: {
        bedragError: '',
        geslachtError: '',
        initialenError: '',
        voornamenError: '',
        tussenvoegselError: '',
        achternaamError: '',
        geboortedatumError: '',
        geboorteplaatsError: '',
        burgelijkestaatError: '',
        postcodeError: '',
        huisnummerError: '',
        huisnummertoevoegingError: '',
        straatError: '',
        woonplaatsError: '',
        telefoonnummerError: '',
        emailError: '',
        rekeningnummerError: '',
        betalingstermijnError: '',
        landcodeError: '',
        voornamenPartnerError: '',
        achternaamPartnerError: '',
        geboortedatumPartnerError: '',
        geboorteplaatsPartnerError: '',
      }
    };
  }

  handleValidateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  /*
 * Returns 1 if the IBAN is valid
 * Returns FALSE if the IBAN's length is not as should be (for CY the IBAN Should be 28 chars long starting with CY )
 * Returns any other number (checksum) when the IBAN is invalid (check digits do not match)
 */
  handleValidateIban(input) {
    var CODE_LENGTHS = {
      AD: 24, AE: 23, AT: 20, AZ: 28, BA: 20, BE: 16, BG: 22, BH: 22, BR: 29,
      CH: 21, CR: 21, CY: 28, CZ: 24, DE: 22, DK: 18, DO: 28, EE: 20, ES: 24,
      FI: 18, FO: 18, FR: 27, GB: 22, GI: 23, GL: 18, GR: 27, GT: 28, HR: 21,
      HU: 28, IE: 22, IL: 23, IS: 26, IT: 27, JO: 30, KW: 30, KZ: 20, LB: 28,
      LI: 21, LT: 20, LU: 20, LV: 21, MC: 27, MD: 24, ME: 22, MK: 19, MR: 27,
      MT: 31, MU: 30, NL: 18, NO: 15, PK: 24, PL: 28, PS: 29, PT: 25, QA: 29,
      RO: 24, RS: 22, SA: 24, SE: 24, SI: 19, SK: 24, SM: 27, TN: 24, TR: 26
    };
    var iban = String(input).toUpperCase().replace(/[^A-Z0-9]/g, ''), // keep only alphanumeric characters
      code = iban.match(/^([A-Z]{2})(\d{2})([A-Z\d]+)$/), // match and capture (1) the country code, (2) the check digits, and (3) the rest
      digits;
    // check syntax and length
    if (!code || iban.length !== CODE_LENGTHS[code[1]]) {
      return false;
    }
    // rearrange country code and check digits, and convert chars to ints
    digits = (code[3] + code[1] + code[2]).replace(/[A-Z]/g, function (letter) {
      return letter.charCodeAt(0) - 55;
    });
    // final check
    return this.mod97(digits);
  }

  mod97(string) {
    var checksum = string.slice(0, 2), fragment;
    for (var offset = 2; offset < string.length; offset += 7) {
      fragment = String(checksum) + string.substring(offset, offset + 7);
      checksum = parseInt(fragment, 10) % 97;
    }
    return checksum;
  }

  handleValidation() {

    const errors = {};
    let hasErrors = false;

    if (this.state.step === 'schenking') {
      if (this.state.bedrag.length < 1) {
        errors.bedragError = 'Vul alsjeblieft een bedrag in.';
        hasErrors = true;
      } else if (this.state.bedrag % 1 !== 0) {
        errors.bedragError = 'Vul alsjeblieft een rond bedrag in.';
        hasErrors = true;
      }
    }

    if (this.state.step === 'gegevens') {
      if (this.state.geslacht !== 'M' && this.state.geslacht !== 'V' && this.state.geslacht !== 'O') {
        errors.geslachtError = 'Vul alsjeblieft je geslacht in.';
        hasErrors = true;
      }
      if (this.state.voornamen.length < 1) {
        errors.voornamenError =  'Vul alsjeblieft je voornaam of voornamen in.';
        hasErrors = true;
      }
      if (this.state.achternaam.length < 1) {
        errors.achternaamError = 'Vul alsjeblieft je achternaam in.';
        hasErrors = true;
      }
      if (new Date(this.state.geboortedatum).toString() === "Invalid Date" || this.state.geboortedatum === null) {
        errors.geboortedatumError = 'Vul alsjeblieft je geboortedatum in.';
        hasErrors = true;
      }
      if (this.state.geboorteplaats.length < 1) {
        errors.geboorteplaatsError = 'Vul alsjeblieft je geboorteplaats in.';
        hasErrors = true;
      }
      if (this.state.burgelijkestaat === 0 || this.state.burgelijkestaat === null || this.state.burgelijkestaat === '' ) {
        errors.burgelijkestaatError = 'Vul alsjeblieft je burgelijke staat in.';
        hasErrors = true;
      }
    }

    if (this.state.step === 'partnergegevens') {
      if (this.state.voornamenPartner.length < 1) {
        errors.voornamenPartnerError =  'Vul alsjeblieft de voornaam of voornamen van je partner in.';
        hasErrors = true;
      }
      if (this.state.achternaamPartner.length < 1) {
        errors.achternaamPartnerError = 'Vul alsjeblieft de achternaam van je partner in.';
        hasErrors = true;
      }
      if (new Date(this.state.geboortedatumPartner).toString() === "Invalid Date" || this.state.geboortedatumPartner === null) {
        errors.geboortedatumPartnerError = 'Vul alsjeblieft de geboortedatum van je partner in.';
        hasErrors = true;
      }
      if (this.state.geboorteplaatsPartner.length < 1) {
        errors.geboorteplaatsPartnerError = 'Vul alsjeblieft de geboorteplaats van je partner in.';
        hasErrors = true;
      }
    }

    if (this.state.step === 'adresgegevens') {
      if (this.state.postcode.replace(/ /g,'').length !== 6) {
        errors.postcodeError =  'Vul alsjeblieft je postcode in volgens het formaat "1234 XX".';
        hasErrors = true;
      }
      if (this.state.huisnummer.length < 1) {
        errors.huisnummerError = 'Vul alsjeblieft je huisnummer in.';
        hasErrors = true;
      }
      if (this.state.straat.length < 1) {
        errors.straatError = 'Vul alsjeblieft je straat in.';
        hasErrors = true;
      }
      if (this.state.telefoonnummer.length < 10) {
        errors.telefoonnummerError = 'Vul alsjeblieft je 10-cijferige telefoonnummer in.';
        hasErrors = true;
      }
      if (this.state.email.length < 1) {
        errors.emailError = 'Vul alsjeblieft je emailadres in.';
        hasErrors = true;
      } else if (this.handleValidateEmail(this.state.email) === false){
        errors.emailError = 'Vul alsjeblieft een geldig emailadres in.';
        hasErrors = true;
      }
    }

    if (this.state.step === 'betaalgegevens') {
      if (this.handleValidateIban(this.state.rekeningnummer) !== 1 ) {
        errors.rekeningnummerError =  'Het ingevulde IBAN-rekeningnummer bestaat niet.';
        hasErrors = true;
      }

      if (this.state.betalingstermijn !== 'Maand' && this.state.betalingstermijn !== 'Jaar' && this.state.betalingstermijn !== 'Kwartaal' && this.state.betalingstermijn !== 'Semester') {
        errors.betalingstermijnError = 'Vul alsjeblieft een betalingstermijn in.';
        hasErrors = true;
      }
    }

    this.setState({errors: errors});
    return hasErrors;
  }

  next() {

    // const errors = this.handleValidation();
    // if (!errors) {

      switch (this.state.step) {
      case 'schenking':
        this.setState({step: 'gegevens'});
        break;
      case 'gegevens':
        if (this.state.burgelijkestaat === 'Gehuwd' || this.state.burgelijkestaat === 'Partner') {
          this.setState({step: 'partnergegevens'});
        } else {
          this.setState({step: 'adresgegevens'});
        }
        break;
      case 'partnergegevens':
        this.setState({step: 'adresgegevens'});
        break;
      case 'adresgegevens':
        this.setState({step: 'betaalgegevens'});
        break;
      case 'betaalgegevens':
        this.setState({step: 'controleer'});
        break;
      case 'controleer':
        this.setState({step: 'bevestiging'});
        // TODO: Case 'controleer' naar API + melding dat het gelukt is.
      }
    // }
  }

  prev() {
    switch (this.state.step) {
    case 'gegevens':
      this.setState({step: 'schenking'});
      break;
    case 'partnergegevens':
      this.setState({step: 'gegevens'});
      break;
    case 'adresgegevens':
      if (this.state.burgelijkestaat === 'Gehuwd' || this.state.burgelijkestaat === 'Partner') {
        this.setState({step: 'partnergegevens'});
      } else {
        this.setState({step: 'gegevens'});
      }
      break;
    case 'betaalgegevens':
      this.setState({step: 'adresgegevens'});
      break;
    case 'controleer':
      this.setState({step: 'betaalgegevens'});
    }
  }

  handleChange(event) {
    console.log(event.target.name);
    console.log(event.target.value);
    this.setState({[event.target.name]: event.target.value});
  };

  // This function sets the firstnames to the correct value and generates the initials with a dot (.).
  handleFirstNamesChange(event) {
    this.setState({[event.target.name]: event.target.value});
    const firstNames = this.state.voornamen.split(' ');
    const initials = firstNames.map(name => name.charAt(0).toUpperCase() + '.').join('');
    this.setState({initialen: initials});
  };

  handleDateChange(property, date) {
    this.setState({
      [property]: date
    });
  };


  render() {
    switch (this.state.step) {
    case 'schenking':
      return <div>
        <Steps step={this.state.step} burgelijkestaat={this.state.burgelijkestaat}/>
        <Schenking
          {...this.state}
          handleChange={this.handleChange.bind(this)}
          handleValidation={this.handleValidation.bind(this)}
          next={this.next.bind(this)}
        />
      </div>;
    case 'gegevens':
      return <div>
        <Steps step={this.state.step} burgelijkestaat={this.state.burgelijkestaat}/>
        <Gegevens
          {...this.state}
          handleChange={this.handleChange.bind(this)}
          handleDateChange={this.handleDateChange.bind(this)}
          handleFirstNamesChange={this.handleFirstNamesChange.bind(this)}
          handleValidation={this.handleValidation.bind(this)}
          next={this.next.bind(this)}
          prev={this.prev.bind(this)}
        />
      </div>;
    case 'partnergegevens':
      return <div>
        <Steps step={this.state.step} burgelijkestaat={this.state.burgelijkestaat}/>
        <PartnerGegevens
          {...this.state}
          handleChange={this.handleChange.bind(this)}
          handleDateChange={this.handleDateChange.bind(this)}
          next={this.next.bind(this)}
          prev={this.prev.bind(this)}
        />
      </div>;
    case 'adresgegevens':
      return <div>
        <Steps step={this.state.step} burgelijkestaat={this.state.burgelijkestaat}/>
        <AdresGegevens
          {...this.state}
          handleChange={this.handleChange.bind(this)}
          next={this.next.bind(this)}
          prev={this.prev.bind(this)}
        />
      </div>;
    case 'betaalgegevens':
      return <div>
        <Steps step={this.state.step} burgelijkestaat={this.state.burgelijkestaat}/>
        <BetaalGegevens
          {...this.state}
          handleChange={this.handleChange.bind(this)}
          next={this.next.bind(this)}
          prev={this.prev.bind(this)}

        />
      </div>;
    case 'controleer':
      return <Controleer
        {...this.state}
        next={this.next.bind(this)}
        prev={this.prev.bind(this)}
      />;
    case 'bevestiging':
      return <Bevestiging/>;
    default:
      return null;
    }
  }
}

export default RegistrationForm;
