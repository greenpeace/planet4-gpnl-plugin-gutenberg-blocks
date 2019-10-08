const defaultConfig = require("./node_modules/@wordpress/scripts/config/webpack.config");    // Require default Webpack config
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserJSPlugin = require('terser-webpack-plugin');
const DependencyExtractionWebpackPlugin = require( '@wordpress/dependency-extraction-webpack-plugin' );

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
    petition: './assets/src/blocks/Petition/scss/petition.scss',

    // assets for the inforequest block
    inforequestHelper: './assets/src/blocks/Inforequest/js/InforequestHelper.js',

    // component for the address API
    addressAutofill: './assets/src/components/AddressAutofill.js',

    // assets for the donation block
    donationForm: './assets/src/blocks/Donation/js/donationform.js',
    donationFormStyle: './assets/src/blocks/Donation/scss/donationform.scss',

    // assets for the educationcovers block
    educationcoversHelper: './assets/src/blocks/Educationcovers/js/educationcoversHelper.js',
    educationcovers: './assets/src/blocks/Educationcovers/scss/educationcovers.scss',

    // Separate css files are generated for the blocks so they can be used only when required on public pages.
    heroImage: './assets/src/blocks/HeroImage/scss/hero-image.scss',
    quote: './assets/src/blocks/Quote/scss/quote.scss',
    newsletter: './assets/src/blocks/Newsletter/scss/newsletter.scss',
    inforequest: './assets/src/blocks/Inforequest/scss/inforequest.scss',

    newsletterFormSubmit: './assets/src/blocks/Newsletter/js/NewsletterFormSubmit.js',

  },
  output: {
    filename: "[name].min.js",
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
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader?modules&importLoaders=1&localIdentName=[local]_[hash:base64:6]',
          {
            loader: 'postcss-loader',
          },
        ]
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader', options: {
              sourceMap: true, modules: true,
              localIdentName: '[local]_[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              localIdentName: "[name]__[local]___[hash:base64:5]",
              modules: true,
              sourceMap: true,
            }
          },
          {
            loader: 'sass-loader', options: { sourceMap: true }
          }
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
    new DependencyExtractionWebpackPlugin(),
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
          keep_fnames: true,
        },
      }),
      new OptimizeCSSAssetsPlugin({})

    ]
  }
};
