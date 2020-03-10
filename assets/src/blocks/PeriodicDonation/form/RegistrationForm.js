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
      screenId: 3769,
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
      machtiging: true,
      isSubmitting: false,
      submissionError: false
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

  handleManualChange(data){
    this.setState(data);
  }


  handleFormSubmit(){
    this.setState({isSubmitting: true});
    jQuery.ajax({
      type: "POST",
      data: {
        action: 'periodic_donation_form_process', // This is the action in your server-side code (PHP) that will be triggered
        state: this.state
      },
      url: window.p4nl_vars.ajaxurl,
      success: function()
      {
        this.setState({isSubmitting: false, step: 'bevestiging', submissionError: false});
      }.bind(this),
      error:function (xhr, statusText, thrownError) {
        this.setState({isSubmitting: false, step: 'bevestiging', submissionError: true});
        console.error(xhr.status, statusText, thrownError);
      }.bind(this)
    });
  }


  render() {
    switch (this.state.step) {
    case 'schenking':
      return <div>
        <Steps step={this.state.step} burgelijkestaat={this.state.burgelijkestaat} imagesPath={this.props.imagespath}/>
        <Schenking
          {...this.state}
          handleChange={this.handleChange.bind(this)}
        />
      </div>;
    case 'gegevens':
      return <div>
        <Steps step={this.state.step} burgelijkestaat={this.state.burgelijkestaat} imagesPath={this.props.imagespath}/>
        <Gegevens
          {...this.state}
          handleChange={this.handleChange.bind(this)}
          handleDateChange={this.handleDateChange.bind(this)}
          handleFirstNamesChange={this.handleFirstNamesChange.bind(this)}
        />
      </div>;
    case 'partnergegevens':
      return <div>
        <Steps step={this.state.step} burgelijkestaat={this.state.burgelijkestaat} imagesPath={this.props.imagespath}/>
        <PartnerGegevens
          {...this.state}
          handleChange={this.handleChange.bind(this)}
          handleDateChange={this.handleDateChange.bind(this)}
        />
      </div>;
    case 'adresgegevens':
      return <div>
        <Steps step={this.state.step} burgelijkestaat={this.state.burgelijkestaat} imagesPath={this.props.imagespath}/>
        <AdresGegevens
          {...this.state}
          handleChange={this.handleChange.bind(this)}
          handleManualChange={this.handleManualChange.bind(this)}
        />
      </div>;
    case 'betaalgegevens':
      return <div>
        <Steps step={this.state.step} burgelijkestaat={this.state.burgelijkestaat} imagesPath={this.props.imagespath}/>
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
      return <Bevestiging
      submissionError = {this.state.submissionError}
      handleChange={this.handleChange.bind(this)}
      />;
    default:
      return null;
    }
  }
}
