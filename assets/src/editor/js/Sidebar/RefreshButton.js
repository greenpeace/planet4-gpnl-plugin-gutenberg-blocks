import React from 'react'
import { Button } from '@wordpress/components';

class RefreshButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.handler(e.target.value);
  }

  render() {
    return (
      <Button isSecondary onClick={this.handleChange}>Klik voor refresh</Button>
    );
  }
}

export default RefreshButton;
