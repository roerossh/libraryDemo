const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');
const router = require('./GET/index'); // 不要用解构赋值，会造成this指向错误
const port = 2333;

app.use(bodyParser());
app.use(router.routes());

app.listen(port);
console.log(`mock server启动成功，监听端口号: ${port}`);