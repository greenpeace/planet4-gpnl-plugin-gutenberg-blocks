import React from 'react';
import { Button } from '@wordpress/components';
import PropTypes from 'prop-types';

class RefreshButton extends React.Component {
  static get propTypes() {
    return {
      handler: PropTypes.func,
    };
  }

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
