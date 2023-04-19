'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function type(data) {
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase()
}

function clone(source) {
  const t = type(source);
  if(t !== 'object' && t !== 'array') {
    return source
  }
  let target;
  if(t === 'object') {
    target = {};
    for(let i in source) {
      if(source.hasOwnProperty(i)) {
        target[i] = clone(source[i]); // 递归复制
      }
    }
  } else {
    target = [];
    for(let i = 0; i < source.length; i++) {
      target[i] = clone(source[i]); // 递归复制
    }
  }
  return target
}

let a = { c: 1};
let b = clone(a); // 深拷贝

a.c = 2; // 对变量 a 的修改不会影响到变量 b

console.log(a.c); // 输出 2
console.log(b.c); // 输出 1

exports.clone = clone;
