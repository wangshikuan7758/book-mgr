// 先把mongoose引进来
const mongoose = require('mongoose');
// 导入方法
const { getMeta, preSave } = require('../helpers');
const InventoryLogSchema = new mongoose.Schema({
    type: String,
    num: Number,
    user: String,

    meta: getMeta(),
});

InventoryLogSchema.pre('save', preSave);


// 用mongoose注册成一个模型
mongoose.model('InventoryLog', InventoryLogSchema);