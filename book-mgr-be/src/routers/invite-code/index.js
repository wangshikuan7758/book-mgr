// 引进来才能用
const Router = require('@koa/router');
const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid'); //把v4重命名成uuidv4
// const { getBody } = require('../../helpers/utils');

const InviteCode = mongoose.model('InviteCode');

const router = new Router({
    prefix: '/invite',
});

// 接口,在www.npmjs.com 运用uuid这个包,安装和用法
router.get('/add', async(ctx) => {
    const code = new InviteCode({
        code: uuidv4(),
        user: '',
    });

    // 同步到mongodb数据库
    const saved = await code.save();

    ctx.body = {
        code: 1,
        data: saved,
        msg: '创建成功',
    };
});

module.exports = router;