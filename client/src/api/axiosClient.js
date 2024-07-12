import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'http://localhost:5000', // Ensure this matches your backend URL
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosClient.interceptors.request.use(
    (config) => {
        // Add token to headers if needed
        // const token = localStorage.getItem('token');
        // if (token) {
        //   config.headers.Authorization = `Bearer ${token}`;
        // }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

axiosClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // Handle global errors (e.g., error notifications)
        return Promise.reject(error);
    },
);

export default axiosClient;
