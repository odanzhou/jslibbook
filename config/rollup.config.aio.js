const nodeResolve = require('rollup-plugin-node-resolve')

module.exports = {
  input: 'src/index.js',
  output: {
    file: 'dist/index.aio.js',
    format: 'umd',
    name: 'clone'
  },
  plugins: [
    nodeResolve({
      main: true,
      extensions: ['.js']
    })
  ]
}