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

### 运行项目

初次运行：
```
npm install
npm run dev // mock 数据则运行命令 npm run mock
```

非初次运行：
```
npm run dev // 或 npm run mock
```

指令说明：

| 指令            | 说明                              |
| --------------- | --------------------------------- |
| `npm install `  | 安装node_modules依赖              |
| `npm run dev`   | dev环境下运行项目                 |
| `npm run build` | 打包构建项目                      |
| `npm run mock`  | 使用mock数据源，dev环境下运行项目 |
| `npm run lint`  | 执行代码规范检查                  |

注：执行`npm run mock`指令，脚本文件中包含`npm run dev`指令，会同时启动localhost: 2333后端和localhost: 2222前端。