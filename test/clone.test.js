const expect = require('expect.js')
const { clone } = require('../dist/index.js')

const arr = [1, 2, 3]
const cloneArr = [...arr]

describe('clone function test', () => {
  before(() => {
    if(!window) {
      global.window = globalThis
    }
  })
  it('正确的测试用例', () => {
    // 基本类型
    expect(clone('test')).to.be.equal('test')
    expect(clone(123)).to.be(123)
    expect(clone(true)).to.be(true)
    expect(clone(null)).to.be(null)
    expect(clone(undefined)).to.be(undefined)
    // 思考：一种类型只测一种，这儿是指基本类型，还是一种字符串或布尔类型，还是在不同的语境下不一样
    // 作者应该是指的基本类型只需要一种
    expect(clone(arr)).to.be.eql(cloneArr)
  })
})