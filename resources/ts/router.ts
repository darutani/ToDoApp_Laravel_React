import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import home from "../vue/Home.vue"
import detail from "../vue/Detail.vue"

const routes = [
    {
        path: "/",
        component: home,
        nam: "home",
    },
    {
        path: "/detail/:todoId?",
        component: detail,
        name: "detail",
        props: true,
    },
]

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: routes
})

export default router
