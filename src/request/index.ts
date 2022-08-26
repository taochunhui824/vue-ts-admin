/*
 * @Author: taochunhui 814995688@qq.com
 * @Date: 2022-08-24 09:56:24
 * @LastEditors: taochunhui 814995688@qq.com
 * @LastEditTime: 2022-08-24 10:08:14
 * @FilePath: /vue3-ts-demo/src/request/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from 'axios'
//创建axios实例
const service = axios.create({
    baseURL: 'https://www.fastmock.site/mock/bf1fcb3c2e2945669c2c8d0ecb8009b8/api',
    timeout: 5000,
    headers: {
        'content-Type': 'application/json;charset=utf-8'
    }
})
//请求拦截
service.interceptors.request.use((config)=>{
    config.headers = config.headers || {}
    if(localStorage.getItem('token')){
        config.headers.token = localStorage.getItem('token') || ''
    }
    return config
})
//响应拦截
service.interceptors.response.use((res)=>{
    const code:number = res.data.code
    if(code != 200){
        return Promise.reject(res.data)
    }
    return res.data
},(err)=>{
    console.log(err)
})

export default service