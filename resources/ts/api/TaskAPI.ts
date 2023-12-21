import { Task } from "@/types/Task";
import axios from 'axios';

const fetchTasks = async () => {
    const response = await axios.get('/api/tasks');
    const data = response.data as Task[];
    return data;
}

const updateDoneTask = async ({ id, is_done }: Task) => {
    const response = await axios.patch(
        `/api/tasks/update-done/${id}`,
        { is_done: !is_done }
    )
    const data = response.data as Task;
    return data;
}

const createTask = async (title: string) => {
    const response = await axios.post(
        `/api/tasks/`,
        { title: title }
    )
    const data = response.data as Task;
    return data;
}

const updateTask = async ({ id, task }: {id: number, task: Task}) => {
    const response = await axios.patch(
        `/api/tasks/${id}`, task
    )
    const data = response.data as Task;
    return data;
}

const deleteTask = async (id: number) => {
    const response = await axios.delete(
        `/api/tasks/${id}`
    )
    const data = response.data as Task;
    return data;
}

export {
    fetchTasks,
    updateDoneTask,
    createTask,
    updateTask,
    deleteTask
}
