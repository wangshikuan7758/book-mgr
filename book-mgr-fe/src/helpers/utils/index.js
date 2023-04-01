// 这个方法用来处理请求数据的结果 比如 请输入用户名或密码   密码错误等等
import { message } from 'ant-design-vue';

export const result = (response, authShowErrorMsg = true) => {
    const { data } = response;
    if ((data.code === 0) && authShowErrorMsg) {
        message.error(data.msg);
    }

    return {
        success(cb) {
            if (data.code !== 0) {
                cb(data, response);
            }

            return this;
        },
        fail(cb) {
            if (data.code === 0) {
                cb(data, response);
            }

            return this;
        },
        finally(cb) {
            cb(data, response);

            return this;
        },
    };
};