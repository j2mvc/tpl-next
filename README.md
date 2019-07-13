#### 创建项目
```
https://github.com/zeit/next.js.git
mkdir tpl-next
cd tpl-next
npm init -y
npm install --save next react react-dom
将下面脚本添加到 package.json 中:
{
  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
  }
}
```
#### 支持jsx插件
```
打开 file -> setting -> Languages and Frameworks -> JavaScript -> language version下拉框里选 react jsx
```
#### eslint
```
#https://github.com/browserslist/browserslist-example
npm install postcss-cli autoprefixer -D
npm install postcss-preset-env -D
npm install postcss-normalize -D
npm install eslint eslint-plugin-compat -D
```
#### HOOK
```
npm install eslint-plugin-react-hooks --save-dev
添加配置
"eslintConfig": {
    "plugins": [
      "react-hooks"
    ],
    "rules": {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn"
    },
    }
```
#### 样式
```
# 导入.scss文件
npm install --save @zeit/next-sass node-sass
增加next.config.js配置
const withSass = require('@zeit/next-sass')
module.exports = withSass()

#支持scss嵌入jsx
npm install --save styled-jsx-plugin-sass
增加.babelrc配置

```
#### 打包
```
npm install --save-dev mini-css-extract-plugin
添加自定义
```
#### 服务器运行依赖
```
npm install --save express http net url
npm install --save axios md5 lru-cache js-cookie
npm install --save next react react-dom
```

#### 结语
```
推荐使用该框架语言
该示例仅作参考，测试能够实现服务器端渲染并有良好的体验。
商用项目可以使用react-redux开发。
跨域访问需要结合 http/https和http-proxy-middleware,http/https服务端渲染代理，http-proxy-middleware仅在不需要服务端渲染时代理。
```
