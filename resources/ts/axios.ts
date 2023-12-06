import axios from "axios"

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8082/api/',
    headers: {
        "Content-type": "application/json",
    }
})

export default axiosInstance

