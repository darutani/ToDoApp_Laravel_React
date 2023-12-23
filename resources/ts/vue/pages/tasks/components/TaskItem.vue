<template>
    <li :class="{ 'done': task.is_done }">
        <label class="checkbox-label">
            <input type="checkbox" class="checkbox-input" @click="handleDoneChange()" />
        </label>
        <div v-if=" !isEditing" @click="handleToggleEdit()">
            <span>{{ task.title }}</span>
        </div>
        <form v-else @submit.prevent="handleUpdate">
            <input type="text" class="input" v-model="editTitle" @keydown="handleOnKey">
        </form>
        <button class="btn is-delete" v-if="!isEditing" @click="handleDelete">削除</button>
        <button class="btn" v-else @click="handleUpdate">更新</button>
    </li>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Task } from "@/types/Task";
import { useUpdateDoneTask, useUpdateTask, useDeleteTask } from "@/queries/TaskQuery";
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const props = defineProps<{
    task: Task;
}>()

const updateDoneTask = useUpdateDoneTask();
const updateTask = useUpdateTask();
const deleteTask = useDeleteTask();

const isEditing = ref(false);
const editTitle = ref("");

const handleDoneChange = () => {
    updateDoneTask.mutate(props.task)
}

const handleToggleEdit = () => {
    isEditing.value = true;
    editTitle.value = props.task.title;
}

const handleOnKey = (e: KeyboardEvent) => {
    if (['Escape', 'Tab'].includes(e.key)) {
        isEditing.value = false;
    }
}

const handleUpdate = () => {
    if (!editTitle.value) {
        toast.error('タイトルを入力してください')
        return
    }

    const newTask = { ...props.task, title: editTitle.value }

    updateTask.mutate({
        id: props.task.id,
        task: newTask,
    });
    isEditing.value = false;
}

const handleDelete = () => {
    deleteTask.mutate(props.task.id);
}
</script>
