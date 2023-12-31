import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from "@/stores/authStore";
import home from "./vue/pages/tasks/index.vue"
import login from "./vue/pages/login/index.vue"
import help from "./vue/pages/help/index.vue"
import error from "@/vue/pages/error/index.vue";
import { useLoadingStore } from "@/stores/loadingStore";

const routes = [
    {
        path: "/",
        component: home,
        name: "home",
        meta: { requiresAuth: true }
    },
    {
        path: "/login",
        component: login,
        name: "login",
        meta: { requiresUnauth: true }
    },
    {
        path: "/help",
        component: help,
        name: "help",
    },
    {
        path: '/:pathMatch(.*)*', // キャッチオールルート
        component: error, // エラーページコンポーネントを指定
        name: 'error',
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

router.beforeEach(async (to, from, next) => {
    const authStore = useAuthStore();
    // const loadingStore = useLoadingStore();
    // loadingStore.setLoading(true);

    await authStore.checkAuth();

    if (to.meta.requiresAuth && !authStore.isAuth) {
        next({ name: 'login' });
    } else if (to.meta.requiresUnauth && authStore.isAuth) {
        next({ name: 'home' });
    } else {
        next();
    }
});

// router.afterEach(() => {
//     const loadingStore = useLoadingStore();
//     loadingStore.setLoading(false);
// })


export default router
