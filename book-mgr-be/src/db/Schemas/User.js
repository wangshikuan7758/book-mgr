// 先把mongoose引进来
const mongoose = require('mongoose');
// 导入方法
const { getMate } = require('../helpers');
const UserSchema = new mongoose.Schema({
    account: String,
    password: String,
    meta: getMate(),
});

// 用mongoose注册成一个模型
mongoose.model('User', UserSchema);