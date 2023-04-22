const pkg = require('../package.json')

const { version, name } = pkg

const banner = `/*!
* ${name} ${version}
* Licensed under MIT
*/
`

exports.banner = banner