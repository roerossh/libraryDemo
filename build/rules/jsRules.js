const tsImportPluginFactory = require('ts-import-plugin');
const { resolve } = require('./../utils');

module.exports = [
    {
        // 需要解析的文件类型
        test: /\.ts(x?)$/,
        // 使用什么规则解析对应文件
        use: [
            {
                loader: 'awesome-typescript-loader',
                options: {
                    // 用于快速增量构建
                    transpileOnly: true,
                    useCache: true,
                    cacheDirectory: resolve('.cache-loader'),
                    babelOptions: {
                        // TODO: babelrc这儿是什么逻辑？
                        babelrc: false,
                        plugins: [
                            'react-hot-loader/babel'
                        ]
                    },
                    // 按需加载antd的组件
                    getCustomTransformers: () => ({
                        before: [ tsImportPluginFactory( {
                            libraryName: 'antd',
                            libraryDirectory: 'lib',
                            // true,使用组件内的less文件，不用再手动导入
                            style: true,
                        } ) ]
                      }),
                }
            }
        ]
    }
]