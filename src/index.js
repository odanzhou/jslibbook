import clone from './clone'

let a = { c: 1}
let b = clone(a) // 深拷贝

a.c = 2 // 对变量 a 的修改不会影响到变量 b

console.log(a.c) // 输出 2
console.log(b.c) // 输出 1

export {
  clone
}
