var path = require("path");

module.exports = {
  entry: {
    app: [
      './src/app.js'
    ]
  },

  output: {
    path: path.resolve(__dirname + '/dist'),
    filename: '[name].js',
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test:    /\.html$/,
        exclude: /node_modules/,
        loader:  'file-loader?name=[name].[ext]',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },

  devServer: {
    inline: true,
    stats: { colors: true },
  },


};