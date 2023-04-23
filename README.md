# 现代 Javascript 库开发
想法 => 目标 => 设计 => 编码

### 一些注意事项
rollup 版本: 书中是 0.57.1，项目目前使用的是最新的 3.20.6, 有问题再切换回去(切换回去了)

### 踩坑
似乎 rollup(不注明，都是以0.57.1版本为例) 打包，只能从esmodule转向其他包，commonjs 不能转化为 esmodule
遇到错误：
> Cannot find module '@babel/preset-plugin-transform-runtime' from
> If you want to resolve "@babel/plugin-transform-runtime", use "module:@babel/plugin-transform-runtime"
> - Did you accidentally pass a preset as a plugin?

用npm 下载包有错误提示
> rollup@">=0.60.0 <1" from rollup-plugin-babel@4.0.3
升级 rollup 版本至 0.60.7

原来是将plugin放在了preset 中导致的
把 rollup 改回去

又报错
> Error: 'default' is not exported by node_modules/.pnpm/@babel+runtime-corejs2@7.12.5/node_modules/@babel/runtime-corejs2/core-js/array/from.js
解决方案1: @rollup/plugin-commonjs，但当前rollup版本不支持（要求 1.20.0）
> [打包报错Error: ‘default‘ is not exported](https://devpress.csdn.net/viewdesign/643769e0986c660f3cf9389c.html)
解决方案2: rollup-plugin-commonjs rollup-plugin-node-resolve（rollup@">=0.60.0 <1"）
[rollup从入门到打包一个按需加载的组件库](https://zhuanlan.zhihu.com/p/486644411?utm_id=0)
[使用rollup打包JS的方法步骤](https://www.mianshigee.com/note/detail/63156yth/)
> rollup 提供了插件rollup-plugin-commonjs ，以便于在 rollup 中引用 commonjs 规范的包。该插件的作用是将 commonjs 模块转成 es6 模块。
> rollup-plugin-commonjs 通常与 rollup-plugin-node-resolve 一同使用，后者用来解析依赖的模块路径。
format: 'umd' 的模式下才需要

### 测试
兼顾测试覆盖率和效率
控制变量法，按照参数分组，对于每个参数，分别设置正确的参数、错误的参数以及边界值，对于其他的参数，而对于其他的参数给一个正确的固定值即可，保证其他参数影响本参数的测试
对于同一个类型的输入，只需要设计一个用例即可