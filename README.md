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