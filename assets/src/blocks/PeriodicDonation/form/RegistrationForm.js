import React, {Component} from 'react';

import Schenking from './components/Schenking';
import Gegevens from './components/Gegevens';
import Steps from './components/Steps';
import Controleer from './components/Controleer';
import Bevestiging from './components/Bevestiging';
import PartnerGegevens from './components/PartnerGegevens';
import AdresGegevens from './components/AdresGegevens';
import BetaalGegevens from './components/BetaalGegevens';


export default class RegistrationForm extends Component {

  constructor() {
    super();
    this.state = {
      step: 'schenking',
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
    }
  }

  handleChange(event) {
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
        />
      </div>;
    case 'partnergegevens':
      return <div>
        <Steps step={this.state.step} burgelijkestaat={this.state.burgelijkestaat}/>
        <PartnerGegevens
          {...this.state}
          handleChange={this.handleChange.bind(this)}
          handleDateChange={this.handleDateChange.bind(this)}
        />
      </div>;
    case 'adresgegevens':
      return <div>
        <Steps step={this.state.step} burgelijkestaat={this.state.burgelijkestaat}/>
        <AdresGegevens
          {...this.state}
          handleChange={this.handleChange.bind(this)}
        />
      </div>;
    case 'betaalgegevens':
      return <div>
        <Steps step={this.state.step} burgelijkestaat={this.state.burgelijkestaat}/>
        <BetaalGegevens
          {...this.state}
          handleChange={this.handleChange.bind(this)}
        />
      </div>;
    case 'controleer':
      return <Controleer
        {...this.state}
        handleChange={this.handleChange.bind(this)}
      />;
    case 'bevestiging':
      return <Bevestiging/>;
    default:
      return null;
    }
  }
}
