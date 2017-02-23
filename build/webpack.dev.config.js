var path = require('path');
var webpack = require('webpack');
var helpers = require('./helpers');
var commonWebpack = require('./webpack.base.config');
var ExtractTextPlugin = require('extract-text-webpack-plugin')

const METADATA = {
    host: './'
};

module.exports = Object.assign({}, commonWebpack, {
    // 供html使用的变量<%= metadata.host %>
    metadata: METADATA,
    // 开发环境设定独立的插件
    plugins: [
        // commonsPlugin 可以用于分析模块的共用代码, 单独打一个包出来
        // new webpack.optimize.CommonsChunkPlugin('js/common.js'),
        // 热更新（如果webpack-dev-server中添加了--hot，这里再次引用，热更新时就会报错）
        // new webpack.HotModuleReplacementPlugin(),
        // 提取css为单文件
        new ExtractTextPlugin("css/style.css"),
        // React/Vue 官方提供的代码是已经合并的, 这个是 Webpack 不推荐的用法,
        // 在合并的代码上进行定制有点麻烦, Webpack 提供了设置环境变量来优化代码的方案:
        new webpack.DefinePlugin({
            // 配置组件中使用的变量,组件中可以直接使用{metadata.host}
            metadata:JSON.stringify(METADATA),
            // "process.env": {
            //     NODE_ENV: JSON.stringify("development")
            // }
        })
        // concat进行数组合并
    ].concat(helpers.getHtmlPlugin())
});