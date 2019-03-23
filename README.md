# libraryDemo

### 技术栈

- React
- TypeScript
- Webpack
- MobX
- Node + Koa


### 目录约定
```
|- build    // webpack 构建目录
    |- tpl
        |- index.html 入口
    |- webpack.config.js    //  webpack 配置文件
|- node-modules  //  公共依赖
|- node-server  //  node 端
|-- web-client
    |- components   // 公共组件
    |- domain   // 处理网络请求 
    |- model    // 页面与api请求之间的业务中间层
    |- styles   // 公共样式
    |- utils  //公共工具
    |- page  //页面
        |- A   // 页面A
            |- index.tsx  // 页面逻辑
            |- store.ts  // mobX 数据管理
        |- B
            |- index.tsx
            |- store.ts
|- package.json
|- .gitignore
|- README.md
|- stylelintrc.js
|- tslint.json
|- theme.js  // 修改antd主题色
|- tsconfig.json

```