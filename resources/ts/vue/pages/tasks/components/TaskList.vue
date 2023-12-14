<template>
    <div class="inner">
        <ul class="task-list">
            <TaskItem v-for="task in tasks" :key="task.id" :task="task" />
            <li>
                <label class="checkbox-label">
                    <input type="checkbox" class="checkbox-input" />
                </label>
                <div><span>新しいTODO</span></div>
                <button class="btn is-delete">削除</button>
            </li>
            <li>
                <label class="checkbox-label">
                    <input type="checkbox" class="checkbox-input" />
                </label>
                <form><input type="text" class="input" value="編集中のTODO" /></form>
                <button class="btn">更新</button>
            </li>
            <li class="done">
                <label class="checkbox-label">
                    <input type="checkbox" class="checkbox-input" />
                </label>
                <div><span>実行したTODO</span></div>
                <button class="btn is-delete">削除</button>
            </li>
            <li>
                <label class="checkbox-label">
                    <input type="checkbox" class="checkbox-input" />
                </label>
                <div><span>ゴミ捨て</span></div>
                <button class="btn is-delete">削除</button>
            </li>
            <li>
                <label class="checkbox-label">
                    <input type="checkbox" class="checkbox-input" />
                </label>
                <div><span>掃除</span></div>
                <button class="btn is-delete">削除</button>
            </li>
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
