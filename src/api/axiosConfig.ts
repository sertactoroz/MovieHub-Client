import axios, { AxiosInstance } from 'axios';

const MovieAPIUrl = import.meta.env.VITE_MOVIEHUB_API_URL;
console.log(MovieAPIUrl);
const api: AxiosInstance = axios.create({
    baseURL: MovieAPIUrl,
    // headers: {
    //     'Content-Type': 'application/json',
    //     'Accept': 'application/json'
    // }
});

export default api;