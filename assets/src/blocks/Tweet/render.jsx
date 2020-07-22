import { TweetFrontend } from './TweetFrontend';
import './styles/font-end.scss';

document.querySelectorAll( '[data-gpnl-render]' ).forEach(
  blockNode => {
    const attributes = JSON.parse( blockNode.dataset.attributes );
    wp.element.render( <TweetFrontend { ...attributes.attributes } />, blockNode );
  }
);
