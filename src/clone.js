import type from './type'

Array.from('abc') // ['a', 'b', 'c']

export const aaa = 1

function clone(source) {
  const t = type(source)
  if(t !== 'object' && t !== 'array') {
    return source
  }
  let target
  if(t === 'object') {
    target = {}
    for(let i in source) {
      if(source.hasOwnProperty(i)) {
        target[i] = clone(source[i]) // 递归复制
      }
    }
  } else {
    target = []
    for(let i = 0; i < source.length; i++) {
      target[i] = clone(source[i]) // 递归复制
    }
  }
  return target
}

export default clone