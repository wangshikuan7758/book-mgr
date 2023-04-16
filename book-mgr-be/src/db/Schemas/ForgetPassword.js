// 先把mongoose引进来
const mongoose = require('mongoose');
// 导入方法
const { getMeta, preSave } = require('../helpers');
const ForgetPasswordSchema = new mongoose.Schema({
    account: String,

    // 1 待处理
    // 2 已重置
    // 3 已忽略
    status: Number,

    meta: getMeta(),
});



ForgetPasswordSchema.pre('save', preSave);


// 用mongoose注册成一个模型
mongoose.model('ForgetPassword', ForgetPasswordSchema);