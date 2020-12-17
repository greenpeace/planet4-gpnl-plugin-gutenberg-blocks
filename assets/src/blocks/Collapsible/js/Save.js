import React from 'react';

import { RichText, InnerBlocks } from '@wordpress/block-editor';

const save = ( { attributes } ) => {
  const {
    open,
    title,
  } = attributes;

  return (
	  // By default the className is 'wp-blokcs-{blockName}'. By changing the className this is added to the class.
    <div>
      {/* Only saving this block if  a title is set. */}
      { ! RichText.isEmpty( title ) &&
			<details open={ open }>
			  <RichText.Content
			    tagName="summary"
			    className={ 'title' }
			    value={ title }
			  />
			  <div className="content">
			    <InnerBlocks.Content />
			  </div>
			</details>
      }
    </div>
  );
};

export default save;
