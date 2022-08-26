/*
 * @Author: taochunhui 814995688@qq.com
 * @Date: 2022-08-23 16:54:41
 * @LastEditors: taochunhui 814995688@qq.com
 * @LastEditTime: 2022-08-24 10:29:13
 * @FilePath: /vue3-ts-demo/src/type/login.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * 表单数据接口
 */
 export interface LoginFormInt{
    username: string
    password: string
}

export class LoginData {
    ruleForm : LoginFormInt = {
        username: '',
        password: ''
    }
}