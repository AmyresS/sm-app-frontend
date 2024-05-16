import { defineStore } from "pinia";
import { API } from "@/api";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        user: null,
        accessToken: null
    }),

    getters: {
        getUser: (state) => state.user,
        isLoggedIn: (state) => state.user !== null
    },

    actions: {
        async refreshAccessToken() {
            const res = await API.post("/auth/login/access-token");
            this.user = res.data.user;
            this.accessToken = res.data.accessToken;
        },

        async login(email, password) {
            const res = await API.post("/auth/login", { email, password });
            this.user = res.data.user;
            this.accessToken = res.data.accessToken;
        }
    }
});