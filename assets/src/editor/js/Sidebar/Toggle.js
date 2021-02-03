import React from 'react';
import PropTypes from 'prop-types';

class Toggle extends React.Component {
  static get propTypes() {
    return {
      handler: PropTypes.func,
      state: PropTypes.bool,
    };
  }

  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e)
  {
    this.props.handler(e.target.value);
  }

  render()
  {
    const state = this.props.state;
    return (
      <div className="custom-control custom-switch">
        <input type="checkbox" className="custom-control-input" id="customSwitch1"
          checked={state ? 'checked' : ''}
          onChange={this.handleClick}>
        </input>
        <label className="custom-control-label" htmlFor="customSwitch1">Er worden {state ? '' : 'geen'} handelingen op deze pagina geteld</label>
      </div>
    );
  }
}

export default Toggle;
