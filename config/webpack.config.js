const path = require('path');

const jsRules = require('./rules/jsRules');
const cssRules = require('./rules/cssRules');
const fileRules = require('./rules/fileRules');

const { resolve } = require('./utils');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');


module.exports = {
    entry: {
        app: resolve('web-client/index.tsx')
    },
    output: {
         // TODO：这样写正确？
        path: resolve('dist'),
        filename: '[name].js'
    },
    module: {
        rules: [...jsRules, ...cssRules, ...fileRules]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            '@pages': resolve('web-client/pages'),
        },
        plugins: [
            // 配置文件引入tsconfig.json,自动配置tsconfig.path公共路径到webpack
            // 与外层plugins不同的是，webpack.resove.plugins是解析路径相关的插件
            new TsconfigPathsPlugin({
                configFile: resolve('tsconfig.json')
            })
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'config/tpl/index.html'
        }),
        new HotModuleReplacementPlugin(), // 让HMR启动全局HMR
    ],
    // 配置webpack-dev-server
    devServer: {
        contentBase: resolve('dist'), // 告诉服务器从哪个目录中提供内容。只有在想要提供静态文件时才需要
        hot: true, // devServer开启 HMR，
        port: 2222,
        proxy: {
            '/api': 
            {
                target: 'http://localhost:2333',
                changeOrigin: true, // 跨域
                secure: false, // 接受https 无效证书的请求
            },
        }
    }
}