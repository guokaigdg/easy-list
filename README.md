<!--
 * @Author: guokai
 * @Date: 2020-12-12 02:25:29
 * @LastEditTime: 2020-12-13 11:40:30
 * @LastEditors: guokai
 * @FilePath: /react-list-ts/README.md
-->

# 简单列表 (React+ React hook + TypeScript + webpack)

![在这里插入图片描述](https://img-blog.csdnimg.cn/20201213113651667.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2d1b2thaWdkZw==,size_16,color_FFFFFF,t_70#pic_center)

![在这里插入图片描述](https://img-blog.csdnimg.cn/20201213113651684.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2d1b2thaWdkZw==,size_16,color_FFFFFF,t_70#pic_center)

## 功能介绍(不涉及后端,纯前端项目)

- 弹窗增加列表
- 删除列表
- 弹窗编辑列表
- 查询列表

## 技术栈

- React `17.0.1`
- React Hook
- TypeScript `4.1.2`
- webpack `5.10.0`

## 安装依赖

```js
$ yarn
//or
$ npm install
```

## 开发

```js
yarn dev
```

## 打包

```js
yarn build
```

# 开发环境搭建

### 1. 创建文件夹

```
$ mkdir easy-list
```

### 2. 初始化项目

```
$ npm init -y
```

### 3. 安装 webpack

```
$ yarn add -D webpack webpack-cli
```

### 4. 安装 react

- 安装 react 的声明文件，由于 React 和 React-dom 并不是使用 TS 进行开发的，所以 TS 不知道 React、 React-dom 的类型，以及该模块导出了什么，此时需要引入 .d.ts 的声明文件。

```
$  yarn add react react-dom @types/react @types/react-dom
```

### 5. 安装 typescript

```
$ yarn add -D typescript
$ yarn add -D awesome-typescript-loader
```

### 6. 安装 less

```
$ yarn add -D style-loader less less-loader css-loader
```

### 7. 安装 html-webpack-plugin

```jsx
yarn add -D html-webpack-plugin
```

### 6. 配置 webpack.config.js

- 根目录新增 webpack.config.js 文件
- 路径 ./webpack.config.js

```js
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  mode: "development",
  entry: "./src/index.tsx",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ["awesome-typescript-loader"],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  devServer: {
    port: 3000,
    open: true,
  },
};

module.exports = config;
```

### 7.新增 index.html 入口

- src 目录新增 index.html 文件
- 路径 ./src/index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>列表页面</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>

  <body>
    <div id="app"></div>
  </body>
</html>
```

### 8.新增 index.tsx 入口

- src 目录新增 index.tsx 文件
- 路径./src/index.tsx
- 注意 ts 中 ReactDom 是小写 `Dom` ( 非 ReactDOM )

```jsx
import * as React from "react";
import * as ReactDom from "react-dom";
import App from "./App";

ReactDom.render(<App />, document.getElementById("app"));
```

### 9.新增 tsconfig.json 处理 ts 文件

- 根目录新增 tsconfig.json 文件
- 路径./tsconfig.json

```json
{
  "compilerOptions": {
    "outDir": "./dist/",
    "noImplicitAny": true,
    "module": "commonjs",
    "target": "es5",
    "jsx": "react",
    "allowJs": true,
    "sourceMap": true,
    "allowSyntheticDefaultImports": true,
    "removeComments": true
  },
  "include": ["./src/**/*"]
}
```

### 10.新增.gitignore

- 根目录新增.gitignore 文件
- 路径./.gitignore

```
# dependencies
/node_modules
/dist
```

### 11.修改 package.json

- 新增 dev 跟 build

```
  ...

  "scripts": {
    "dev": "webpack-dev-server",
    "build": "webpack"
  },

  ...
```

### 编译(生成文件在 dist)

```
# yanr dev
```

### 打包(生成文件在 dist)

```
# yanr build
```
