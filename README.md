# vue-router-vuex-webpack配置 #

这里的webpack配置是针对多页面开发， 单页面中进行路由跳转这里需要5个相关配置文件。
>
1. package.json  定义项目依赖模块 以及 定义开启服务器和打包命令
2. helpers.js  获取入口文件和html文件
3. webpack.base.config.js  定义webpack基础配置
4. webpack.dev.config.js  定义webpack开发配置
5. webpack.prod.config.js  定义webpack生产配置

**改项目中包含了：**<br>
>
  数据请求模块封装<br>
  webview与js交互模块封装<br>
  配置文件分离<br>
  自动打包多个html文件<br>
  以一个简单的例子实现 action->dispatch->mutation->state->view流程<br>
  定义共用sass文件<br>
  提取css<br>
  css自动添加浏览器前缀<br>
  上线包添加静态资源版本号<br>
  上线包css/js压缩<br>
  定义第三方字体库<br>
  react动态路由<br>
  webpack分片

**使用方式：**<br>
>
1.npm run dev 开启服务器(包含热更新)<br>
2.浏览器访问localhost:3000<br>
3.npm run build打包
