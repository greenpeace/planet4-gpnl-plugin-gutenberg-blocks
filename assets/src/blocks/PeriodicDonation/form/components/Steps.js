import React, {Component} from 'react';

class Steps extends Component {

  render() {


    let parterstep;

    if (this.props.burgelijkestaat === "Gehuwd" || this.props.burgelijkestaat === "Partner" ) {
      parterstep = <div className={'col-xs-3 ' + (this.props.step === 'partnergegevens' ? 'active' : '')}>
        Partnergegevens
      </div>
    }


      return (
      <div className="row form-steps">
        <div className={'col-xs-3 ' + (this.props.step === 'schenking' ? 'active' : '')}>
          Schenking
        </div>
        <div className={'col-xs-3 ' + (this.props.step === 'gegevens' ? 'active' : '')}>
          Gegevens
        </div>
        { parterstep }
        <div className={'col-xs-3 ' + (this.props.step === 'adresgegevens' ? 'active' : '')}>
          Adresgegevens
        </div>
        <div className={'col-xs-3 ' + (this.props.step === 'betaalgegevens' ? 'active' : '')}>
          Betaalgegevens
        </div>
      </div>
    );
  }
}

export default Steps;
