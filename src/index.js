const { throttle } = require('lodash')
const clone = require('../lib/clone')
// import clone from '../lib/clone' // 报错，待查， Error: Could not resolve '../lib/clone' from src/index.js

let a = { c: 1 }
let b = clone(a)
a.c = 2

console.log('a.c', a.c)
console.log('b.c', b.c)
const tt = (...args) => {
  return throttle(...args)
}
const testT = tt((...args) => {
  console.log(args)
}, 3000)

testT(1111, 2222)