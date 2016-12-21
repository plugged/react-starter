const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HappyPack = require('happypack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.ProgressPlugin({
      profile: true
    }),
    new webpack.LoaderOptionsPlugin({
      debug: true,
      options: {
        context: __dirname,
        postcss: [
          autoprefixer({browsers: 'last 2 versions'}),
        ],
      },
    }),
    new HappyPack({
      id: 'babel',
      loaders: ['babel-loader']
    })
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      // loader: 'happypack/loader?id=babel', // todo
      include: path.join(__dirname, 'src')
    }, {
      test: /\.scss$/,
      exclude: path.join(__dirname, 'src', 'app'),
      loaders: ['style-loader', 'css-loader?sourceMap', 'postcss-loader', 'sass-loader?sourceMap']
    }]
  }
};
