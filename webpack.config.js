var path = require('path'),
    appPath = path.join(__dirname, 'app'),
    wwwPath = path.join(__dirname, 'www'),
    pkg = require('./package.json'),
    webpack = require("webpack"),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(appPath, 'index.js'),
  output: {
    path: wwwPath,
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
        test: /\.html$/,
        loader: 'html'
    }, {
        test: /\.json$/,
        loader: "json"
    }, {
        test: /\.(png|jpg)$/,
        loader: 'file?name=img/[name].[ext]'
    }, {
        test: /\.css$/,
        loader: "style!css"
    }, {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: "ng-annotate?add=true!babel"
    }, {
        test: /\.scss$/,
        loader: "style!css!autoprefixer!sass"
    }, {
        test: [/ionicons\.svg/, /ionicons\.eot/, /ionicons\.ttf/, /ionicons\.woff/],
        loader: 'file?name=fonts/[name].[ext]'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.scss', '.html'],
    root: [
        appPath,
        path.join(__dirname, 'node_modules')
    ],
    moduleDirectories: [
        'node_modules'
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        filename: 'index.html',
        pkg: pkg,
        template: path.join(appPath, 'index.html')
    })
  ]
};
