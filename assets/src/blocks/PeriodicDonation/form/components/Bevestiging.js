import React, {Component} from 'react';

export default class Bevestiging extends Component {

  render() {

    const content = () => {

      if (this.props.submissionError === false)
        return (
          <>
            <h3>Bevestging</h3>
            <p>Hartelijk dank voor het aanvragen van de schenkingsovereenkomst. Per mail wordt de overeenkomst naar je
              verstuurd. Graag deze ondertekenen en retourneren.</p>
          </>
        );
      return (
        <>
          <h3>Fout</h3>
          <p>Er gaat helaas iets mis met het versturen van het formulier. Probeer het later nog eens.</p>
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
