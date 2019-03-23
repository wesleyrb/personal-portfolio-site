var path = require('path');
const SRC_DIR = path.join(__dirname, '/react-client/src');
var webpack = require('webpack');
module.exports = {
  mode: 'development',
  entry: ['react-hot-loader/patch',`${SRC_DIR}/index.jsx`],
  output: {
    publicPath: '/dist',
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css']
  },
  module : {
    rules : [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test : /\.jsx?/,
        include : SRC_DIR,
        loader : 'babel-loader',      
        query: {
          presets: ['react', 'es2015']
       }
      },
      {
        test: /\.js$/,
        loaders: ['react-hot-loader/webpack', 'babel'],
        include: SRC_DIR
      }
    ]
  },
  // loaders: [{
  //   test: /\.js$/,
  //   loaders: ['react-hot-loader/webpack', 'babel'],
  //   include: path.join(__dirname, 'src')
  // }],
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};