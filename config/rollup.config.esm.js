const Rollup = require("rollup");
const common = require("./rollup");

/**
 * @type { Rollup.RollupWatchOptions}
 */
const config = {
  input: "src/index.js",
  // input: 'src/commonjs.index.js', // 测试commonjs转esmodule，不行
  output: {
    file: "dist/index.esm.js",
    format: "es",
    banner: common.banner,
  },
  plugins: [common.getCompiler()],
};

module.exports = config;
