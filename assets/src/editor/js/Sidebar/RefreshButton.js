import React from 'react'
import { Button } from '@wordpress/components';

class RefreshButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log("Refreshing content state")
    this.props.handler(e.target.value);
  }

  render() {
    return (
      <Button isSecondary onChange={this.handleChange}>Klik voor refresh</Button>
    );
  }
}

export default RefreshButton
