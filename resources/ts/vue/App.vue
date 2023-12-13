<template>
    <v-app>
        <Header></Header>
        <v-main>
            <router-view></router-view>
        </v-main>
    </v-app>
</template>

<script setup lang="ts">
import Header from "@/vue/components/Header.vue"
</script>

<style>
*,
*:active,
*:hover,
*:before,
*:after {
    box-sizing: border-box;
}

body,html {
    padding: 0;
    margin: 0;
}
</style>
