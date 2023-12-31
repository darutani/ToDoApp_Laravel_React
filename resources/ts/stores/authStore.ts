import { defineStore } from 'pinia';
import * as api from "@/api/AuthAPI";

export const useAuthStore = defineStore('auth', {
    state: () => ({
        isAuth: false
    }),
    actions: {
        async checkAuth() {
            try {
                const response = await api.getUser();
                this.isAuth = !!response;
            } catch(error) {
                this.isAuth = false;
            }
        },
        setIsAuth(isAuthenticated: boolean) {
            this.isAuth = isAuthenticated;
        },
    }
});
