const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: {
    index: ['./src/index.js'],
    vendor: [
      'babel-polyfill',
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
    filename: 'static/[name].[hash].js',
    chunkFilename: 'static/[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new ExtractTextPlugin({ filename: 'static/style.css', allChunks: true }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'static/vendor.js',
      minChunks: Infinity,
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      comments: false,
      sourceMap: false,
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      minify: {
        removeTagWhitespace: true,
        removeComments: true,
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
      },
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new CopyWebpackPlugin([
      { from: 'src/static', to: 'static' },
    ]),
    new BundleAnalyzerPlugin(),
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
        test: /\.scss$/,
        exclude: ['/node_modules/', path.join(__dirname, 'src/styles')],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              query: {
                minimize: true,
                modules: true,
                sourceMap: false,
                importLoaders: 2,
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
            },
            'sass-loader',
          ],
        }),
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        include: path.join(__dirname, 'src/styles'),
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              query: {
                minimize: true,
              },
            },
            'sass-loader',
          ],
        }),
      },
    ],
  },
};
