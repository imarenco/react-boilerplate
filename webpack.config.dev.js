const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
const HtmlWebpackPlugin = require('html-webpack-plugin');

dotenv.config({path: `./enviroment/${process.env.NODE_ENV}`});

module.exports = {
  mode: 'development',
  entry: [
    '@babel/polyfill',
    'webpack-dev-server/client?http://localhost:4200',
    'webpack/hot/only-dev-server',
    './src/index.js',
  ],
  output: {
    filename: 'static/bundle.js',
  },
  devServer: {
    hot: true,
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'src'),
    port: 4200,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      VERSION: JSON.stringify(process.env.npm_package_version),
    }),
    new webpack.DefinePlugin({
      API_URL: JSON.stringify(process.env.API_URL),
    }),
  ],
  optimization: {
    namedModules: true,
  },
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
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      }
    ],
  },
};