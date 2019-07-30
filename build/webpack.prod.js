/* create by Micheal Xiao 2019/7/30 10:45 */
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const config = require('../config')
const webpack = require('webpack')

module.exports = merge(common, {
  entry: ["./src/slide-verify.js"],
  output: {
    libraryTarget: 'umd',
    filename: 'slide-verify.js',
  },
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(config.build.env)
    }),
  ],
});