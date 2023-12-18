<template>
    <li :class="{ 'done': task.is_done }">
        <label class="checkbox-label">
            <input type="checkbox" class="checkbox-input" @click="handleDoneChange(task)" />
        </label>
        <div><span>{{ task.title }}</span></div>
        <button class="btn is-delete">削除</button>
    </li>
</template>

<script setup lang="ts">
import { Task } from "@/types/Task";
import { useUpdateDoneTask } from "@/queries/TaskQuery";

const props = defineProps<{
    task: Task;
}>()

const updateDoneTask = useUpdateDoneTask();

const handleDoneChange = (task: Task) => {
    console.log('task: ', task);
    updateDoneTask.mutate(task)
}
</script>
