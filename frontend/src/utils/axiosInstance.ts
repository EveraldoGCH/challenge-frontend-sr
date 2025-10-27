import axios, {
    AxiosInstance,
    AxiosResponse
} from "axios";

const axiosInstance: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_API_URL || "",
});

const successHandler = (response: AxiosResponse) => {
    return Promise.resolve(response);
};

axiosInstance.interceptors.response.use(successHandler);

export default axiosInstance;

export const setAuthorizationHeader = (token: string | null) => {
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

