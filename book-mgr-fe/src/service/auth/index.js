// 这个文件写和认证相关的接口

import axios from 'axios';


export const register = (account, password, inviteCode) => {
    return axios.post('http://localhost:3000/auth/register', {
        account,
        password,
        inviteCode,
    });
};

export const login = (account, password) => {
    return axios.post('http://localhost:3000/auth/login', {
        account,
        password,
    });
};