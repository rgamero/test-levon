const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
var path = require('path');

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body',
});

const config = {
  mode: 'development',
  entry: __dirname + '/app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    port: 3000,
    host: 'localhost',
    //Be possible go back pressing the "back" button at chrome
    historyApiFallback: true,
    noInfo: false,
    stats: 'minimal',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [new HTMLWebpackPlugin({ template: './app/index.html' })],
};

module.exports = config;
