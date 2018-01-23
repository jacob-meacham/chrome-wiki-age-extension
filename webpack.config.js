var LiveReloadPlugin = require('webpack-livereload-plugin');
var path = require('path');

module.exports = {
  entry: [
    './src/contentscript.js'
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
          presets: ['env']
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
