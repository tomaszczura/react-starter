import HtmlWebPackPlugin from 'html-webpack-plugin';
import { resolve, join } from 'path';
import baseConfig from './webpack.base.config.babel';

const appPath = resolve(__dirname, 'src');

module.exports = {
  ...baseConfig,

  devtool: 'eval', // Enable line-based sourcemaps
  entry: [
    'babel-polyfill',
    './src/index.js'
  ],
  output: {
    filename: 'bundle.js',
    publicPath: '/',
    path: join(__dirname, 'dist')
  },

  devServer: {
    contentBase: appPath,
    historyApiFallback: true,
    quiet: false,
    noInfo: false,
    inline: true,
    hot: true,
    stats: {
      chunkModules: false,
      modules: false,
      assets: false,
      chunks: false,
      children: false,
      hash: false,
      version: false,
    },
  },

  plugins: [
    new HtmlWebPackPlugin({
      inject: 'body',
      template: './index.html'
    })
  ],
};
