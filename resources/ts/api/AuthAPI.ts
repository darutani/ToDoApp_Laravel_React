import { User } from "@/types/User";
import axios from 'axios';

const getUser = async () => {
    const response = await axios.get('/api/user');
    const data = response.data as User;
    return data;
}

const login = async ({ email, password }: { email: string, password: string }) => {
    const response = await axios.post(
        `/api/login/`,
        { email, password }
    )
    const data = response.data as User;
    return data;
}

const logout = async () => {
    const response = await axios.post(
        `/api/logout/`
    )
    const data = response.data as User;
    return data;
}


export {
    getUser,
    login,
    logout
}
