// 先把mongoose引进来
const mongoose = require('mongoose');
// 导入方法
const { getMeta, preSave } = require('../helpers');
const BookClassifySchema = new mongoose.Schema({
    title: String,


    meta: getMeta(),
});

BookClassifySchema.pre('save', preSave);


// 用mongoose注册成一个模型
mongoose.model('BookClassify', BookClassifySchema);