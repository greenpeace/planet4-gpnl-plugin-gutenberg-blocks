import React from 'react';

/**
 * WordPress dependencies
 */
import { Component, Fragment } from '@wordpress/element';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ToggleControl } from '@wordpress/components';
import PropTypes from 'prop-types';

/**
 * Inspector controls
 */
export default class Inspector extends Component {
  static get propTypes() {
    return {
      attributes: PropTypes.array,
      setAttributes: PropTypes.func,
      open: PropTypes.bool,
    };
  }
  getDisplayOpenHelp( checked ) {
    return checked ? 'Uitklapper is standaard open.' : 'Zet aan om uitklapper standaard geopend te tonen.';
  }

  render() {
    const {
      attributes,
      setAttributes,
    } = this.props;

    const {
      open,
    } = attributes;

    return (
      <Fragment>
        <InspectorControls>
          <PanelBody title={ 'Uitklap instellingen' }>
            <ToggleControl
              label={ 'Toon geopend' }
              checked={ !! open }
              help={ this.getDisplayOpenHelp }
              onChange={ () => setAttributes( { open: ! open } ) }
            />
          </PanelBody>
        </InspectorControls>
      </Fragment>
    );
  }
}
