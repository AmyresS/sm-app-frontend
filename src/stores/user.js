import { API } from "@/api";
import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {
    state: () => ({
        users: {}
    }),

    getters: {
        getUser: (state) => {
            return (userId) => state.users[userId]
        }
    },

    actions: {
        async fetchUser(userId) {
            const res = await API.get(`/user/${userId}`);
            this.users[res.data.id] = res.data;

            return res.data;
        },

        async resolveUsers(userIds) {
            const users = [...new Set(userIds)]; // deduplicate
            const res = await API.get('/user', { users });
            
            for (const user of res.data) {
                this.users[user.id] = user;
            }
        }
    }
});