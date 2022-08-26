<!--
 * @Author: taochunhui 814995688@qq.com
 * @Date: 2022-08-24 16:20:01
 * @LastEditors: taochunhui 814995688@qq.com
 * @LastEditTime: 2022-08-26 10:31:01
 * @FilePath: /vue3-ts-demo/src/views/RoleView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <div class="select-box">
            <el-button type="primary" @click="addRole">新增角色</el-button>
        </div>
        <div>
            <el-table :data="roleList" border style="width: 100%" class="table-top">
                <el-table-column prop="roleId" label="ID" width="180" />
                <el-table-column prop="roleName" label="用户名" width="180" />
                <el-table-column label="操作">
                    <template #default="scope">
                        <el-button type="primary" link size="small" @click="changeRole(scope.row)">
                            修改权限
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
    <!-- 编辑用户的弹出窗-->
    <el-dialog v-model="editShow" title="修改权限">
        <el-tree :data="authority_list" show-checkbox node-key="roleId" :check-strictly="true"
            :default-checked-keys="purData.authority" ref="tree_ref" :props="{
                children: 'roleList',
                label: 'name'
            }" />
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="editShow = false">取消</el-button>
                <el-button type="primary" @click="changeAuthority">修改</el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs, watch} from 'vue'
import { getRoleList, getPurList } from "@/request/api"
import { RoleListInt, InitData, AuthorityPage} from '../type/role'
import { ElMessage, ElMessageBox } from 'element-plus'
import 'element-plus/es/components/message-box/style/index'
import 'element-plus/es/components/message/style/index'
import { useRouter } from 'vue-router'
import router from '@/router'
export default defineComponent({
    setup () {

        const roleData = reactive(new InitData)

        const authority_data = reactive( new AuthorityPage )

        // const router = useRouter()
        
        onMounted(() => {
            getRoleList().then((res) => {
                console.log(res) 
                roleData.roleList = res.data
            })
        })

        const addRole = ()=>{
            ElMessageBox.prompt('请输入角色名称', '新增角色', {
                confirmButtonText: '保存',
                cancelButtonText: '取消',
            }).then(({ value }) => { //value 表示输入的值
                if(value){//判断是否有值，有就将值push到角色列表中
                    roleData.roleList.push({
                        roleId: roleData.roleList.length + 1,
                        roleName: value,
                        authority: []
                    })
                }
                ElMessage({
                    type: 'success',
                    message: `${value}保存成功`,
                })
            })
        }

        const changeRole = (row:RoleListInt)=>{
            console.log(row)
            roleData.editShow = true
            authority_data.purData.id = row.roleId
            authority_data.purData.authority = row.authority
            getPurList().then(res => {
                authority_data.authority_list = res.data
            })
            // router.push({
            //     name: "PurView",
            //     params: {
            //         id: row.roleId,
            //         authority: row.authority.join(',')
            //     }
            // })
        }

        const changeAuthority = () => {
            console.log(authority_data.tree_ref.getCheckedKeys()
                .sort(
                    function (a: number, b: number) {
                        return a - b
                    }
                )
            )
            // 传给后台, 后台去进行修改
            roleData.editShow = false
            ElMessage({
                type: 'success',
                message: `修改成功`,
            })
        }

        return {
            ...toRefs(roleData),
            ...toRefs(authority_data),
            addRole,
            changeRole,
            changeAuthority
        }
    }
})
</script>

<style scoped>
    .select-box {
        margin-bottom: 20px;
    }
</style>