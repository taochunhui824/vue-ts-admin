<!--
 * @Author: taochunhui 814995688@qq.com
 * @Date: 2022-08-24 12:10:31
 * @LastEditors: taochunhui 814995688@qq.com
 * @LastEditTime: 2022-08-24 16:06:15
 * @FilePath: /vue3-ts-demo/src/views/UserView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <div class="select-box">
            <el-form :inline="true" :model="selectData" class="demo-form-inline">
                <el-form-item label="用户名">
                    <el-input v-model="selectData.nickName" placeholder="请输入用户名" />
                </el-form-item>
                <el-form-item label="角色">
                    <el-select v-model="selectData.role" class="m-2" placeholder="请选择角色">
                        <el-option label="全部" :value="0"></el-option>
                        <el-option
                        v-for="item in roleList"
                        :key="item.roleId"
                        :label="item.roleName"
                        :value="item.roleId"
                        />
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">查询</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div>
            <el-table :data="userList" border style="width: 100%" class="table-top">
                <el-table-column prop="id" label="ID" width="180" />
                <el-table-column prop="nickName" label="用户名" width="180" />
                <el-table-column prop="role" label="详情">
                    <template #default="scope">
                        <el-button link size="small" v-for="item in scope.row.role" :key="item.role">
                            {{item.roleName}}
                        </el-button>
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template #default="scope">
                        <el-button type="primary" link size="small" @click="changeUser(scope.row)">
                            编辑
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
    <!-- 编辑用户的弹出窗-->
    <el-dialog v-model="editShow" title="编辑用户信息">
        <el-form :model="editData">
            <el-form-item label="用户昵称" label-width="120px">
                <el-input v-model="editData.nickName" autocomplete="off" />
            </el-form-item>
            <el-form-item label="用户角色" label-width="120px">
                <el-select multiple v-model="editData.role" class="m-2" size="small" placeholder="请选择角色">
                    <el-option
                        v-for="item in roleList"
                        :key="item.roleId"
                        :label="item.roleName"
                        :value="item.roleId"
                        />
                </el-select>
            </el-form-item>
         </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="editShow = false">取消</el-button>
                <el-button type="primary" @click="editUser">修改</el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs, watch} from 'vue'
import { getUserList, getRoleList } from "@/request/api"
import { UserListInt, InitData} from '../type/user'
export default defineComponent({
    setup () {

        const data = reactive(new InitData)
        
        onMounted(() => {
            getUser()
            getRole()
        })

        const getUser = ()=>{
            getUserList().then((res) => {
                console.log(res) 
                data.userList = res.data
                // data.selectData.count = res.data.length
            })
        }

        const getRole = ()=>{
            getRoleList().then((res) => {
                console.log(res) 
                data.roleList = res.data
                // data.selectData.count = res.data.length
            })
        }

        const onSubmit = ()=>{
            let arr : UserListInt[] = [] // 定义数组，用来接收查询后的数据
            if(data.selectData.nickName || data.selectData.role){//判断是否有值
                if(data.selectData.nickName){
                    arr = data.userList.filter((v)=>{
                        return v.nickName.indexOf(data.selectData.nickName) !== -1
                    })
                }
                if(data.selectData.role){
                    arr = (data.selectData.nickName ? arr : data.userList).filter((v)=>{
                        return v.role.find((item) => item.role === data.selectData.role)
                    })
                }
            } else {
                arr = data.userList
            }
            // data.selectData.count = arr.length
            data.userList = arr
        }

        const changeUser = (row:UserListInt)=>{
            data.editShow = true
            data.editData = {
                id: row.id,
                nickName: row.nickName,
                userName: row.userName,
                role: row.role.map((val:any) => val.role || val.roleId)
            }
        }

        const editUser = ()=>{
            let obj:any =  data.userList.find((val)=>val.id == data.editData.id)
            obj.nickName = data.editData.nickName
            obj.role = data.roleList.filter(val => data.editData.role.indexOf(val.roleId) !== -1)
            data.userList.forEach((item,i)=>{
                if(item.id == obj.id){
                    data.userList[i] = obj
                }
            })
            data.editShow = false
        }

        //监听输入框的两个属性
        watch([()=>data.selectData.nickName,()=>data.selectData.role],()=>{
            if(data.selectData.nickName == '' || data.selectData.role == 0){
                getUser()
            }
        })


        return {
            ...toRefs(data),
            onSubmit,
            changeUser,
            editUser
        }
    }
})
</script>

<style lang="scss" scoped>
    .table-top {
        margin-bottom: 20px;
    }
</style>