/*
 * @Author: taochunhui 814995688@qq.com
 * @Date: 2022-08-24 16:22:32
 * @LastEditors: taochunhui 814995688@qq.com
 * @LastEditTime: 2022-08-25 12:08:28
 * @FilePath: /vue3-ts-demo/src/type/role.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export interface RoleListInt {
    authority: number[];
    roleId: number;
    roleName: string;
}

interface AddInt {
    roleId: number;
    roleName: string;
}

interface IAuthority {
    name: string; // 权限名称
    roleId: number; // 角色id
    roleList?: IAuthority[]; // 子权限, ?号表示可选的,就是可能没有
    viewRole?: string;
}

export class InitData {
    roleList: RoleListInt[] = []; //来接收角色信息的列表
    addData: AddInt = {
        roleId: 0,
        roleName: "",
    };
    editShow = false;
}

interface PurInit {
    id: number;
    authority: number[];
}

// 权限类
export class AuthorityPage {
    purData: PurInit = {
        id: 0,
        authority: [],
    };
    authority_list: IAuthority[] = [];
    tree_ref: any;
}
