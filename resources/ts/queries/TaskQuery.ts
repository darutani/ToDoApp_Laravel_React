import { useQuery, useMutation, useQueryClient } from 'vue-query';
import * as api from "@/api/TaskAPI";
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const useTasks = () => {
    return useQuery('tasks', () => api.fetchTasks());
}

const useUpdateDoneTask = () => {
    const queryClient = useQueryClient();

    return useMutation(api.updateDoneTask, {
        onSuccess: () => {
            queryClient.invalidateQueries('tasks')
        },
        onError: () => {
            toast.error('更新に失敗しました。', {
                "theme": "colored",
            })
        }
    })
}

export {
    useTasks,
    useUpdateDoneTask,
}
