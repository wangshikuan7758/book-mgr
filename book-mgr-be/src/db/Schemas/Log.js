// 先把mongoose引进来
const mongoose = require('mongoose');
// 导入方法
const { getMeta, preSave } = require('../helpers');
const LogSchema = new mongoose.Schema({
    user: {
        account: String,
        id: String,
    },

    request: {
        method: String,
        url: String,
        status: Number,
    },

    startTime: Number,
    endTime: Number,

    show: Boolean,

    meta: getMeta(),
});

LogSchema.pre('save', preSave);


// 用mongoose注册成一个模型
mongoose.model('Log', LogSchema);