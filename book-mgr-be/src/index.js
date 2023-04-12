// 每个文件都是一个模块
const Koa = require('koa');
const koaBody = require('koa-body');
// const Body = require('koa-body');
const { connect } = require('./db');
const registerRoutes = require('./routers');
const { middleware: koaJwtMiddleware, catchTokenError } = require('./helpers/token');
// @koa/cors这个包处理跨域问题 在npmjs.com上搜索这个包有教程
const cors = require('@koa/cors');

const app = new Koa();

connect().then(() => {
    // 注册中间件
    app.use(cors());
    app.use(koaBody());

    app.use(catchTokenError);

    koaJwtMiddleware(app);

    registerRoutes(app);
    // 监听端口号3000,开启一个http服务,接受http请求并做处理,处理完后响应
    app.listen(3000, () => {
        console.log('启动成功');
    });
});
// 通过app.use注册中间件,中间件本质上他就是一个函数
// app.use(async(context) => {

//     // 对象的解构  下行代码等价于 const request = context.request;
//     const { request: req } = context;
//     const { url } = req;
//     // 路由地址
//     if (url === '/') {
//         context.response.body = '<h1>主页</h1>';
//         return;
//     }
//     if (url === '/user/list') {
//         context.response.body = '<h1>用户列表</h1>';
//         return;
//     }
//     context.body = '404';
//     console.log(1);
//     //等待先执行下一个中间件
//     await next();
//     console.log(3);
//     context.status = 404;
// });
// app.use(async(context, next) => {
//     console.log(2);

// });
// app.use(async(context, next) => {
//     console.log(2);
//     context.body = '找不到资源';
// });