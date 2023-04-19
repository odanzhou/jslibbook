const Rollup = require('rollup')

/**
 * @type { Rollup.RollupWatchOptions}
 */
const config = {
  // input: 'src/index.js',
  input: 'src/commonjs.index.js', // 测试commonjs转esmodule
  output: {
    file: 'dist/index.esm.js',
    format: 'es'
  }
}

module.exports = config