import axios from 'axios';

export default class HttpService {
    constructor() {
        this.axios = axios.create({
            baseURL: process.env.NEXT_PUBLIC_API_URL + '/api'
        });

        this.axios.interceptors.request.use((config) => {
            const token = localStorage.getItem('token');
            if (token) {
                config.headers.Authorization = 'Bearer ' + token
            }

            return config;
        });
    }

    post(url, data) {
        return this.axios.post(url, data);
    }

    get(url) {
        return this.axios.get(url);
    }

    put(url, data) {
        return this.axios.put(url, data);
    }
}