const babel = require('rollup-plugin-babel')
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
      ],
      [
        '@babel/plugin-transform-runtime', {
          corejs: 2
        }
      ]
    ],
    exclude: 'node_modules/**',
  })
}

exports.getCompiler = getCompiler;