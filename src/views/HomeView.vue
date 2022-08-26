<!--
 * @Author: taochunhui 814995688@qq.com
 * @Date: 2022-08-23 14:38:46
 * @LastEditors: taochunhui 814995688@qq.com
 * @LastEditTime: 2022-08-25 13:01:25
 * @FilePath: /vue3-ts-demo/src/views/HomeView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="common-layout">
        <el-container>
            <el-header height="80px">
                <el-row :gutter="20">
                    <el-col :span="4" class="col-spans">
                        <img src="../assets/logo.png" class="logo">
                    </el-col>
                    <el-col :span="16">
                        <h2>后台管理系统</h2>
                    </el-col>
                    <el-col :span="4" class="col-span">
                        <span class="quit-login" @click="delToken">退出登陆</span>
                    </el-col>
                </el-row>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <el-menu router active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo"
                        :default-active="active" text-color="#fff">
                        <el-menu-item :index="item.path" v-for="item in list" :key="item.path">
                            <span>{{ item.meta.title }}</span>
                        </el-menu-item>
                    </el-menu>
                </el-aside>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter, useRoute } from 'vue-router';
export default defineComponent({
    setup() {
        const router = useRouter()
        const route = useRoute()
        console.log(router.getRoutes());
        const list = router.getRoutes().filter(v => v.meta.isShow)

        const delToken = ()=>{
            localStorage.removeItem('token')
            router.push('/login')
        }
        return {
            list,
            active: route.path,
            delToken
        }
    }
})
</script>

<style lang="scss" scoped>
.el-header {
    height: 80px;
    background: #666;

    .logo {
        height: 40px;
        padding-left: 25%;
    }

    .quit-login,
    h2 {
        text-align: center;
        line-height: 80px;
        color: #fff;
    }
    .col-span {
        display: flex;
        justify-content: end;
    }
    .col-spans {
        display: flex;
        align-items: center;
    }
}

.el-aside {
    .el-menu {
        height: calc(100vh - 80px);
    }
}
</style>