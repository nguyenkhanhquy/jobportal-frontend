import axios from "axios";
import { getToken } from "../services/localStorageService";

const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_BACKEND_URL}`,
    headers: {
        "Content-Type": "application/json",
    },
});

axiosClient.interceptors.request.use(
    (config) => {
        const accessToken = getToken();
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => Promise.reject(error),
);

axiosClient.interceptors.response.use(
    (response) => response?.data,
    (error) => Promise.reject(error?.response?.data),
);

export default axiosClient;
