// 先把mongoose引进来
const mongoose = require('mongoose');
// 导入方法
const { getMate } = require('../helpers');
const BookSchema = new mongoose.Schema({
    // 书名
    name: String,
    // 价格
    price: Number,
    // 作者
    author: String,
    // 出版日期
    publishDate: String,
    // 分类
    classify: String,
    // 库存
    count: Number,
    meta: getMate(),
});

// 用mongoose注册成一个模型
mongoose.model('Book', BookSchema);