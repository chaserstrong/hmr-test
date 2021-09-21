let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  watch: true,
  devtool: false, //去掉dist中的eval函数
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['index', 'other']
    }),
  ]
}