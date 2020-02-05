import React, {Component} from 'react';

class Steps extends Component {

  render() {

    let parterstep;

    if (this.props.burgelijkestaat === 'gehuwd' || this.props.burgelijkestaat === 'partner') {
      parterstep = <div className={'col ' + (this.props.step === 'partnergegevens' ? 'active' : '')}>
        <div className={'tab'}>

          <svg height="24" width="24">
            <image href={'/wp-content/plugins/planet4-gpnl-plugin-gutenberg-blocks/public/images/icons/partner' + (this.props.step === 'partnergegevens' ? '-white' : '') + '.svg'} height={'100%'} width={'100%'} />
          </svg>

        </div>
        <span>2.2 Partner</span>
      </div>;
    }

    return (
      <div className="row form-steps">
        <div className={'col ' + (this.props.step === 'schenking' ? 'active' : '')}>
          <div className={'tab'}>

            <svg height="24" width="24">
              <image href={'/wp-content/plugins/planet4-gpnl-plugin-gutenberg-blocks/public/images/icons/euro' + (this.props.step === 'schenking' ? '-white' : '') + '.svg'} height={'100%'} width={'100%'} />
            </svg>

          </div>
          <span>1. Schenking</span>
        </div>
        <div className={'col ' + (this.props.step === 'gegevens' ? 'active' : '')}>
          <div className={'tab'}>


            <svg height="24" width="24">
              <image href={'/wp-content/plugins/planet4-gpnl-plugin-gutenberg-blocks/public/images/icons/user' + (this.props.step === 'gegevens' ? '-white' : '') + '.svg'} height={'100%'} width={'100%'} />
            </svg>


          </div>
          <span>
            2. Gegevens
          </span>
        </div>
        {parterstep}
        <div className={'col ' + (this.props.step === 'adresgegevens' ? 'active' : '')}>
          <div className={'tab'}>

            <svg height="24" width="24">
              <image href={'/wp-content/plugins/planet4-gpnl-plugin-gutenberg-blocks/public/images/icons/home' + (this.props.step === 'adresgegevens' ? '-white' : '') + '.svg'} height={'100%'} width={'100%'} />
            </svg>


          </div>
          <span>3. Adres</span>
        </div>
        <div className={'col ' + (this.props.step === 'betaalgegevens' ? 'active' : '')}>
          <div className={'tab'}>

            <svg height="24" width="24">
              <image href={'/wp-content/plugins/planet4-gpnl-plugin-gutenberg-blocks/public/images/icons/card' + (this.props.step === 'betaalgegevens' ? '-white' : '') + '.svg'} height={'100%'} width={'100%'} />
            </svg>

          </div>
          <span>4. Betaling</span>
        </div>
      </div>
    );
  }
}

export default Steps;
