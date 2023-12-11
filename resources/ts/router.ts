import { createRouter, createWebHistory } from 'vue-router';
import home from "./vue/pages/tasks/index.vue"
import login from "./vue/pages/login/index.vue"
import help from "./vue/pages/help/index.vue"

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
