const Rollup = require("rollup");
const common = require("./rollup");

/**
 * @type { Rollup.RollupWatchOptions}
 */
const config = {
  input: "src/index.js",
  output: {
    file: "dist/index.aio.js",
    format: "umd",
    name: "clone",
    banner: common.banner,
  },
  plugins: [...common.commonjsPlugins, common.getCompiler()],
};

module.exports = config;
