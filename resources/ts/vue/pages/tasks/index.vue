<template>
    <div v-if="isLoading" class="Loader"></div>
    <div v-else-if="isError" class="align-center">データの読み込みに失敗しました。</div>
    <div v-else-if="!tasks || tasks.length <= 0" class="align-center">登録されたToDoはありません。</div>
    <div v-else>
        <form class="input-form">
            <div class="inner">
                <input type="text" class="input" placeholder="TODOを入力してください。" value="" />
                <button class="btn is-primary">追加</button>
            </div>
        </form>
        <div class="inner">
            <ul class="task-list">
                <li v-for="task in tasks" :key="task.id">
                    <label class="checkbox-label">
                        <input type="checkbox" class="checkbox-input" />
                    </label>
                    <div><span>{{ task.title }}</span></div>
                    <button class="btn is-delete">削除</button>
                </li>
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
    </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { ref } from "vue";
import { onMounted } from "vue";
import { useQuery } from 'vue-query';

// const tasks = ref<Task[]>([]);

type Task = {
    id: number,
    title: string,
    is_done: boolean,
    created_at: Date,
    updated_at: Date,
}

// const getTasks = async () => {
//     try {
//         const { data } = await axios.get<Task[]>('/api/tasks');
//         tasks.value = data;
//         console.log(data);
//     }
//     catch(error) {
//         console.log('APIエラー：', error);
//     }
// };

// onMounted(() => {
//     getTasks();
// });

const fetchTasks = async () => {
    // const { data } = await axios.get<Task[]>('/api/tasks');
    // return data;
    try {
        const { data } = await axios.get<Task[]>('/api/tasks');
        return data;
    } catch (error) {
        throw error;
    }
}

const { data: tasks, isLoading, isError } = useQuery('tasks', fetchTasks);
</script>

<style>
.inner {
    max-width: 700px;
    margin: 0 auto;
}

.input {
    outline: none;
    border: solid 3px #d7d2cd;
    padding: 10px;
    border-radius: 7px;

    &:focus {
        background: #f9f9f0;
    }
}

.task-list {
    list-style: none;
    margin: 0;
    padding: 0;
    border-top: 1px solid #d7d2cd;


    li {
        padding: 20px 10px;
        border-bottom: 1px solid #d7d2cd;
        display: flex;
        align-items: center;
        position: relative;

        &.done span {
            text-decoration: line-through;
        }

        label {
            display: block;
            cursor: pointer;
        }

        > form,
        > div {
            display: block;
            width: calc(100% - 120px);
        }

        .btn {
            position: absolute;
            right: 10px;
            width: 80px;
            padding: .5em 1em .4em;
            font-size: 13px;
            z-index: 10;
        }

        .is-cancel {
            width: 96px;
            background-color: #999;
        }

        .input {
            display: block;
            position: relative;
            width: 100%;
            font-size: 15px;
            outline: none;
            border: solid 1px #d7d2cd;
            padding: 7px 7px;
            border-radius: 4px;
            margin-top: -5px;

            &:focus {
                background: #f9f9f0;
            }
        }
    }
}

.input-form {
    margin-bottom: 40px;
    background: #f9f3ee;
    padding: 40px 0;
    border-bottom: 1px solid #d7d2cd;

    .inner {
        display: flex;
        position: relative;
    }

    .input {
        width: 80%;
        font-size: 15px;
        outline: none;
        border: solid 3px #d7d2cd;
        margin-right: 10px;
    }

    .btn {
        width: 20%;
    }

    .input.error {
        background-color: #ffd4dd;
        border-color: #d01137;
    }

    .error-message {
        position: absolute;
        top: 48px;
        background-color: #d01137;
        color: #fff;
        font-size: 13px;
        font-weight: bold;
        border-radius: 5px;
        padding: 2px 5px;
    }
}

.btn {
    font-size: 15px;
    cursor: pointer;
    font-weight: bold;
    display: inline-block;
    padding: 10px 15px;
    text-decoration: none;
    background: #668ad8;
    color: #fff;
    border: none;
    border-bottom: solid 4px #485879;
    border-radius: 7px;
    outline: none;

    &:active {
        transform: translateY(4px);
        border-bottom: none;
        margin-bottom: 4px;
    }

    &.is-delete {
        background-color: #d86681;
        border-bottom-color: #956270;
    }

}

.checkbox-input {
    display: none;
}

.checkbox-label {
    position: relative;
    margin-right: 30px;
    top: -10px;

    &::before {
        content: "";
        display: block;
        position: absolute;
        top: 2px;
        left: 0;
        width: 18px;
        height: 18px;
        border: 1px solid #d7d2cd;
        border-radius: 4px;
    }
}

.done .checkbox-label {
    color: #999;

    &::after {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 5px;
        width: 7px;
        height: 14px;
        transform: rotate(40deg);
        border-bottom: 3px solid #d01137;
        border-right: 3px solid #d01137;
    }
}

.loader,
.loader:after {
    border-radius: 50%;
    width: 7em;
    height: 7em;
}
.loader {
    margin: 20px auto;
    font-size: 10px;
    position: relative;
    border-top: .4em solid rgba(255,174,0, 0.2);
    border-right: .4em solid rgba(255,174,0, 0.2);
    border-bottom: .4em solid rgba(255,174,0, 0.2);
    border-left: .4em solid #ffae00;
    transform: translateZ(0);
    animation: load-animate .5s infinite linear;
}

@keyframes load-animate {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
