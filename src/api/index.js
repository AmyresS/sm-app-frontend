import axios from "axios";

//export const BASE_URL = "http://localhost:3000";
export const BASE_URL = import.meta.env.VITE_BASE_URL;
export const API_URL = `${BASE_URL}/api`;
export const API = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

var accessToken = null;
export function setAccessToken(_accessToken) {
    accessToken = _accessToken;
}

export function getAccessToken() {
    return accessToken;
}

API.interceptors.request.use((config) => {
    if (config?.headers && accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`
    }

    return config;
});