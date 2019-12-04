function Transform() {

  return (

    {
      from: [
        {
          type: 'shortcode',
          // Shortcode tag can also be an array of shortcode aliases
          tag: 'shortcake_gpnl_newsletter',
          attributes: {
            title: {
              shortcode: function (attributes) {
                return attributes.named.title;
              }
            },
            subtitle: {
              shortcode: function (attributes) {
                return attributes.named.subtitle;
              }
            },
            background: {
              shortcode: function (attributes) {
                return Number(attributes.named.background);
              }
            },
            opacity: {
              shortcode: function (attributes) {
                return Number(attributes.named.opacity);
              }
            },
            marketingcode: {
              shortcode: function (attributes) {
                return attributes.named.marketingcode;
              }
            },
            literaturecode: {
              shortcode: function (attributes) {
                return attributes.named.literaturecode;
              }
            },
            screenid: {
              shortcode: function (attributes) {
                return attributes.named.screenid;
              }
            },
            form_id: {
              shortcode: function (attributes) {
                return Number(attributes.named.form_id);
              }
            }
          }
        }
      ]
    }
  );
}

export default Transform();
