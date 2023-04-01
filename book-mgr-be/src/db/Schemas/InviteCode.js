// 先把mongoose引进来
const mongoose = require('mongoose');
// 导入方法
const { getMate } = require('../helpers');

const InviteCodeSchema = new mongoose.Schema({
    // 邀请码
    code: String,
    // 用来注册那个账户,来看这个邀请码是否用过
    user: String,

    meta: getMate(),
});

// 用mongoose注册成一个模型,名字叫InviteCode
mongoose.model('InviteCode', InviteCodeSchema);