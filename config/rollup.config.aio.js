const nodeResolve = require('rollup-plugin-node-resolve')
const Rollup = require('rollup')

/**
 * @type { Rollup.RollupWatchOptions}
 */
const config = {
  input: 'src/index.js',
  output: {
    file: 'dist/index.aio.js',
    format: 'umd',
    name: 'clone',
  },
  plugins: [
    nodeResolve({
      main: true,
      extensions: ['.js']
    })
  ]
}

module.exports = config