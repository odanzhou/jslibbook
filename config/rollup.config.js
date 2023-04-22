const Rollup = require('rollup')
const common = require('./rollup')

/**
 * @type { Rollup.RollupWatchOptions}
 */
const config = {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
    banner: common.banner,
  },
  plugins: [
    common.getCompiler(),
  ]
}

module.exports = config