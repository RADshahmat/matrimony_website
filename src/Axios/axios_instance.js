import axios from 'axios';

const axiosInstance = axios.create({
  //baseURL: 'http://localhost:3004/',
  baseURL: 'https://backend.butterfly.hurairaconsultancy.com/',
  withCredentials: true, 
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('butterfly_user_session_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default axiosInstance;