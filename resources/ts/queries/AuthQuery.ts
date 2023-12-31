import { useQuery, useMutation } from 'vue-query';
import * as api from "@/api/AuthAPI";
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { useAuthStore } from '@/stores/authStore';
import router from '@/router';

const useUser = () => {
    return useQuery('users', () => api.getUser());
}

const useLogin = () => {
    const authStore = useAuthStore();

    return useMutation(api.login, {
        onSuccess: (user) => {
            authStore.setIsAuth(true);
            router.push({ name: 'home' })
        },
        onError: () => {
            toast.error('ログインに失敗しました')
        }
    })
}

const useLogout = () => {
    const authStore = useAuthStore();

    return useMutation(api.logout, {
        onSuccess: (user) => {
            authStore.setIsAuth(false);
            router.push({ name: 'login' })
        },
        onError: () => {
            toast.error('ログアウトに失敗しました')
        }
    })
}

export {
    useUser,
    useLogin,
    useLogout
}
