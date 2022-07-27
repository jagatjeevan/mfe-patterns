const { merge } = require('webpack-merge');
const HtmlWelpackPlugin = require('html-webpack-plugin');

const commonConfig = require('./webpack.common');

const devConfig = {
  mode: 'development',
  devServer: {
    port: 3001,
    historyApiFallback: {
      index: 'index.html'
    }
  },
  plugins: [
    new HtmlWelpackPlugin({
      template: './public/index.html'
    })  
  ],
  entry: {
    products: './src/index.js'
  },
  output: {
    filename: '[name].bundle.js',
  }
}

module.exports = merge(commonConfig, devConfig);

