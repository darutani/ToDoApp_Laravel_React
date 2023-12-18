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

const createTask = async ({ title }: Task) => {
    const response = await axios.post(
        `/api/task/`,
        { is_done: !is_done }
    )
    const data = response.data as Task;
    return data;
}

export {
    fetchTasks,
    updateDoneTask,
}
