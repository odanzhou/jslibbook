const Rollup = require('rollup')

/**
 * @type { Rollup.RollupWatchOptions}
 */
const config = {
  input: 'src/index.js',
  output: {
    file: 'dist/index.esm.js',
    format: 'es'
  }
}

module.exports = config