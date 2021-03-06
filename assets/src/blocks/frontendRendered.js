import { FrontendBlockNode } from '../components/FrontendBlockNode/FrontendBlockNode';
import React from 'react';
/**
 * This function is used in the `save()` method of `registerBlock` to
 * render React blocks in the frontend.
 *
 * Be careful! Making changes in this function or in the `FrontendBlockNode`
 * component could potentially cause block validation errors in Gutenberg.
 *
 * @param {string} block
 */
// eslint-disable-next-line react/display-name
export const frontendRendered = ( block ) => ( attributes, className ) => {

  return <FrontendBlockNode
    attributes={ attributes }
    className={ className }
    blockName={ block }
  />;
};
