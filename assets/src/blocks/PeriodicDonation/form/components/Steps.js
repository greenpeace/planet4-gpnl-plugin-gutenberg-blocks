import React, {Component} from 'react';

class Steps extends Component {

  render() {


    let parterstep;

    if (this.props.burgelijkestaat === "Gehuwd" || this.props.burgelijkestaat === "Partner" ) {
      parterstep =         <div className={'col ' + (this.props.step === 'partnergegevens' ? 'active' : '')}>
        <div className={'tab'}>2.2.</div>
        <span>Partner</span>
      </div>
    }


      return (
      <div className="row form-steps">
        <div className={'col ' + (this.props.step === 'schenking' ? 'active' : '')}>
          <div className={'tab'}>1.</div>
          <span>Schenking</span>
        </div>
        <div className={'col ' + (this.props.step === 'gegevens' ? 'active' : '')}>
          <div className={'tab'}>2.</div>
          <span>Gegevens</span>
        </div>
        { parterstep }
        <div className={'col ' + (this.props.step === 'adresgegevens' ? 'active' : '')}>
          <div className={'tab'}>3.</div>
          <span>Adres</span>
        </div>
        <div className={'col ' + (this.props.step === 'betaalgegevens' ? 'active' : '')}>
          <div className={'tab'}>4.</div>
          <span>Betaling</span>
        </div>
      </div>
    );
  }
}

export default Steps;
