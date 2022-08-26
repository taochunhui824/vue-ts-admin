/*
* @Author: taochunhui 814995688@qq.com
* @Date: 2022-08-23 14:38:46
 * @LastEditors: taochunhui 814995688@qq.com
 * @LastEditTime: 2022-08-25 15:21:38
* @FilePath: /vue3-ts-demo/src/router/index.ts
* @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
*/
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        redirect: 'goods',//设置重定向
        children:[
            {
                path: '/goods',
                name: 'goods',
                meta: {
                    isShow: true,
                    title: '商品列表'
                },
                component: () => import(/* webpackChunkName: "goods" */ '../views/GoodsView.vue')
            },{
                path: '/user',
                name: 'user',
                meta: {
                    isShow: true,
                    title: '用户列表'
                },
                component: () => import(/* webpackChunkName: "user" */ '../views/UserView.vue')
            },{
                path: '/role',
                name: 'role',
                meta: {
                    isShow: true,
                    title: '角色列表'
                },
                component: () => import(/* webpackChunkName: "role" */ '../views/RoleView.vue')
            },{
                path: '/pur',
                name: 'PurView',
                meta: {
                    isShow: false,
                    title: '权限列表'
                },
                component: () => import(/* webpackChunkName: "Pur" */ '../views/PurView.vue')
            }
        ]
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {
        path: '/login',
        name: 'login',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    const token: string | null = localStorage.getItem('token')
    if(!token && to.path !== '/login') {
        next('/login')
    } else {
        next()
    }
})

export default router
