const expect = require('expect.js')

describe('单元测试', () => {
  // 测试套件 test suite
  describe('test hello', () => {
    // 测试用例 test case
    it('hello', () => {
      // 断言
      expect(1).to.equal(1)
    })
  })
})