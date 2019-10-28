function Transform() {

  return (

    {
      from: [
        {
          type: 'shortcode',
          // Shortcode tag can also be an array of shortcode aliases
          tag: 'shortcake_donation',
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
            suggested_frequency: {
              shortcode: function (attributes) {
                return attributes.named.suggested_frequency;
              }
            },
            allow_frequency_override: {
              shortcode: function (attributes) {
                return Boolean(attributes.named.allow_frequency_override);
              }
            },
            min_amount: {
              shortcode: function (attributes) {
                return Number(attributes.named.min_amount);
              }
            },
            oneoff_amount1: {
              shortcode: function (attributes) {
                return Number(attributes.named.oneoff_amount1);
              }
            },
            oneoff_amount2: {
              shortcode: function (attributes) {
                return Number(attributes.named.oneoff_amount2);
              }
            },
            oneoff_amount3: {
              shortcode: function (attributes) {
                return Number(attributes.named.oneoff_amount3);
              }
            },
            oneoff_suggested_amount: {
              shortcode: function (attributes) {
                return Number(attributes.named.oneoff_suggested_amount);
              }
            },
            recurring_amount1: {
              shortcode: function (attributes) {
                return Number(attributes.named.recurring_amount1);
              }
            },
            recurring_amount2: {
              shortcode: function (attributes) {
                return Number(attributes.named.recurring_amount2);
              }
            },
            recurring_amount3: {
              shortcode: function (attributes) {
                return Number(attributes.named.recurring_amount3);
              }
            },
            recurring_suggested_amount: {
              shortcode: function (attributes) {
                return Number(attributes.named.recurring_suggested_amount);
              }
            },
            thanktitle: {
              shortcode: function (attributes) {
                return attributes.named.thanktitle;
              }
            },
            thankdescription: {
              shortcode: function (attributes) {
                return attributes.named.thankdescription;
              }
            },
            literatuurcode: {
              shortcode: function (attributes) {
                return attributes.named.literatuurcode;
              }
            },
            marketingcode_recurring: {
              shortcode: function (attributes) {
                return attributes.named.marketingcode_recurring;
              }
            },
            marketingcode_oneoff: {
              shortcode: function (attributes) {
                return attributes.named.marketingcode_oneoff;
              }
            },
            returnpage: {
              shortcode: function (attributes) {
                return attributes.named.returnpage;
              }
            },
            errorpage: {
              shortcode: function (attributes) {
                return attributes.named.errorpage;
              }
            }
          }
        }
      ]
    }
  );
}

export default Transform();
