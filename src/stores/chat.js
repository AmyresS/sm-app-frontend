import { API } from "@/api";
import { defineStore } from "pinia";
import { useUserStore } from "./user";
import { useAuthStore } from "./auth";

export const useChatStore = defineStore('chat', {
    state: () => ({
        chats: [],
        messages: []
    }),

    getters: {
        getChats: (state) => state.chats,
        getMessages: (state) => state.messages
    },

    actions: {
        async findMyChats() {
            const res = await API.get("/chat");
            this.chats = res.data;
        },

        async getChatMessages(chatId) {
            const res = await API.get(`/chat/${chatId}/message`);
            this.messages = res.data;

            // get distinct list of users and fetch 'em all
            const userStore = useUserStore();
            const authStore = useAuthStore();
            const myself = authStore.getUser;
            await Promise.all([...new Set(this.messages.map((message) => message.userId))]
                .map((userId) => userStore.fetchUser(userId)));
            for (const message of this.messages) {
                const user = userStore.getUser(message.userId);
                message.user = user;
                if (myself) {
                    message.isMyself = myself.id === user.id;
                }
            }
        }
    }
});