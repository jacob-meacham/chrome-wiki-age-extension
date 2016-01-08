var LiveReloadPlugin = require('webpack-livereload-plugin');
var path = require('path');

module.exports = {
  entry: [
    './src/main.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'extension.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel',
        include: [path.resolve(__dirname, 'src')],
        exclude: 'reload.js',
        query: {
          presets: ['es2015']
        }
      },
    ],
  },
  resolve: {
    extensions: ['', '.js']
  },
  plugins: [
    new LiveReloadPlugin()
  ],
}
