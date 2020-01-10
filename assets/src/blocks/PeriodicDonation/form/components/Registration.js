import React, {Component} from 'react';
import Schenking from './Schenking';
import Gegevens from './Gegevens';
import Name from './Name';
import Postcode from './Postcode';
import Steps from './Steps';
import Confirmation from './Confirmation';
import PartnerGegevens from './PartnerGegevens';
import AdresGegevens from './AdresGegevens';
import BetaalGegevens from './BetaalGegevens';
import HeroImage from '../../../HeroImage/js/HeroImage';

class Registration extends Component {

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
      landcode: '',
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
    // case 'gegevens':
    //   this.setState({step: 'adresgegevens'});
    //   break;
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
      this.setState({step: 'bevestiging'});
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
    case 'bevestigings':
      this.setState({step: 'betaalgegevens'});
    }
  }

  // handleChange(event) {
  //   console.log(event.target.id);
  //   console.log(event.target.value);
  //   this.setState({[event.target.id]: event.target.value});
  // }


  handleChange(event) {
    console.log(event.target.value);
    this.setState({[event.target.name]: event.target.value});
  };


  handleDateChange(property, date) {
    this.setState({
      [property]: date
    });
  };


  handleOnCheck(e) {
    this.setState({[e.target.id]: !this.state.terms});
  }

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
    case 'bevestiging':
      return <Confirmation
        {...this.state}
      />;
    default:
      return null;
    }
  }
}

export default Registration;
