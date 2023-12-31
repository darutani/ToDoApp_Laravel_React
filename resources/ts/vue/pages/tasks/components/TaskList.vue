<template>
    <div class="inner">
        <ul class="task-list">
            <TaskItem v-for="task in tasks" :key="task.id" :task="task" />
        </ul>
    </div>
</template>

<script setup lang="ts">
import { Task } from "@/types/Task";
import TaskItem from './TaskItem.vue'

const props = defineProps({
    tasks: Array as () => Task[],
})
</script>
