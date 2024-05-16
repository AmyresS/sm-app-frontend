import axios from "axios";

export const BASE_URL = "http://localhost:3000";
export const API_URL = `${BASE_URL}/api`;
export const API = axios.create({
    baseURL: API_URL
});