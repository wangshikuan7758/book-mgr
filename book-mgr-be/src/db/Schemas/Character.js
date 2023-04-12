// 先把mongoose引进来
const mongoose = require('mongoose');
// 导入方法
const { getMeta, preSave } = require('../helpers');
const CharacterSchema = new mongoose.Schema({
    name: String, //member admin
    title: String, //成员 管理员
    power: Object,


    meta: getMeta(),
});

CharacterSchema.pre('save', preSave);


// 用mongoose注册成一个模型
mongoose.model('Character', CharacterSchema);