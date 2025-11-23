// src/api/axiosClient.ts
import axios from "axios";

// Base API URL from environment variable
// const API_URL = process.env.REACT_APP_API;
const API_URL = import.meta.env.VITE_API;

// Create an axios instance
const axiosClient = axios.create({
  baseURL: API_URL, // all requests will prepend this URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: request interceptor
axiosClient.interceptors.request.use(
  (config) => {
    // Add auth token here if needed
    // config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

// Optional: response interceptor
axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // You can handle global errors here
    return Promise.reject(error);
  }
);

export default axiosClient;
