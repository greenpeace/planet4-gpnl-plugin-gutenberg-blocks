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

  constructor(props) {
    super(props);
    this.state = {
      step: 'schenking',
      marketingcode: this.props.mcode,
      screenId: 0,
      bedrag: '',
      jaar: new Date().getFullYear(),
      geslacht: 'V',
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
      machtiging: true
    };
  }

  handleChange(event, type = 'string') {

    let value = event.target.value;

    if (type === 'boolean' ) {
      value = value !== "false";
    }

    this.setState({[event.target.name]: value});
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


  handleFormSubmit(){
    jQuery.ajax({
      type: "POST",
      data: {
        action: 'periodic_donation_form_process', // This is the action in your server-side code (PHP) that will be triggered
        state: this.state
      },
      url: window.p4nl_vars.ajaxurl,
      success: function(result)
      {
        console.log(result);
      },
      error:function (xhr, statusText, thrownError) {
        console.log(xhr);
        console.log(xhr.status);
        console.log(statusText);
        console.log(thrownError);
      }
    });
  }




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
        handleFormSubmit={this.handleFormSubmit.bind(this)}
        handleChange={this.handleChange.bind(this)}
      />;
    case 'bevestiging':
      return <Bevestiging/>;
    default:
      return null;
    }
  }
}
