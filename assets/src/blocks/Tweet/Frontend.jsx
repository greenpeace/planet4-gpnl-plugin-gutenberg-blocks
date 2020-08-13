import { TweetComponent } from './TweetComponent';

document.querySelectorAll( '[data-gpnl-render]' ).forEach(
  blockNode => {
    const attributes = JSON.parse( blockNode.dataset.attributes );
    wp.element.render( <TweetComponent { ...attributes.attributes } />, blockNode );
  }
);
