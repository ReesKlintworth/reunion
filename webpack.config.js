var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/static/js');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: APP_DIR + '/app/index.jsx',
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel'
      },
    ]
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
};

module.exports = config;
