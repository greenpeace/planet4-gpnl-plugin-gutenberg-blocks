import { TweetFrontend } from './TweetFrontend';

document.querySelectorAll( '[data-render]' ).forEach(
  blockNode => {
    const attributes = JSON.parse( blockNode.dataset.attributes );
    wp.element.render( <TweetFrontend { ...attributes.attributes } />, blockNode );
  }
);
