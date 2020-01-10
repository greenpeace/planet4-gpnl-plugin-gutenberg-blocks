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
{/*Shorthand && gives errors: https://stackoverflow.com/questions/39914455/react-validatedomnesting-text-cannot-appear-as-a-child-of-tr so I use the ternary operator. */}
{this.props.bedrag ? <tr><th>Bedrag per jaar</th><td>{this.props.bedrag}</td></tr> : null}
{this.props.jaar ? <tr><th>Ingaande in</th><td>{this.props.jaar}</td></tr> : null}
{this.props.geslacht ? <tr><th>Geslacht</th><td>{ geslacht() }</td></tr> : null}
{this.props.voornamen ? <tr><th>Voornamen</th><td>{this.props.voornamen}</td></tr> : null}
{this.props.tussenvoegsel ? <tr><th>Tussenvoegsel</th><td>{this.props.tussenvoegsel}</td></tr> : null}
{this.props.achternaam ? <tr><th>Achternaam</th><td>{this.props.achternaam}</td></tr> : null}
{this.props.geboortedatum ? <tr><th>Geboortedatum</th><td>{this.props.geboortedatum.toLocaleDateString("nl-NL")}</td></tr> : null}
{this.props.geboorteplaats ? <tr><th>Geboorteplaats</th><td>{this.props.geboorteplaats}</td></tr> : null}
{this.props.burgelijkestaat ? <tr><th>Burgelijke staat</th><td>{this.props.burgelijkestaat}</td></tr> : null}
                </tbody>
                </table>
            </div>
        )
    }
}

export default Confirmation;
