const getBody = (ctx) => {
    return ctx.request.body || {};
};

// 导出
module.exports = {
    getBody,
};