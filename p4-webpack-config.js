const defaultConfig = require("./node_modules/@wordpress/scripts/config/webpack.config");    // Require default Webpack config
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserJSPlugin = require('terser-webpack-plugin');

module.exports = {
  ...defaultConfig,
  entry: {
    // assets for the editor (backend)
    editorIndex: './assets/src/editor/js/editorIndex.js',
    editorStyle: './assets/src/editor/scss/editor-styles.scss',

    // assets that are used in the petition block.
    jaltLanding: './assets/src/blocks/Petition/js/jalt-landing.js',
    socialBlueLanding: './assets/src/blocks/Petition/js/social-blue-landing.js',
    onload: './assets/src/blocks/Petition/js/onload.js',
    onsubmit: './assets/src/blocks/Petition/js/onsubmit.js',

    // Separate css files are generated for the blocks so they can be used only when required on public pages.
    heroImage: './assets/src/blocks/HeroImage/scss/hero-image.scss',
    quote: './assets/src/blocks/Quote/scss/quote.scss',
    newsletter: './assets/src/blocks/Newsletter/scss/newsletter.scss',
    petition: './assets/src/blocks/Petition/scss/petition.scss',
    test: './assets/src/blocks/Test/scss/test.scss',
    // media: './assets/src/blocks/Media/scss/media.scss',

    newsletterFormSubmit: './assets/src/blocks/Newsletter/js/NewsletterFormSubmit.js',

  },
  output: {
    filename: '[name].js',
    path: __dirname + '/assets/build'
  },
  module: {
    ...defaultConfig.module,
    rules: [
      ...defaultConfig.module.rules,
      {
        test: /\.(sass|scss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'resolve-url-loader', 'sass-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use:
          ['url-loader']
      }
    ]
  },
  plugins: [
    ...defaultConfig.plugins,
    // extract css into dedicated file
    new MiniCssExtractPlugin({
      chunkFilename: '[id].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
      filename: './[name].min.css'
    }),
  ],
  optimization: {
    ...defaultConfig.optimization,
    minimizer: [
      // enable the css minification plugin
      new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})
    ]
  }
};
