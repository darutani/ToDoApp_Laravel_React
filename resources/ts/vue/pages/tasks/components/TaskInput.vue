<template>
	<form class="input-form" @submit.prevent="handleSubmit">
        <div class="inner">
            <input type="text" class="input" placeholder="TODOを入力してください。" v-model="title" />
            <button class="btn is-primary">追加</button>
        </div>
    </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useCreateTask } from "@/queries/TaskQuery";

const title = ref('');
const createTask = useCreateTask();

const handleSubmit = () => {
    createTask.mutate(title.value);
    title.value = '';
}
</script>
