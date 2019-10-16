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
              shortcode: function (attributes) {
                return attributes.named.title;
              }
            },
            description: {
              shortcode: function (attributes) {
                return attributes.named.description;
              }
            },
            column_title: {
              shortcode: function (attributes) {
                return attributes.named.column_title;
              }
            },
            column_description: {
              shortcode: function (attributes) {
                return attributes.named.column_description;
              }
            },
            column_cta_text: {
              shortcode: function (attributes) {
                return attributes.named.column_cta_text;
              }
            },
            column_cta_link: {
              shortcode: function (attributes) {
                return attributes.named.column_cta_link;
              }
            },
            embed_option: {
              shortcode: function (attributes) {
                return attributes.named.embed_option;
              }
            },
            iframe_src: {
              shortcode: function (attributes) {
                return attributes.named.iframe_src;
              }
            },
            iframe_height: {
              shortcode: function (attributes) {
                return Number(attributes.named.iframe_height);
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
