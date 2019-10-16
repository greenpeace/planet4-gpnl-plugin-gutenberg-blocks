function Transform() {

  return (

    {
      from: [
        {
          type: 'shortcode',
          // Shortcode tag can also be an array of shortcode aliases
          tag: 'shortcake_gpnl_inforequest',
          attributes: {
            formtitle: {
              shortcode: function (attributes) {
                return attributes.named.formtitle;
              }
            },
            itemtitle: {
              shortcode: function (attributes) {
                return attributes.named.itemtitle;
              }
            },
            mcode1_code: {
              shortcode: function (attributes) {
                return attributes.named.mcode1_code;
              }
            },
            mcode1_label: {
              shortcode: function (attributes) {
                return attributes.named.mcode1_label;
              }
            },
            mcode2_code: {
              shortcode: function (attributes) {
                return attributes.named.mcode2_code;
              }
            },
            mcode2_label: {
              shortcode: function (attributes) {
                return attributes.named.mcode2_label;
              }
            },
            mcode3_code: {
              shortcode: function (attributes) {
                return attributes.named.mcode3_code;
              }
            },
            mcode3_label: {
              shortcode: function (attributes) {
                return attributes.named.mcode3_label;
              }
            },
            mcode4_code: {
              shortcode: function (attributes) {
                return attributes.named.mcode4_code;
              }
            },
            mcode4_label: {
              shortcode: function (attributes) {
                return attributes.named.mcode4_label;
              }
            },
            mcode5_code: {
              shortcode: function (attributes) {
                return attributes.named.mcode5_code;
              }
            },
            mcode5_label: {
              shortcode: function (attributes) {
                return attributes.named.mcode5_label;
              }
            },
            consent: {
              shortcode: function (attributes) {
                return attributes.named.consent;
              }
            },
            sign: {
              shortcode: function (attributes) {
                return attributes.named.sign;
              }
            },
            hider: {
              shortcode: function (attributes) {
                return attributes.named.hider;
              }
            }
          }
        }
      ]
    }
  );
}

export default Transform();
