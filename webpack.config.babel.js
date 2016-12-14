const {resolve} = require('path')

module.exports = () => ({
  context: resolve('client'),
  entry: [
    'coral-admin',
    'coral-embed-stream'
  ],
  output: {
    path: resolve('dist'),
    filename: '[name].js'
  }
})
