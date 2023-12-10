import { createRouter, createWebHistory } from 'vue-router';
import home from "./vue/Home.vue"
import login from "./vue/Login.vue"
import help from "./vue/Help.vue"

const routes = [
    {
        path: "/",
        component: home,
        name: "home",
    },
    {
        path: "/login",
        component: login,
        name: "login",
    },
    {
        path: "/help",
        component: help,
        name: "help",
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router
