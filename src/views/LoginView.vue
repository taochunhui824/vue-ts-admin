<!--
 * @Author: taochunhui 814995688@qq.com
 * @Date: 2022-08-23 15:10:25
 * @LastEditors: taochunhui 814995688@qq.com
 * @LastEditTime: 2022-08-24 10:53:31
 * @FilePath: /vue3-ts-demo/src/views/LoginView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="login-box">
        <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="70px" class="demo-ruleForm" >
            <h2>后台管理系统</h2>
            <el-form-item label="账号：" prop="username">
                <el-input v-model="ruleForm.username" autocomplete="off" />
            </el-form-item>
            <el-form-item label="密码：" prop="password">
                <el-input v-model="ruleForm.password" type="password" autocomplete="off" />
            </el-form-item>
            <el-form-item>
                <el-button class="login-btn" type="primary" @click="submitForm(ruleFormRef)" >登陆</el-button >
                <el-button class="login-btn" @click="resetForm(ruleFormRef)">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script lang="ts">
import { LoginData } from '../type/login'
import type { FormInstance } from 'element-plus'
import {login} from "@/request/api"
import { defineComponent , reactive , toRefs, ref} from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
    setup () {
        const data = reactive(new LoginData)
        // 表单输入规则
        const rules = {
            username: [
                {
                    required: true,  //是否必须字段
                    message: "请输入用户名",   // 触发的提示信息
                    trigger: "blur"   // 触发时机: 当失去焦点时（光标不显示的时候），触发此提示
                },
                {
                    min: 3,   // 最小字符书
                    max: 5,   // 最大字符数
                    message: "用户名长度需要在3-5个字符之间",  // 触发的提示信息
                    trigger: "blur"
                }
            ],
            password: [
                {
                    required: true,  //是否必须字段
                    message: "请输入密码",   // 触发的提示信息
                    trigger: "blur"   // 触发时机: 当失去焦点时（光标不显示的时候），触发此提示
                },
                {
                    min: 3,   // 最小字符书
                    max: 6,   // 最大字符数
                    message: "密码长度需要在3-5个字符之间",  // 触发的提示信息
                    trigger: "blur"
                }
            ]
        }

        // 登录
        const ruleFormRef = ref<FormInstance>()

        //接收router
        const router = useRouter()

        // 重置
        const resetForm = () => {
            data.ruleForm.username = ""
            data.ruleForm.password = ""
        }

        const submitForm = (formEl: FormInstance | undefined) => {
            // 对表单内容进行验证
            if (!formEl) return
            //valid为布尔类型，为true表示验证成功，反之。。。
            formEl.validate((valid) => {
                if (valid) {
                    login(data.ruleForm).then((res) => {
                        console.log(res)
                        // 将token进行保存
                        localStorage.setItem("token", res.data.token)
                        // 跳转页面
                        router.push('/')
                    })
                } else {
                    console.log('error submit!')
                    return false
                }
            })
        }

        return {
            ...toRefs(data),
            rules,
            resetForm,
            submitForm,
            ruleFormRef
        }
        
    }
})
</script>

<style lang="scss" scoped>
    .login-box {
        width: 100%;
        height: 100%;
        background: url(../assets/bg.jpeg);
        .demo-ruleForm{
            padding: 50px;
            width: 400px;
            margin: 0 auto;
            background-color: white;
            position: relative;
            top:200px;
            border-radius: 4px;
        }
        .login-btn{
            // width: 48%;
        }
        h2 {
            margin-bottom: 20px;
            text-align: center;
        }
    }
</style>