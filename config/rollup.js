const pkg = require('../package.json')
const version = pkg.version

const banner = `/*
* ${pkg.name} ${version}
* build time: ${Date.now()}
* Licensed under MIT
*/
`
module.exports = {
  banner
}