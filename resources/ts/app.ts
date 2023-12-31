import { createApp } from 'vue';
import App from "./vue/App.vue";
import router from './router';
import { QueryClient, VUE_QUERY_CLIENT } from 'vue-query';
import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify';
import { createPinia } from 'pinia';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
          // リトライの回数を設定
          retry: false, // デフォルトは3回
        },
    },
});

const app = createApp(App);
const pinia = createPinia();

app.use(router)
app.use(pinia);
app.provide(VUE_QUERY_CLIENT, queryClient);
app.mount('#app');
app.use(Vue3Toastify, {
    autoClose: 3000,
    hideProgressBar: true,
    theme: "colored",
  } as ToastContainerOptions);
