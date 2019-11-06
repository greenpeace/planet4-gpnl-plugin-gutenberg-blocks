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
      ]
    }
  );
}

export default Transform();
