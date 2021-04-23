const defaultConfig = require('./node_modules/@wordpress/scripts/config/webpack.config');    // Require default Webpack config
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const DependencyExtractionWebpackPlugin = require('@wordpress/dependency-extraction-webpack-plugin');


module.exports = {
  ...defaultConfig,
  entry: {

    columns: './assets/src/blocks/Columns/render.jsx',
    socialMessage: './assets/src/blocks/SocialMessage/render.jsx',

    // assets for the editor (backend)
    editorIndex: './assets/src/editor/js/editorIndex.js',
    clickTracking: './assets/src/editor/js/Sidebar/clickTracking.js',
    'editor-style': './assets/src/editor/scss/editor-styles.scss',


    // assets for the educationcovers block
    educationcoversHelper: './assets/src/blocks/Educationcovers/js/educationcoversHelper.js',
    educationcovers: './assets/src/blocks/Educationcovers/scss/educationcovers.scss',

    // assets for the inforequest block
    inforequestHelper: './assets/src/blocks/Inforequest/js/InforequestHelper.js',

    heroImageRendering: './assets/src/blocks/HeroImage/js/heroImageRendering.js',

    // Separate css files are generated for the blocks so they can be used only when required on public pages.
    'hero-image': './assets/src/blocks/HeroImage/scss/hero-image.scss',
    quote: './assets/src/blocks/Quote/scss/quote.scss',

    // Assets for the collapsible block.
    collapsible: './assets/src/blocks/Collapsible/scss/collapsible.scss',

    testimonial: './assets/src/blocks/Testimonial/scss/testimonial.scss',

    modal: './assets/src/blocks/Modal/styles/frontend.scss',
    'pdf-embed': './assets/src/blocks/PdfEmbed/styles/public.scss',
    'profile-picture-overlay': './assets/src/blocks/ProfilePictureOverlay/publicIndex.js',
    'ship-naming-competition':  './assets/src/blocks/ShipCompetition/publicIndex.js',

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
          // Extract CSS files from build
          MiniCssExtractPlugin.loader,
          // Turn css into CommonJS
          'css-loader',
          // Autoprefix using postCSS
          'postcss-loader',
          // Sass -> css
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
