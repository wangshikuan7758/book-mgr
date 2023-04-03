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

export const clone = (obj) => {
    return JSON.parse(JSON.stringify(obj));
};

// 把拿到的时间戳转成正常的日期形式
export const formatTimestamp = (ts) => {
    const date = new Date(Number(ts));

    const YYYY = date.getFullYear();
    const MM = date.getMonth() + 1;
    const DD = date.getDay();

    const hh = date.getHours();
    const mm = date.getMinutes();
    const ss = date.getSeconds();

    return `${YYYY}/${MM}/${DD} ${hh}:${mm}:${ss}`;
};