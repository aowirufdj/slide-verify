const path = require('path')
const WebpackBar = require('webpackbar');

module.exports = {
  entry: ["./src/index.js"],
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    publicPath: '',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, '../src'),
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new WebpackBar(), // 编译进度条组件
  ],

}
