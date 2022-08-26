/*
 * @Author: taochunhui 814995688@qq.com
 * @Date: 2022-08-24 12:29:00
 * @LastEditors: taochunhui 814995688@qq.com
 * @LastEditTime: 2022-08-24 14:53:00
 * @FilePath: /vue3-ts-demo/src/type/goods.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export interface listInt {
    userId: number,
    id: number,
    title: string,
    introduce: string
}

interface selectDataInt {
    title: string,
    introduce: string,
    page: number, //页码
    count: number, //总条数
    pagesize: number,//默认一页显示多少条
}

export class InitData {
    selectData: selectDataInt = {
        title:'',
        introduce: '',
        page: 1,
        count: 0,
        pagesize: 5
    }
    list: listInt[] = [] //展示的内容数据
}