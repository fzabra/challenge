const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: ['webpack/hot/dev-server', './src/index.js'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer:{
    port:4000,
    contentBase: path.join(__dirname, 'public'),
    writeToDisk: false,
    hot:true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Creditas Challenge',
      hash: true,
      myPageHeader: 'Creditas Challenge',
      template: 'public/index.html',
      filename: 'index.html',
      files: {
        css: ['style.css']
      }
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}
