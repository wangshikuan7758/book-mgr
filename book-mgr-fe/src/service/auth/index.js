// 这个文件写和认证相关的接口

// import axios from 'axios';
import { post } from '@/helpers/request';


export const register = (account, password, inviteCode) => {
    return post('/auth/register', {
        account,
        password,
        inviteCode,
    });
};

export const login = (account, password) => {
    return post('/auth/login', {
        account,
        password,
    });
};