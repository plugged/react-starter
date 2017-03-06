const path = require('path');
const webpack = require('webpack');
const vendors = require('./webpack.vendors');

module.exports = {
  devtool: 'source-map',
  entry: {
    vendor: [
      ...vendors,
      'react-proxy',
      'html-entities',
      'ansi-html',
      'ansi-regex',
      'strip-ansi',
      'global'
    ]
  },
  output: {
    path: path.join(__dirname, 'src', 'dll'),
    filename: '[name].js',
    library: '[name]'
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]',
      path: path.join(__dirname, 'src', 'dll', '[name]-manifest.json')
    })
  ]
};
