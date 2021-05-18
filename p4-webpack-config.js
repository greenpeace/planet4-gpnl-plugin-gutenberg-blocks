const defaultConfig = require('./node_modules/@wordpress/scripts/config/webpack.config');    // Require default Webpack config
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const DependencyExtractionWebpackPlugin = require('@wordpress/dependency-extraction-webpack-plugin');
const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  ...defaultConfig,
  entry: {

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
        test: /\.(jsx?)$/,
        exclude: /node_modules/,
        resolve: { extensions: ['.js', '.jsx'] },
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env'],
              ['@babel/preset-react'],
            ]
          }
        }
      },
    ]
  },
  plugins: [
    ...defaultConfig.plugins,
    // extract css into dedicated file
    new MiniCssExtractPlugin({
      chunkFilename: '[id].min.css',
      filename: './[name].min.css'
    }),
    new DependencyExtractionWebpackPlugin(),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/*', '!.gitignore'] // Prevent '.gitignore' to be removed.
    })
  ],
  optimization: {
    ...defaultConfig.optimization,
    minimizer: [
      // enable the css minification plugin
      new TerserJSPlugin({}),
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {
          sourceMap: true,
          map: {
            inline: false,
            annotation: true,
          }
        }
      })
    ]
  }
};

