var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var APP_PATH = path.resolve(ROOT_PATH, 'app')

module.exports= {
  entry: {
    app: path.resolve(APP_PATH, 'app.jsx')
  },
  output: {
    filename: 'bundle.js',
    path: BUILD_PATH
  },
  //enable dev source map
  devtool: 'eval-source-map',
  //enable dev server
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: APP_PATH
  },
  module: {
    // preLoaders: [
    //   {
    //     test: /\.jsx?$/,
    //     loaders: ['eslint'],
    //     include: APP_PATH
    //   }
    // ],
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: APP_PATH
      },
      {
        test: /\.css$/,
        loader: 'style!css'//添加对样式表的处理
      },
      {
        test: /\.scss/,
        loader: 'style-loader!css-loader!sass-loader'// use ! to chain loaders
      },
      { test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192'// inline base64 URLs for <=8k images, direct URLs for the rest
      },
      {
        test: /\.json/,
        loader: 'json',
      }
    ]
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'My first react app',
      template: ROOT_PATH+'/index.tmpl.html',
      filename: 'index.html',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    // new webpack.LoaderOptionsPlugin({
    //   minimize: true
    // })
  ]
  // if (process.env.NODE_ENV === 'production') {
  //   module.exports.devtool = '#source-map'
  //   module.exports.plugins = (module.exports.plugins || []).concat([

    // ])
}
