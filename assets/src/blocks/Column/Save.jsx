/**
 * External dependencies
 */
import classnames from 'classnames';
import React from 'react';

/**
 * WordPress dependencies
 */
import {InnerBlocks} from '@wordpress/block-editor';

export default function Save({attributes}) {

  return (
    <div className={attributes.className}>
      <InnerBlocks.Content/>
    </div>
  );
}
