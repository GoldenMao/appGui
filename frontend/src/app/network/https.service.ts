import {Injectable} from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class HttpsService {

  constructor() {
  }

  axiosData(config) {
    /* config为如下格式
    config:{
      url: '/api/home',
      method: 'get' or 'post',
      params or data: {
        userName: 'Lan',
        password: '123'
      }
    }
    */
    // 1.创建axios的实例
    const instance = axios.create({
      // baseURL: 'http://127.0.0.1:8000/',
      timeout: 5000
    })

    // 2.axios的拦截器
    // 2.1.请求拦截的作用
    instance.interceptors.request.use(config => {
      return config;
    }, err => {
      console.log('请求拦截err: ' + err);
    })

    // 2.2.响应拦截
    instance.interceptors.response.use(res => {
      return res.data;
    }, err => {
      console.log('响应拦截err: ' + err);
    })

    // 3.发送真正的网络请求
    return instance(config);
  }
}
