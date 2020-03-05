import React, {Component} from 'react';

export default class Bevestiging extends Component {

  render() {

    const content = () => {

      if (this.props.submissionError === false)
        return (
          <>
            <h3>Hartelijk dank!</h3>
            <p>Veel dank voor het invullen van de schenkingsovereenkomst. Voor hetzelfde geld geef je nu meer en draag
              je nog meer bij aan de bescherming van onze natuur!</p>
            <p>De ingevulde overeenkomst is verstuurd naar het door jou opgegeven e-mailadres. Stuur deze overeenkomst
              ondertekend, gratis op aan ons antwoordnummer:</p>
            <p> Greenpeace Nederland<br/>
              Antwoordnummer 11330<br/>
              1000 PJ Amsterdam</p>
            <p> Je ontvangt vervolgens de ondertekende overeenkomst retour.
            </p>
            <p>Is iets nog niet duidelijk of wil je meer informatie? Aarzel dan niet om contact met onze Supporter Care
              op te
              nemen via ons gratis telefoonnummer 0800 422 33 44 of via <a
                href={'mailto:schenkingen@greenpeace.nl'}>schenkingen@greenpeace.nl</a>.
            </p>
            <p>
              Let op! Het verzonden bericht kan aangemerkt worden als SPAM/ongewenste email. Controleer daarom jouw map
              met
              ongewenste e-mail indien je het verzonden bericht niet binnen 10 minuten hebt ontvangen.
            </p>
          </>
        );
      return (
        <>
          <h3>Fout</h3>
          <p>Er gaat helaas iets mis met het versturen van het formulier. Probeer het later nog eens.</p>
          <button
            className="btn btn-previous"
            onClick={this.props.handleChange}
            name={'step'}
            value={'controleer'}
          >
            Ga terug
          </button>
        </>
      )
    };

    return (
      <div className="card">
        {content()}
      </div>
    )
  }
}
