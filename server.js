/* eslint no-console: "off" */

const path = require('path');
const webpack = require('webpack');
const express = require('express');
const devMiddleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config');

const app = express();
const compiler = webpack(config);

app.use(devMiddleware(compiler, {
  publicPath: '/',
  historyApiFallback: true,
  contentBase: path.join(__dirname, 'src'),
  stats: {
    colors: true
  }
}));

app.use(hotMiddleware(compiler));

app.get('/dll/vendor.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'dll', 'vendor.js'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Listening at http://localhost:3000/');
  }
});
