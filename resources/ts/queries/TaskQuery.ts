import { useQuery } from 'vue-query';
import * as api from "@/api/TaskAPI";

export const useTasks = () => {
    return useQuery('tasks', () => api.fetchTasks());
}
