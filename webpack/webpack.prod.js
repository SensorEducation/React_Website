const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const commonConfig = require('./webpack.common.js');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, '../dist');

module.exports = webpackMerge(commonConfig, {
  output: {
    path: BUILD_DIR,
    filename: 'app.[hash].bundle.js'
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin('styles.[hash].bundle.css'),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/,
      cssProcessorOptions: { discardComments: { removeAll: true } }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ]
});
