import HtmlWebPackPlugin from 'html-webpack-plugin';
import { join } from 'path';
import webpack from 'webpack';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import baseConfig from './webpack.base.config.babel';

module.exports = {
  ...baseConfig,

  entry: [
    'babel-polyfill',
    './src/index.js'
  ],

  output: {
    chunkFilename: '[name]-[chunkhash].js',
    filename: '[name]-[chunkhash].js',
    path: join(__dirname, 'dist'),
    publicPath: '/'
  },

  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },

  plugins: [
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new UglifyJsPlugin({
      uglifyOptions: {
        sourceMap: true,
        output: {
          comments: false
        }
      }
    }),
    new HtmlWebPackPlugin({
      inject: 'body',
      hash: true,
      template: './index.html'
    })
  ],
};
