const theme = require('./../../theme');
const { resolve } = require('./../utils');
module.exports = [
    {
        test: /\.scss$/,
        // 只编译下面路径的scss文件
        include: [resolve('web-client')],
        // 顺序由下至上，sass-loader将scss文件编译成css, css-loader将其编译成CommonJS规范的css，
        // style-loader将其编译成js文件
        use: [
            'style-loader',
            // 因为是css的构建缓存，所以写在css-loader前面
            {
                loader: 'cache-loader',
                options: {
                    cacheDirectory: resolve('.cache-loader')
                }
            },
            {
                loader: 'typings-for-css-modules-loader',
                options: {
                    // 是否使用css modules
                    modules: true,
                    // 类名导出
                    namedExport: true,
                    // 支持驼峰
                    camelCase: true,
                    // 使用sass
                    sass: true,
                }
            },
            {
                loader: 'sass-loader',
                options: {
                    // 公共引用路径
                    includePaths: [resolve('web-client/styles')]
                }
            }
        ]
    },
    {
        test: /\.less$/,
        // 只针对node_modules路径下的less文件编译
        include: [resolve('node_modules')],
        use: [
            'style-loader',
            'css-loader',
            {
                loader: 'less-loader',
                options: {
                    // 禁用在样式表内写js代码
                    javascriptEnabled: true,
                    // 用于修改主题配色,根据antd官网进行主题修改
                    modifyVars: theme 
                }
            }
        ]
    }
]