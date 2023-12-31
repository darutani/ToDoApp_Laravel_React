<template>
    <header class="global-head">
        <ul>
            <li v-if="authStore.isAuth"><router-link to="/">ホーム</router-link></li>
            <li><router-link to="/help">ヘルプ</router-link></li>
            <li v-if="!authStore.isAuth"><router-link to="/login">ログイン</router-link></li>
            <li @click="handleLogout" v-if="authStore.isAuth">
                <span>ログアウト</span>
            </li>
        </ul>
    </header>
</template>

<script setup lang="ts">
import { useLogout } from "@/queries/AuthQuery";
import { useAuthStore } from '@/stores/authStore';

const authStore = useAuthStore();

const logout = useLogout();

const handleLogout = () => {
    logout.mutate();
}
</script>

<style>
.global-head {
    color: #fff;
    background: #201402;
    margin: 0;
    padding: 10px;

    a {
        color: #fff;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
    ul {
        list-style: none;
        display: flex;
        margin: 0;
        padding: 0;

        li {

            margin: 0 10px;

            span {
                cursor: pointer;

                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
}
</style>
