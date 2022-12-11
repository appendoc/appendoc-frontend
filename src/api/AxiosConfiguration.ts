import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';

const FALLBACK_BASE_URL = 'http://api-dev.appendoc.wiki:8080'
const axiosConfig: AxiosRequestConfig = {
    baseURL: process.env.VUE_APP_API_ENDPOINT || FALLBACK_BASE_URL
}

const apiClient: AxiosInstance = axios.create();
export default apiClient
