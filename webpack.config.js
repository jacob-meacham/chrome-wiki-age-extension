module.exports = {
  context: __dirname + '/src',
  entry: 'extension.js',
  output: {
    path: __dirname + '/dist',
    filename: 'extension.js'
  },
  resolve: {
    extensions: ['']
  }
}
