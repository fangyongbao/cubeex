# cubeex #

[项目地址](http://www.best-html5.net/cubee/cubeex)

cubeex是基于vue2.0开发的组件库，将包含一套完整的移动UI。这也是[魔方元科技](http://www.cubee.com)开源的首个H5相关的项目, 这里有一群对前端技术狂热的追求者, 如果你对我们的研发感兴趣，欢迎fork。

PS: cubeex目前在持续更新中，组件将逐步完善，旨在创建一套完善的基于vue2.0的移动端组件库。

**webpack配置**<br>
cubeex项目开发、打包的webpack配置没有基于vue-cli， 配置清晰简单, 可以作为webpack学习的教程。
>
1. package.json  定义项目依赖模块 以及 定义开启服务器和打包命令
2. helpers.js  获取入口文件和html文件
3. webpack.base.config.js  定义webpack基础配置
4. webpack.dev.config.js   定义webpack开发配置
5. webpack.prod.config.js  定义webpack生产配置

**目前包含的组件**<br>
>
[pull-up-refresh(上拉刷新/下拉加载)](http://www.best-html5.net/cubee/cubeex/#/pull-refresh)<br>
[radio（单选框）](http://www.best-html5.net/cubee/cubeex/#/radio)<br>
[checkbox（复选框）](http://www.best-html5.net/cubee/cubeex/#/checkbox)<br>
[select-drop(下拉框-下拉)](http://www.best-html5.net/cubee/cubeex/#/select)<br>
[select-scroll(下拉框-滚动)](http://www.best-html5.net/cubee/cubeex/#/select-scroll)<br>
[area-scroll(地区联动-滚动)](http://www.best-html5.net/cubee/cubeex/#/area)<br>
[datetime-scroll(日期筛选-滚动)](http://www.best-html5.net/cubee/cubeex/#/datetime)<br>
[datetime-scroll(弹窗)](http://www.best-html5.net/cubee/cubeex/#/dialog)<br>

**使用方式：**<br>
>

1. 执行cnpm install webpack-dev-server -g 全局安装webpack-dev-server
2. 根目录下执行 cnpm install 安装项目依赖模块<br>
3. 执行 npm run dev<br>
4. 浏览器访问http://localhost:3001<br>
5. npm run build打包
