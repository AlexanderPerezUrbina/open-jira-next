import axios from 'axios';

const api = axios.create({
    baseURL: '/api/entries',
});

export default api;
