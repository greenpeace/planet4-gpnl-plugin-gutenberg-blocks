const path = require('path');

const entries = {

  columns: path.resolve(__dirname, './assets/src/blocks/Columns/render.jsx' ),
  socialMessage: path.resolve(__dirname, './assets/src/blocks/SocialMessage/render.jsx' ),

  // assets for the editor (backend)
  editorIndex: path.resolve(__dirname, './assets/src/editor/js/editorIndex.js' ),
  clickTracking: path.resolve(__dirname, './assets/src/editor/js/Sidebar/clickTracking.js' ),
  'editor-style': path.resolve(__dirname, './assets/src/editor/scss/editor-styles.scss' ),
  eActivismCounter: './assets/src/editor/js/Sidebar/clickTracking.js',


  // assets for the educationcovers block
  educationcoversHelper: path.resolve(__dirname, './assets/src/blocks/Educationcovers/js/educationcoversHelper.js' ),
  educationcovers: path.resolve(__dirname, './assets/src/blocks/Educationcovers/scss/educationcovers.scss' ),

  // assets for the inforequest block
  inforequestHelper: path.resolve(__dirname, './assets/src/blocks/Inforequest/js/InforequestHelper.js' ),

  heroImageRendering: path.resolve(__dirname, './assets/src/blocks/HeroImage/js/heroImageRendering.js' ),

  // Separate css files are generated for the blocks so they can be used only when required on public pages.
  'hero-image': path.resolve(__dirname, './assets/src/blocks/HeroImage/scss/hero-image.scss' ),
  quote: path.resolve(__dirname, './assets/src/blocks/Quote/scss/quote.scss' ),

  // Assets for the collapsible block.
  collapsible: path.resolve(__dirname, './assets/src/blocks/Collapsible/scss/collapsible.scss' ),

  testimonial: path.resolve(__dirname, './assets/src/blocks/Testimonial/scss/testimonial.scss' ),

  modal: path.resolve(__dirname, './assets/src/blocks/Modal/styles/frontend.scss' ),
  'pdf-embed': path.resolve(__dirname, './assets/src/blocks/PdfEmbed/styles/public.scss' ),
  'profile-picture-overlay': path.resolve(__dirname, './assets/src/blocks/ProfilePictureOverlay/publicIndex.js' ),

};

module.exports = entries;
