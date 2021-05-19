const defaultConfig = require('./node_modules/@wordpress/scripts/config/webpack.config');    // Require default Webpack config
const entries = require('./webpack/entries');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const DependencyExtractionWebpackPlugin = require('@wordpress/dependency-extraction-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  ...defaultConfig,
  entry: entries,
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

