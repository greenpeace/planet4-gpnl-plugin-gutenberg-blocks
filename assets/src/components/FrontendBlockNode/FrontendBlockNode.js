/* eslint-disable */
import {Component} from '@wordpress/element';
import React from 'react';
/**
 * This component is used in the `save()` method of `registerBlock`,
 * via the `frontendRendered` function, to render React blocks in the frontend.
 *
 * Be careful! Making changes in this component or in the `frontendRendered`
 * function could potentially cause block validation errors in Gutenberg.
 */
export class FrontendBlockNode extends Component {
  render() {
    return <div className={this.props.className}
      data-gpnl-render={this.props.blockName}
      data-attributes={JSON.stringify(this.props.attributes)}/>;
  }
}
/* eslint-enable */
