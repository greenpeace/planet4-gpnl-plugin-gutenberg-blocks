import React, {Component} from 'react';

class Steps extends Component {

  render() {


    let parterstep;

    if (this.props.burgelijkestaat === 'Gehuwd' || this.props.burgelijkestaat === 'Partner') {
      parterstep = <div className={'col ' + (this.props.step === 'partnergegevens' ? 'active' : '')}>
        <div className={'tab'}>

          <svg height="24" width="24">
            <image href={'/wp-content/plugins/planet4-gpnl-plugin-gutenberg-blocks/public/images/icons/partner.svg'} height={'100%'} width={'100%'} />
          </svg>

        </div>
        <span>2.2 Partner</span>
      </div>;
    }

    return (
      <div className="row form-steps">
        <div className={'col ' + (this.props.step === 'schenking' ? 'active' : '')}>
          <div className={'tab'}>

            {/*<svg width="200" height="200" >*/}
            <svg height="24" width="24">
              <image href={'/wp-content/plugins/planet4-gpnl-plugin-gutenberg-blocks/public/images/icons/euro.svg'} height={'100%'} width={'100%'} />
            </svg>

            {/*<img src= height={'24'}/>*/}

          </div>
          <span>Schenking</span>
        </div>
        <div className={'col ' + (this.props.step === 'gegevens' ? 'active' : '')}>
          <div className={'tab'}>


            <svg height="24" width="24">
              <image href={'/wp-content/plugins/planet4-gpnl-plugin-gutenberg-blocks/public/images/icons/user.svg'} height={'100%'} width={'100%'} />
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
              <image href={'/wp-content/plugins/planet4-gpnl-plugin-gutenberg-blocks/public/images/icons/home.svg'} height={'100%'} width={'100%'} />
            </svg>


          </div>
          <span>3. Adres</span>
        </div>
        <div className={'col ' + (this.props.step === 'betaalgegevens' ? 'active' : '')}>
          <div className={'tab'}>

            <svg height="24" width="24">
              <image href={'/wp-content/plugins/planet4-gpnl-plugin-gutenberg-blocks/public/images/icons/card.svg'} height={'100%'} width={'100%'} />
            </svg>

          </div>
          <span>4. Betaling</span>
        </div>
      </div>
    );
  }
}

export default Steps;
