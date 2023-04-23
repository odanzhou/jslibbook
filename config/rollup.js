const babel = require('rollup-plugin-babel')
const commonjs = require('rollup-plugin-commonjs')
const nodeResolve = require('rollup-plugin-node-resolve')
const pkg = require('../package.json')

const { version, name } = pkg

const banner = `/*!
* ${name} ${version}
* Licensed under MIT
*/
`

exports.banner = banner

const getCompiler = (opt) => {
  return babel({
    babelrc: false, // 不使用babel配置文件
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            browsers: 'last 2 versions, > 1%, ie >= 8, Chrome >= 45, safari >= 10',
            node: '0.12',
          },
          modules: false,
          loose: true, // true: 松散模式，更好的兼容 IE8 浏览器
        },
      ]
    ],
    runtimeHelpers: true,
    plugins: [
      [
        '@babel/plugin-transform-runtime', {
          corejs: 2,
          'helpers': false,
          'regenerator': false
        }
      ]
    ],
    exclude: 'node_modules/**',
  })
}

exports.commonjsPlugins = [
  nodeResolve({
    main: true,
    extensions: ['.js'],
  }),
  commonjs({
    include: 'node_modules/**',
  }),
]

exports.getCompiler = getCompiler;