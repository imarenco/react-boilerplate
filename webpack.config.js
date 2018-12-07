const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const env = process.env.NODE_ENV;
require('dotenv').config({ path: `./enviroment/${env}` });

module.exports = {
  mode: 'production',
  entry: {
    index: [
      '@babel/polyfill', 
      './src/index.js',
    ],
    vendor: [
      'react',
      'react-dom',
      'react-redux',
      'react-router-dom',
      'redux',
      'redux-saga',
      'prop-types',
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'static/[name].[hash].js',
    publicPath: process.env.BASE_PATH,
  },
  optimization: {
    minimize: true,
    splitChunks: { chunks: 'all', name: 'vendor' },
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      minify: {
        removeTagWhitespace: true,
        removeComments: true,
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
      },
      VERSION: JSON.stringify(process.env.npm_package_version),
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
      API_URL: JSON.stringify(process.env.API_URL),
    }),
    new CopyWebpackPlugin([
      { from: 'src/static', to: 'static' },
    ]),
    new MiniCssExtractPlugin({
      filename: 'static/style.[hash].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
};