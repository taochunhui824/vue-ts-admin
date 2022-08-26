<!--
 * @Author: taochunhui 814995688@qq.com
 * @Date: 2022-08-24 11:24:55
 * @LastEditors: taochunhui 814995688@qq.com
 * @LastEditTime: 2022-08-24 13:38:08
 * @FilePath: /vue3-ts-demo/src/views/GoodView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <div class="select-box">
            <el-form :inline="true" :model="selectData" class="demo-form-inline">
                <el-form-item label="标题">
                    <el-input v-model="selectData.title" placeholder="请输入标题" />
                </el-form-item>
                <el-form-item label="详情">
                    <el-input v-model="selectData.introduce" placeholder="请输入详情" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">查询</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div>
            <el-table :data="dataList.comList" border style="width: 100%">
                <el-table-column prop="id" label="ID" width="180" />
                <el-table-column prop="title" label="标题" width="180" />
                <el-table-column prop="introduce" label="详情" />
            </el-table>
            <el-pagination @current-change="currentChange" @size-change="sizeChange" :page-size="selectData.pagesize" layout="prev, pager, next" :total="selectData.count" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, computed, watch, onMounted} from 'vue'
import { getGoodsList } from "@/request/api"
import { InitData , listInt} from '../type/goods'

export default defineComponent({
    setup () {
        
        const data = reactive(new InitData())

        onMounted(() => {
            getGoods()
        })

        const getGoods = ()=>{
            getGoodsList().then((res) => {
                console.log(res) 
                data.list = res.data
                data.selectData.count = res.data.length
            })
        }

        const dataList = reactive({
            comList: computed(()=>{
                return data.list.slice(
                    (data.selectData.page - 1) * data.selectData.pagesize,
                    data.selectData.page * data.selectData.pagesize
                )
            })
        })

        //
        const currentChange = (page:number)=>{
            data.selectData.page = page
        }

        const sizeChange = (pagesize:number)=>{
            data.selectData.pagesize = pagesize
        }

        const onSubmit = ()=>{
            // console.log(data.selectData)
            let arr : listInt[] = [] // 定义数组，用来接收查询后的数据
            if(data.selectData.title || data.selectData.introduce){//判断是否有值
                if(data.selectData.title){
                    arr = data.list.filter((v)=>{
                        return v.title.indexOf(data.selectData.title) !== -1
                    })
                }
                if(data.selectData.introduce){
                    arr = data.list.filter((v)=>{
                        return v.introduce.indexOf(data.selectData.introduce) !== -1
                    })
                }
            } else {
                arr = data.list
            }
            data.selectData.count = arr.length
            data.list = arr
        }

        //监听输入框的两个属性
        watch([()=>data.selectData.title,()=>data.selectData.introduce],()=>{
            if(data.selectData.title == '' && data.selectData.introduce == ''){
                getGoods()
            }
        })

        return {
            ...toRefs(data),
            currentChange,
            sizeChange,
            dataList,
            onSubmit,
            watch
        }
    }
})
</script>

<style scoped>

</style>