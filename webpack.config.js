module.exports = [
  {
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
            presets: ['es2015', 'stage-0', 'react'],
            plugins: ['add-module-exports']
          }
        },
        {
          test: /\.less$/,
          loader: 'style!css!less'
        }
      ]
    }
  },
  {
    entry: './examples/app.js',
    output: {
      path: './examples/',
      filename: 'bundle.js'
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel',
          query: {
            presets: ['es2015', 'stage-0', 'react'],
            plugins: ['add-module-exports']
          }
        },
        {
          test: /\.less$/,
          loader: 'style!css!less'
        }
      ]
    }
  }
];
