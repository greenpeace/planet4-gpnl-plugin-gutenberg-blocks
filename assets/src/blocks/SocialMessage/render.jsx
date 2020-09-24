/**
 * This file is used as the entry file on the frontend (but not the editor), to generate the React component based on the attributes that are saved in the HTML in the dataset.
 */

import { Frontend } from './Frontend';

document.querySelectorAll( '[data-gpnl-render]' ).forEach(
  blockNode => {
    const attributes = JSON.parse( blockNode.dataset.attributes );
    wp.element.render( <Frontend { ...attributes.attributes } />, blockNode );
  }
);
