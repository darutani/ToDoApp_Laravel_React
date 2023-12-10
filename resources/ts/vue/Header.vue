<template>
    <header class="global-head">
        <ul>
            <li><router-link to="/">ホーム</router-link></li>
            <li><router-link to="/help">ヘルプ</router-link></li>
            <li><router-link to="/login">ログイン</router-link></li>
            <li>
                <button @click="logout">ログアウト</button>
            </li>
        </ul>
    </header>
</template>

<script setup lang="ts">
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
