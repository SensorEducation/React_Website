const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const commonConfig = require('./webpack.common.js');

module.exports = webpackMerge(commonConfig, {
  devtool: 'source-map',

  output: {
    filename: 'app.bundle.js'
  },

  plugins: [
    new ExtractTextPlugin('styles.bundle.css')
  ]
});
