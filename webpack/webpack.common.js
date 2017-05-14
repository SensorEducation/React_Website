const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const APP_DIR = path.resolve(__dirname, '../src/app');

module.exports = {
  entry: APP_DIR + '/app.tsx',

  resolve: {
    extensions: ['.js', '.ts','.tsx']
  },

  module: {
    loaders : [
      {
        test: /\.tsx?$/,
        include : APP_DIR,
        use: 'awesome-typescript-loader'
      },
      {
        test: /\.pcss$/,
        use: ExtractTextPlugin.extract({
          use: [
            { loader: 'css-loader', options: { modules: 1, importLoaders: 1, sourceMap: true } },
            { loader: 'postcss-loader', options: { sourceMap: true } },
          ]
        }),
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        use: 'file-loader?name=assets/[name].[hash].[ext]'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};
