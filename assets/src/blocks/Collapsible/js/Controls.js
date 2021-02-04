/**
 * Internal dependencies
 */
import Icon from './IconOpen';

/**
 * WordPress dependencies
 */
import React from 'react';
import { Component, Fragment } from '@wordpress/element';
import { BlockControls } from '@wordpress/block-editor';
import { Toolbar } from '@wordpress/components';
import PropTypes from 'prop-types';

class Controls extends Component {
  static get propTypes() {
    return {
      attributes: PropTypes.array,
      setAttributes: PropTypes.func
    };
  }

  render() {
    const {
      attributes,
      setAttributes,
    } = this.props;

    const {
      open,
    } = attributes;

    const customControls = [
      {
        icon: Icon,
        title: 'Toon geopend',
        onClick: () => setAttributes( { open: ! open } ),
        isActive: open === true,
      },
    ];

    return (
      <Fragment>
        <BlockControls>
          <Toolbar controls={ customControls } />
        </BlockControls>
      </Fragment>
    );
  }
}

export default Controls;
