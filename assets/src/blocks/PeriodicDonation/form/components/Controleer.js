import React, { Component } from 'react';

export default class Controleer extends Component {

    render() {

      const geslacht = () => {
        switch (this.props.geslacht){
        case 'M':
          return 'Man';
        case 'V':
          return 'Vrouw';
        case 'O':
          return 'Anders';
        }
      };

      const betalingstermijn = () => {
        switch (this.props.betalingstermijn){
        case 'Maand':
          return 'Maandelijks';
        case 'Kwartaal':
          return 'Elke 3 maanden';
        case 'Semester':
          return 'Elk half jaar';
        case 'Jaar':
          return 'Jaarlijks';
        }
      };

      const confirmButton = () => {
        const buttonValue = this.props.isSubmitting ?  <span className={'loader'}/> : 'Bevestig';

        return (
          <button
          className="btn btn-next"
          onClick={this.props.handleFormSubmit}
          name={'step'}
          value={'bevestiging'}
        >
            {buttonValue}
        </button>
        )
      };

        return (
          <div className="card">
            <h3>Controle</h3>
            <p>Dit zijn de gegevens die je ingevuld hebt. Druk op bevestig als alles klopt of ga terug om een aanpassing te maken.</p>
            <table>
              <tbody>
                {/*Shorthand && gives errors: https://stackoverflow.com/questions/39914455/react-validatedomnesting-text-cannot-appear-as-a-child-of-tr so I use the ternary operator. */}
                {this.props.bedrag ? <tr><th>Bedrag per jaar</th><td>€ {this.props.bedrag}</td></tr> : null}
                {this.props.jaar ? <tr><th>Ingaande in</th><td>{this.props.jaar}</td></tr> : null}
                {this.props.geslacht ? <tr><th>Geslacht</th><td>{ geslacht() }</td></tr> : null}
                {this.props.voornamen ? <tr><th>Voornamen</th><td>{this.props.voornamen}</td></tr> : null}
                {this.props.tussenvoegsel ? <tr><th>Tussenvoegsel</th><td>{this.props.tussenvoegsel}</td></tr> : null}
                {this.props.achternaam ? <tr><th>Achternaam</th><td>{this.props.achternaam}</td></tr> : null}
                {this.props.geboortedatum ? <tr><th>Geboortedatum</th><td>{this.props.geboortedatum.toLocaleDateString("nl-NL")}</td></tr> : null}
                {this.props.geboorteplaats ? <tr><th>Geboorteplaats</th><td>{this.props.geboorteplaats}</td></tr> : null}
                {this.props.burgelijkestaat ? <tr><th>Burgelijke staat</th><td>{this.props.burgelijkestaat}</td></tr> : null}
                {this.props.voornamenPartner ? <tr><th>Voornamen van partner</th><td>{this.props.voornamenPartner}</td></tr> : null}
                {this.props.achternaamPartner ? <tr><th>Achternaam partner</th><td>{this.props.achternaamPartner}</td></tr> : null}
                {this.props.geboortedatumPartner ? <tr><th>Geboortedatum partner</th><td>{this.props.geboortedatumPartner.toLocaleDateString("nl-NL")}</td></tr> : null}
                {this.props.geboorteplaatsPartner ? <tr><th>Geboorteplaats partner</th><td>{this.props.geboorteplaatsPartner}</td></tr> : null}
                {this.props.postcode ? <tr><th>Postcode</th><td>{this.props.postcode}</td></tr> : null}
                {this.props.huisnummer ? <tr><th>Huisnummer</th><td>{this.props.huisnummer}</td></tr> : null}
                {this.props.huisnummertoevoeging ? <tr><th>Huisnummer toevoeging</th><td>{this.props.huisnummertoevoeging}</td></tr> : null}
                {this.props.straat ? <tr><th>Straat</th><td>{this.props.straat}</td></tr> : null}
                {this.props.woonplaats ? <tr><th>Woonplaats</th><td>{this.props.woonplaats}</td></tr> : null}
                {this.props.telefoonnummer ? <tr><th>Telefoonnummer</th><td>{this.props.telefoonnummer}</td></tr> : null}
                {this.props.email ? <tr><th>Email</th><td>{this.props.email}</td></tr> : null}
                {this.props.rekeningnummer ? <tr><th>Rekeningnummer</th><td>{this.props.rekeningnummer}</td></tr> : null}
                {this.props.betalingstermijn ? <tr><th>Betalingstermijn</th><td>{betalingstermijn()}</td></tr> : null}

              </tbody>
            </table>
            <div>
              <button
                className="btn btn-previous"
                onClick={this.props.handleChange}
                name={'step'}
                value={ 'betaalgegevens'}
              >
                Vorige
              </button>
              {confirmButton()}
            </div>
          </div>
        )
    }
}
