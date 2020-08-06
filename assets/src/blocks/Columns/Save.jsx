import React from 'react';

import {InnerBlocks} from '@wordpress/block-editor';

function Save(props) {

  const {attributes} = props;

  return (
  <section className={'block' + ' ' + attributes.background}>
	<div className={'row'}>
	  <InnerBlocks.Content/>
	  {attributes.content}
	</div>
  </section>
  )
}

export default Save;
