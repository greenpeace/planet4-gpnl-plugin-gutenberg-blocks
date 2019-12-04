function Transform() {

  return (

    {
      from: [
        {
          type: 'shortcode',
          // Shortcode tag can also be an array of shortcode aliases
          tag: 'shortcake_gpnl_quote',
          attributes: {
            quote: {
              shortcode: function (attributes) {
                return attributes.named.quote;
              }
            },
            quotee: {
              shortcode: function (attributes) {
                return attributes.named.quotee;
              }
            },
            // Converting the image to a number, because in reality we store the image_id and NOT AS A STRING ANYMORE!
            image: {
              shortcode: function (attributes) {
                return Number(attributes.named.image);
              }
            },
          }
        }
      ]
    }
  );
}

export default Transform();
