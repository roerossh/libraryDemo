# libraryDemo

### 技术栈

- React
- TypeScript
- Webpack
- MobX
- Node + Koa


### 目录约定
```
|- dist // webpack 打包输出目录
|- config    // webpack 构建配置目录
    |- tpl
        |- index.html 入口
    |- webpack.config.js    //  webpack 配置文件
|- node-modules  //  公共依赖
|- node-server  //  node 端
    |- main.js
    |- middleware // 中间件
    |- proxy.config.js // 前后端proxy配置
    |- route // 路由配置
|-- web-client
    |- common 公共资源，如图片、SVG等
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
|- stylelintrc.js // eslint 代码格式检查配置文件
|- tslint.json // tslint 代码格式检查配置文件
|- theme.js  // 修改antd主题色
|- tsconfig.json

```