// 先把mongoose引进来
const mongoose = require('mongoose');
// 导入方法
const { getMeta, preSave } = require('../helpers');
const UserSchema = new mongoose.Schema({
    account: String,
    password: String,
    character: String,


    meta: getMeta(),
});

UserSchema.pre('save', preSave);


// 用mongoose注册成一个模型
mongoose.model('User', UserSchema);