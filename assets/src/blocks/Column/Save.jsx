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
  const {verticalAlignment, width} = attributes;

  const wrapperClasses = classnames({
    [`is-vertically-aligned-${verticalAlignment}`]: verticalAlignment,
  });

  let style;
  if (Number.isFinite(width)) {
    style = {flexBasis: width + '%'};
  }

  return (
    <div className={wrapperClasses} style={style}>
      <InnerBlocks.Content/>
    </div>
  );
}
