import React from 'react';
import { InnerBlocks } from '@wordpress/block-editor';
import { Component } from '@wordpress/element';

export class Editor extends Component {
  constructor() {
    super();
  }

  render() {

    return (
      <div className={this.props.attributes.className}>
        <InnerBlocks
          templateLock={false}
        />
      </div>
    );
  }
}

export default Editor;
