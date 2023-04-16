// require一个文件就是执行这个文件
require('./Schemas/User');
require('./Schemas/InviteCode');
require('./Schemas/Book');
require('./Schemas/InventoryLog');
require('./Schemas/Character');
require('./Schemas/Log');
require('./Schemas/LogResponse');
require('./Schemas/ForgetPassword');
require('./Schemas/BookClassify');




const mongoose = require('mongoose');
// 1.给那个数据库的2.那个集合3.添加什么格式的文档
// Schema 映射了MongoDB下的一个集合,并且他的内容就是集合下文档的构成
// Modal 可以理解成是根据Schema生成的一套方法,这套方法用来操作MongoDB集合和集合下的文档


const connect = () => {
    return new Promise((resolve) => {
        // 去连接数据库
        mongoose.connect('mongodb://127.0.0.1:27017/book-mgr');
        // 当数据库被打开的时候去做一些事情
        mongoose.connection.on('open', () => {
            console.log('连接数据库成功');
            resolve();
        });
    });

};

module.exports = {
    connect,
};