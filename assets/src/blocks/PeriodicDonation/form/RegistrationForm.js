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
      step: 'schenking',
      marketingcode: '',
      screenId: 0,
      bedrag: 50,
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
      geboorteplaatsPartner: ''

    };
  }


  next() {
    switch (this.state.step) {
    case 'schenking':
        this.setState({step: 'gegevens'});
      break;
    case 'gegevens':
      if (this.state.burgelijkestaat === "Gehuwd" || this.state.burgelijkestaat === "Partner" ) {
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
    case 'controleer':
      this.setState({step: 'bevestiging'});
      // TODO: Case 'controleer' naar API + melding dat het gelukt is.
    }
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
      if (this.state.burgelijkestaat === "Gehuwd" || this.state.burgelijkestaat === "Partner" ) {
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
    this.setState({[event.target.name]: event.target.value});
  };

  // This function sets the firstnames to the correct value and generates the initials with a dot (.).
  handleFirstNamesChange(event) {
    this.setState({[event.target.name]: event.target.value});
    const firstNames = this.state.voornamen.split(" ");
    const initials = firstNames.map(name => name.charAt(0).toUpperCase()+'.').join("");
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
        <Steps step={this.state.step} burgelijkestaat={this.state.burgelijkestaat} />
        <Schenking
          bedrag={this.state.bedrag}
          jaar={this.state.jaar}
          handleChange={this.handleChange.bind(this)}
          next={this.next.bind(this)}/>
      </div>;
    case 'gegevens':
      return <div>
        <Steps step={this.state.step} burgelijkestaat={this.state.burgelijkestaat} />
        <Gegevens
          geslacht={this.state.geslacht}
          initialen={this.state.initialen}
          voornamen={this.state.voornamen}
          tussenvoegsel={this.state.tussenvoegsel}
          achternaam={this.state.achternaam}
          geboortedatum={this.state.geboortedatum}
          geboorteplaats={this.state.geboorteplaats}
          burgelijkestaat={this.state.burgelijkestaat}
          handleChange={this.handleChange.bind(this)}
          handleDateChange={this.handleDateChange.bind(this)}
          handleFirstNamesChange={this.handleFirstNamesChange.bind(this)}
          next={this.next.bind(this)}
          prev={this.prev.bind(this)}
        />
      </div>;
    case 'partnergegevens':
      return <div>
        <Steps step={this.state.step} burgelijkestaat={this.state.burgelijkestaat} />
        <PartnerGegevens
          voornamenPartner={this.state.voornamenPartner}
          achternaamPartner={this.state.achternaamPartner}
          geboortedatumPartner={this.state.geboortedatumPartner}
          geboorteplaatsPartner={this.state.geboorteplaatsPartner}
          handleChange={this.handleChange.bind(this)}
          handleDateChange={this.handleDateChange.bind(this)}
          next={this.next.bind(this)}
          prev={this.prev.bind(this)}
        />
      </div>;
    case 'adresgegevens':
      return <div>
        <Steps step={this.state.step} burgelijkestaat={this.state.burgelijkestaat} />
        <AdresGegevens
          postcode={this.state.postcode}
          handleChange={this.handleChange.bind(this)}
          next={this.next.bind(this)}
          prev={this.prev.bind(this)}
        />
      </div>;
    case 'betaalgegevens':
      return <div>
        <Steps step={this.state.step} burgelijkestaat={this.state.burgelijkestaat} />
        <BetaalGegevens
          rekeningnummer={this.state.rekeningnummer}
          betalingstermijn={this.state.betalingstermijn}
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
