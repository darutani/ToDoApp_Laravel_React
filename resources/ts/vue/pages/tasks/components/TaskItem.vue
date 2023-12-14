<template>
    <li>
        <label class="checkbox-label">
            <input type="checkbox" class="checkbox-input" />
        </label>
        <div><span>{{ task.title }}</span></div>
        <button class="btn is-delete">削除</button>
    </li>
</template>

<script setup lang="ts">
import { Task } from "@/types/Task";

const props = defineProps<{
    task: Task;
}>()
</script>
