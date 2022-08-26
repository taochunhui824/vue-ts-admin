/*
 * @Author: taochunhui 814995688@qq.com
 * @Date: 2022-08-24 14:49:14
 * @LastEditors: taochunhui 814995688@qq.com
 * @LastEditTime: 2022-08-24 15:42:03
 * @FilePath: /vue3-ts-demo/src/type/user.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export interface UserListInt {
    id: number
    nickName: string
    role: RoleInt[]
    userName: string
}

interface RoleInt {
    role: number,
    roleName: string
}

interface selectDataInt {
    role: number,
    nickName: string
}

interface RoleListInt {
    authority: number[]
    roleId: number
    roleName: string
}

interface EditInt {
    id: number
    nickName: string
    role: number[]
    userName: string
}

export class InitData {
    selectData: selectDataInt = {
        role: 0,
        nickName: ''
    }
    userList : UserListInt[] = [] //用来接收用户信息的列表
    roleList : RoleListInt[] = [] //来接收角色信息的列表
    editShow = false
    editData: EditInt = { //修改用户所需数据
        id: 0,
        nickName: '',
        role: [],
        userName: ''
    }
}