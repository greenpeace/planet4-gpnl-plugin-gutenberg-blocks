import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Preview extends Component {
  static get propTypes() {
    return {
      showBar: PropTypes.bool,
      children: PropTypes.any,
    };
  }

  render() {
    return <div className='Preview'>
      {
        this.props.showBar
          ? <div className='PreviewBar'>Preview</div>
          : null
      }
      { this.props.children }
    </div>;
  }
}
