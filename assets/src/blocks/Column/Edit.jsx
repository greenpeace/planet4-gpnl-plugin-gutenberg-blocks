import React from 'react';
import {InnerBlocks} from '@wordpress/block-editor';
import {Component} from '@wordpress/element';

export default class Edit extends Component {
  constructor() {
    super();

  }

  render() {

    const template = [
      [ 'core/paragraph', { placeholder: 'Begin hier te typen of kies een ander blok...' } ],
    ];

    const { attributes } = this.props;

    return (
      <div className={attributes.className}>
        <InnerBlocks
          template={ template }
          templateLock={false}
        />
      </div>
    );
  }
}
