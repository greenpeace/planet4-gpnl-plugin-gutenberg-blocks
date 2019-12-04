function Transform() {

  return (

    {
      from: [
        {
          type: 'shortcode',
          // Shortcode tag can also be an array of shortcode aliases
          tag: 'shortcake_petition',
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
            // Converting the image to a number, because in reality we store the image_id and NOT AS A STRING ANYMORE!
            image: {
              shortcode: function (attributes) {
                return Number(attributes.named.image);
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
            campaignpolicy: {
              shortcode: function (attributes) {
                return attributes.named.campaignpolicy;
              }
            },
            thanktitle: {
              shortcode: function (attributes) {
                return attributes.named.thanktitle;
              }
            },
            thanktext: {
              shortcode: function (attributes) {
                return attributes.named.thanktext;
              }
            },
            donatebuttontext: {
              shortcode: function (attributes) {
                return attributes.named.donatebuttontext;
              }
            },
            donatebuttonlink: {
              shortcode: function (attributes) {
                return attributes.named.donatebuttonlink;
              }
            },
            hidesharingbuttons: {
              shortcode: function (attributes) {
                return attributes.named.hidesharingbuttons;
              }
            },
            twittertext: {
              shortcode: function (attributes) {
                return attributes.named.twittertext;
              }
            },
            whatsapptext: {
              shortcode: function (attributes) {
                return attributes.named.whatsapptext;
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
            campaigncode: {
              shortcode: function (attributes) {
                return attributes.named.campaigncode;
              }
            },
            countermin: {
              shortcode: function (attributes) {
                return Number(attributes.named.countermin);
              }
            },
            countermax: {
              shortcode: function (attributes) {
                return Number(attributes.named.countermax);
              }
            },
            countertext: {
              shortcode: function (attributes) {
                return attributes.named.countertext;
              }
            },
            ga_action: {
              shortcode: function (attributes) {
                return attributes.named.ga_action;
              }
            },
            ad_campaign: {
              shortcode: function (attributes) {
                return attributes.named.ad_campaign;
              }
            },
            apref: {
              shortcode: function (attributes) {
                return attributes.named.apref;
              }
            },
            jalt_track: {
              shortcode: function (attributes) {
                return attributes.named.jalt_track;
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
