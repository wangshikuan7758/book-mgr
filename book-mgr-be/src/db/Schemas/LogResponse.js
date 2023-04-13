// 先把mongoose引进来
const mongoose = require('mongoose');
// 导入方法
const { getMeta, preSave } = require('../helpers');

const LogResponseSchema = new mongoose.Schema({

    logId: String,
    data: String,

    meta: getMeta(),
});

LogResponseSchema.pre('save', preSave);


// 用mongoose注册成一个模型
mongoose.model('LogResponse', LogResponseSchema);