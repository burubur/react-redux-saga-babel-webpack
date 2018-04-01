require('dotenv').config()
const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const DotenvWebpackPlugin = require('dotenv-webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const appPackage = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'package.json')))
const gitRev = require('git-rev-sync')
const gitPath = path.join(__dirname, '.git')
const lastCommit = fs.existsSync(gitPath) ? gitRev.short(gitPath) : ''
const isProduction = process.env.NODE_ENV === 'production'
const uglify = isProduction ? new webpack.optimize.UglifyJsPlugin() : () => {}
const hotModule = isProduction ? () => {} : new webpack.NamedModulesPlugin()
const hotModuleReplacement = isProduction ? () => {} : new webpack.HotModuleReplacementPlugin()

module.exports = {
  entry: ['babel-polyfill', './src'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules(?!\/webpack-dev-server)/
      }, {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader'
          }, {
            loader: 'css-loader'
          }
        ]
      }, {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/images/',
              publicPath: 'assets/images/'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        'VERSION': JSON.stringify(appPackage.version),
        'COMMIT': JSON.stringify(lastCommit)
      }
    }),
    new DotenvWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'RSCH',
      template: path.resolve(__dirname, 'src/index.ejs'),
      minify: {
        collapseWhitespace: true
      },
      hash: true
    }),
    new CopyPlugin([
      {
        from: 'src/assets',
        to: 'assets'
      }
    ]),
    uglify,
    hotModule,
    hotModuleReplacement
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: process.env.PORT,
    stats: 'errors-only',
    historyApiFallback: true,
    hot: true
  }
}
