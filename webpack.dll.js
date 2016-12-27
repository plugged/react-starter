const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: {
    vendor: [
      'react',
      'react-dom',
      'react-hot-loader',
      'react-redux',
      'redux',

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
