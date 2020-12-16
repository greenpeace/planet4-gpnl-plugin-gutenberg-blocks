import {createBlock} from '@wordpress/blocks';

function Transform() {

  return (
    {
      from: [
        {
          type: 'shortcode',
          // Shortcode tag can also be an array of shortcode aliases
          tag: 'shortcake_gpnl_2colembed',
          attributes: {
            title: {
              type: 'string',
              shortcode: function (attributes) {
                let title = attributes.named.title ? attributes.named.title : '';
                return title.replace( 'title', '' );
              }
            },
            description: {
              type: 'string',
              shortcode: function (attributes) {
                let description = attributes.named.description ? attributes.named.description : '';
                return description.replace( 'description', '' );
              }
            },
            column_title: {
              type: 'string',
              shortcode: function (attributes) {
                let column_title = attributes.named.column_title ? attributes.named.column_title : '';
                return column_title.replace( 'column_title', '' );
              }
            },
            column_description: {
              type: 'string',
              shortcode: function (attributes) {
                let column_description = attributes.named.column_description ? attributes.named.column_description : '';
                return column_description.replace( 'column_description', '' );
              }
            },
            column_cta_text: {
              type: 'string',
              shortcode: function (attributes) {
                let column_cta_text = attributes.named.column_cta_text ? attributes.named.column_cta_text : '';
                return column_cta_text.replace( 'column_cta_text', '' );
              }
            },
            column_cta_link: {
              shortcode: function (attributes) {
                let column_cta_link = attributes.named.column_cta_link ? attributes.named.column_cta_link : '';
                return column_cta_link.replace( 'column_cta_link', '' );
              }
            },
            embed_option: {
              shortcode: function (attributes) {
                return attributes.named.embed_option;
              }
            },
            iframe_src: {
              shortcode: function (attributes) {
                let iframe_src = attributes.named.iframe_src ? attributes.named.iframe_src : '';
                return iframe_src.replace( 'iframe_src', '' );
              }
            },
            iframe_height: {
              shortcode: function (attributes) {
                return Number(attributes.named.iframe_height) || 400;
              }
            },
            image: {
              shortcode: function (attributes) {
                return Number(attributes.named.image) || null;
              }
            },
            column_size: {
              shortcode: function (attributes) {
                return attributes.named.column_size;
              }
            }
          }
        }
      ],
      to: [
        {
          type: 'block',
          blocks: [ 'planet4-gpnl-blocks/columns', 'planet4-gpnl-blocks/column' ],
          transform: ( content ) => {
            let columnsBlock = [];
            let contentLeft = [];
            let contentRight = [];

            console.log(content);

            if (content.title !== ''){
              var mainHeading = createBlock( 'core/heading', {'content':content.title} );
              columnsBlock.push(mainHeading);
            }
            if (content.column_title !== ''){
              var columnHeading = createBlock( 'core/heading', {'content':content.column_title} );
              contentLeft.push(columnHeading);
            }
            var columnText = createBlock( 'core/paragraph', {'content':content.column_description} );
            contentLeft.push(columnText);

            if (content.column_cta_text !== '') {
              var button = createBlock( 'core/button', {
                'url': content.column_cta_link,
                'text': content.column_cta_text
              } );
              contentLeft.push(button);
            }

            if (typeof content.image !== 'undefined'){
              var image = getImage(content.image);
              contentRight = [image];
            }
            else {
              var iframe = createBlock( 'core/embed', {'url':content.iframe_src} );
              contentRight = [iframe];
            }


            let columnLeft = createBlock( 'planet4-gpnl-blocks/column', {className: 'col-12 col-md-' + content.column_size}, contentLeft );
            let columnRight = createBlock( 'planet4-gpnl-blocks/column', {className: 'col-12 col-md-' + (12 - content.column_size)}, contentRight );


            let distribution = (content.column_size == 6) ? 'even' : 'leftBig';
            let columnsAttributes = {'numberOfColumns':2,'distributionOfColumns':distribution};
            let columns = createBlock( 'planet4-gpnl-blocks/columns' , columnsAttributes, [columnLeft, columnRight] );
            columnsBlock.push(columns);
            return columnsBlock;
          },
        }
      ]
    }
  );
}

function getImage(imageID){
  let imagedata = wp.data.select('core').getMedia(imageID);
  return createBlock( 'core/image', {'id':parseInt(imageID),'url':imagedata.source_url} );
}

export default Transform();
