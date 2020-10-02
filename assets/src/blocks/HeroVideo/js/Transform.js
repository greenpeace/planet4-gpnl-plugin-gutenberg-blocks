function Transform() {

  return (

    {
      from: [
        {
          type: 'shortcode',
          // Shortcode tag can also be an array of shortcode aliases
          tag: 'shortcake_gpnl_hero',
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
            // Converting the image to a number, because in reality we store the image_id and NOT AS A STRING ANYMORE!
            image: {
              shortcode: function (attributes) {
                return Number(attributes.named.image);
              }
            },
            link_text: {
              shortcode: function (attributes) {
                return attributes.named.link_text;
              }
            },
            link_url: {
              shortcode: function (attributes) {
                return attributes.named.link_url;
              }
            },
            small: {
              shortcode: function (attributes) {
                return attributes.named.small;
              }
            }
          }
        }
      ]
    }
  );
}

export default Transform();
