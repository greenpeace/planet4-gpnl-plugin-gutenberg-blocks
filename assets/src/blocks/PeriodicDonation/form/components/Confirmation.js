import React, { Component } from 'react';

class Confirmation extends Component {

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

        return (
            <div className="form-card">
                <h3>Bevestiging</h3>
              <table>
                <tbody>


{this.props.bedrag && <tr><th>Bedrag per jaar</th><td>{this.props.bedrag}</td> </tr>}
{this.props.jaar && <tr><th>Ingaande in</th><td>{this.props.jaar}</td> </tr>}
{this.props.geslacht && <tr><th>Geslacht</th><td>{ geslacht() }</td> </tr>}
{this.props.voornamen && <tr><th>Voornamen</th><td>{this.props.voornamen}</td> </tr>}
{this.props.tussenvoegsel && <tr><th>Tussenvoegsel</th><td>{this.props.tussenvoegsel}</td> </tr>}
{this.props.achternaam && <tr><th>Achternaam</th><td>{this.props.achternaam}</td> </tr>}
{this.props.geboortedatum && <tr><th>Geboortedatum</th><td>{this.props.geboortedatum.toLocaleDateString("nl-NL")}</td> </tr>}
{this.props.geboorteplaats && <tr><th>Geboorteplaats</th><td>{this.props.geboorteplaats}</td> </tr>}
{this.props.burgelijkestaat && <tr><th>Burgelijke staat</th><td>{this.props.burgelijkestaat}</td> </tr>}
                </tbody>
                </table>

            </div>
        )
    }
}

export default Confirmation;
