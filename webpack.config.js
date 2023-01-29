const path = require('path')

module.exports = {
  mode: 'development', // 'production'
  entry: './index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    mainFields: ['module', 'main']
  }
}