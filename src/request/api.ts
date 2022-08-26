/*
 * @Author: taochunhui 814995688@qq.com
 * @Date: 2022-08-24 10:09:30
 * @LastEditors: taochunhui 814995688@qq.com
 * @LastEditTime: 2022-08-25 10:00:16
 * @FilePath: /vue3-ts-demo/src/request/api.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import service  from ".";

interface loginData{
    username: string
    password: string
}
//登陆接口
export function login(data:loginData){
    return service({
        url: '/login',
        method: 'post',
        data
    })
}
//商品列表接口
export function getGoodsList(){
    return service({
        url: '/getGoodsList',
        method: 'get'
    })
}
//用户列表接口
export function getUserList(){
    return service({
        url: '/getUserList',
        method: 'get'
    })
}
//角色列表接口
export function getRoleList(){
    return service({
        url: '/getRoleList',
        method: 'get'
    })
}
//权限列表接口
export function getPurList(){
    return service({
        url: '/getAuthorityList',
        method: 'get'
    })
}