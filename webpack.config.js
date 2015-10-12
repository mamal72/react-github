module.exports = {
  entry: './index.js',
  output: {
    path: './dist/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          stage: 0
        }
      },
      {
        test: /\.less$/,
        loader: 'style!css!less'
      }
    ]
  }
};
