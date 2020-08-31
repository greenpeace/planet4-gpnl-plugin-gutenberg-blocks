import React from 'react'

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

    handleClick(e)
    {
      console.log("Toggling actions tracker")
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

export default Toggle
