const { mock }= require("mockjs");
const Router = require("koa-router")();

Router.get('/api/user', async(ctx, next) => {
    ctx.body = mock({
        // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
        'list|1-10': [{
            // 属性 id 是一个自增数，起始值为 1，每次增 1
            'id|+1': 1,
            'name': 'mockjs',
        }],
        code: 0,
        msg: '请求成功'
    })
})

Router.get('/api/bookList', async(ctx, next) => {
    ctx.body = mock({
        'id|+1': 0001,
        'name': 'book1',
        'cover':'default',
    })
})

module.exports = Router;

