const babel = require('rollup-plugin-babel')
const pkg = require('../package.json')
const version = pkg.version

const banner = `/*
* ${pkg.name} ${version}
* build time: ${Date.now()}
* Licensed under MIT
*/
`
/**
 * babel 转化编译
 * @param {*} opt
 */
const getCompiler = (opt = {}) => {
  const { browsers, node, targets, ...others } = opt || {}
  return babel({
    babelrc: false,
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            browsers: browsers || 'last 2 versions, > 1%, ie >= 8, Chrome >= 45, safari >= 10',
            node: node || '0.12',
            ...targets,
          },
          modules: false,
          loose: true
        }
      ]
    ],
    exclude: 'node_modules',
    ...others,
  })
}

const polyFillPlugin = () => {
  return [
    '@babel/plugin-transform-runtime',
    {
      corejs: 2,
    },
  ]
}

const plugins = [
  getCompiler(),
  polyFillPlugin(),
]

module.exports = {
  banner,
  plugins,
}