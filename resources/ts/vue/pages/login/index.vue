<template>
    <div class="login-page">
        <div class="login-panel">
            <form @submit.prevent="handleLogin">
                <div class="input-group">
                    <label>メールアドレス</label>
                    <input type="email" class="input" v-model="inputEmail" />
                </div>
                <div class="input-group">
                    <label>パスワード</label>
                    <input type="password" class="input" v-model="inputPassword" />
                </div>
                <button type="submit" class="btn">ログイン</button>
            </form>
        </div>
        <div class="links"><a href="#">ヘルプ</a></div>
    </div>
</template>

<script setup lang="ts">
import { useLogin } from "@/queries/AuthQuery";
import { ref } from "vue";

const inputEmail = ref('admin@example.com');
const inputPassword = ref('123456789');

const login = useLogin();

const handleLogin = () => {
    login.mutate({ email: inputEmail.value, password: inputPassword.value })
}
</script>

<style>
.login-page {
    background: #f9f3ee;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .links {
        margin-top: 10px;
        font-size: 93%;

        a {
            color: #1b1e21;
        }
    }
}

.login-panel {
    width: 500px;
    background: #fcfaf6;
    padding: 50px;
    border-radius: 20px;
    box-shadow: 2px 2px 25px #e3dfd4;

    .input-group {
        margin-bottom: 10px;
    }

    label {
        font-size: .8em;
        width: 100%;
        display: block;
    }

    .input {
        width: 100%;
    }

    .btn {
        margin-top: 5px;
    }
}
</style>
