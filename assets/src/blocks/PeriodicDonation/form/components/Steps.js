import React, {Component} from 'react';

class Steps extends Component {

  render() {


    let parterstep;

    if (this.props.burgelijkestaat === "Gehuwd" || this.props.burgelijkestaat === "Partner" ) {
      parterstep =         <div className={'col ' + (this.props.step === 'partnergegevens' ? 'active' : '')}>
        <div className={'tab'}>Partnergegevens</div>
        <span>Partnergegevens</span>
      </div>
    }


      return (
      <div className="row form-steps">
        <div className={'col ' + (this.props.step === 'schenking' ? 'active' : '')}>
          <div className={'tab'}>Schenking</div>
          <span>Schenking</span>
        </div>
        <div className={'col ' + (this.props.step === 'gegevens' ? 'active' : '')}>
          <div className={'tab'}>Gegevens</div>
          <span>Gegevens</span>
        </div>
        { parterstep }
        <div className={'col ' + (this.props.step === 'adresgegevens' ? 'active' : '')}>
          <div className={'tab'}>Adresgegevens</div>
          <span>Adresgegevens</span>
        </div>
        <div className={'col ' + (this.props.step === 'betaalgegevens' ? 'active' : '')}>
          <div className={'tab'}>Betaalgegevens</div>
          <span>Betaalgegevens</span>
        </div>
      </div>
    );
  }
}

export default Steps;
