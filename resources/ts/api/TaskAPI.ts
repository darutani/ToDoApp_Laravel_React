import { Task } from "@/types/Task";
import axios from 'axios';

export const fetchTasks = async () => {
    const response = await axios.get('/api/tasks');
    const data = response.data as Task[];
    return data;
}
