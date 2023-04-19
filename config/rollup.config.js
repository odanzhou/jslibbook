const Rollup = require('rollup')

/**
 * @type { Rollup.MergedRollupOptions}
 */
const config = {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format
  }
}

module.exports = config