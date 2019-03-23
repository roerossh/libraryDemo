const path = require('path');

const jsRules = require('./rules/jsRules');
const cssRules = require('./rules/cssRules');
const fileRules = require('./rules/fileRules');

const { resolve } = require('./utils');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
    entry: {
        app: resolve('web-client/index.tsx')
    },
    output: {
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
            template: 'build/tpl/index.html'
        }),
    ]
}