import { createRouter, createWebHistory } from 'vue-router'

import Layout from '@/components/Layout.vue'
import Home from '@/pages/home/index.vue'
import Login from '@/pages/login/index.vue'

const routeHistory = createWebHistory();
const router = createRouter({
    history: routeHistory,
    routes: [
        {
            path: '/',
            component: Layout,
            redirect: 'home',
            children: [
                {
                    path: '/home',
                    name: 'home',
                    component: Home
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        }
    ]

})
export default router