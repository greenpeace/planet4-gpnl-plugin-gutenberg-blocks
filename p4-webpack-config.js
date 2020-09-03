const defaultConfig = require('./node_modules/@wordpress/scripts/config/webpack.config');    // Require default Webpack config
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const DependencyExtractionWebpackPlugin = require('@wordpress/dependency-extraction-webpack-plugin');

module.exports = {
  ...defaultConfig,
  entry: {

    columns: './assets/src/blocks/Columns/Frontend.jsx',
    socialMessage: './assets/src/blocks/SocialMessage/render.jsx',

    // assets for the editor (backend)
    editorIndex: './assets/src/editor/js/editorIndex.js',
    'editor-style': './assets/src/editor/scss/editor-styles.scss',

    // assets that are used in the petition block.
    jaltLanding: './assets/src/blocks/Petition/js/jalt-landing.js',
    socialBlueLanding: './assets/src/blocks/Petition/js/socialBlueLanding.js',
    onload: './assets/src/blocks/Petition/js/onload.js',
    onsubmit: './assets/src/blocks/Petition/js/onsubmit.js',
    petition: './assets/src/blocks/Petition/scss/petition.scss',

    // assets for the inforequest block
    inforequestHelper: './assets/src/blocks/Inforequest/js/InforequestHelper.js',

    // component for the address API
    addressAutofill: './assets/src/components/AddressAutofill.js',

    // assets for the donation block
    donationForm: './assets/src/blocks/Donation/js/donationForm.js',
    'donation-form': './assets/src/blocks/Donation/scss/donationform.scss',

    // assets for the educationcovers block
    educationcoversHelper: './assets/src/blocks/Educationcovers/js/educationcoversHelper.js',
    educationcovers: './assets/src/blocks/Educationcovers/scss/educationcovers.scss',

    // assets for the two-column-embed block
    'two-column-embed': './assets/src/blocks/TwoColumnEmbed/scss/two-column-embed.scss',

    heroImageRendering: './assets/src/blocks/HeroImage/js/heroImageRendering.js',

    // Separate css files are generated for the blocks so they can be used only when required on public pages.
    'hero-image': './assets/src/blocks/HeroImage/scss/hero-image.scss',
    quote: './assets/src/blocks/Quote/scss/quote.scss',
    newsletter: './assets/src/blocks/Newsletter/scss/newsletter.scss',
    inforequest: './assets/src/blocks/Inforequest/scss/inforequest.scss',

    newsletterFormSubmit: './assets/src/blocks/Newsletter/js/NewsletterFormSubmit.js',
    // Assets for the collapsible block.
    collapsible: './assets/src/blocks/Collapsible/scss/collapsible.scss',

    // periodicDonationForm: './assets/src/blocks/PeriodicDonation/form/ColumnBlock.jsx',
    // brochureRequestForm: './assets/src/blocks/BrochureRequest/form/ColumnBlock.jsx',
    testimonial: './assets/src/blocks/Testimonial/scss/testimonial.scss'

  },
  output: {
    filename: '[name].min.js',
    path: __dirname + '/assets/build'
  },
  module: {
    ...defaultConfig.module,

    rules: [
      ...defaultConfig.module.rules,
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        resolve: { extensions: ['.js', '.jsx'] },
        use: ['babel-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use:
          ['url-loader']
      },
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    ...defaultConfig.plugins,
    // extract css into dedicated file
    new MiniCssExtractPlugin({
      chunkFilename: '[id].min.css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
      filename: './[name].min.css'
    }),
    new DependencyExtractionWebpackPlugin()
  ],
  optimization: {
    ...defaultConfig.optimization,
    minimize: true,
    minimizer: [
      // enable the css minification plugin
      new TerserJSPlugin({
        test: /\.js(\?.*)?$/i,
        parallel: true,
        sourceMap: true,
        terserOptions: {
          keep_fnames: true
        }
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  }
};
