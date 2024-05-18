import { API } from "@/api";
import { defineStore } from "pinia";
import { useUserStore } from "./user";
import { useAuthStore } from "./auth";

export const useChatStore = defineStore('chat', {
    state: () => ({
        chats: [],
        chat: null,
        messages: []
    }),

    getters: {
        getChats: (state) => state.chats,
        getChat: (state) => state.chat,
        getRecipients: (state) => state.chat?.recipients,
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
            
            await userStore.resolveUsers(this.messages.map((message) => message.userId));
            for (const message of this.messages) {
                const user = userStore.getUser(message.userId);
                message.user = user;
                if (myself) {
                    message.isMyself = myself.id === user.id;
                }
            }
        },

        async fetchChat(chatId) {
            const res = await API.get(`/chat/${chatId}`);
            this.chat = res.data;

            const userStore = useUserStore();
            await userStore.resolveUsers(this.chat.recipients);
            this.chat.recipients = this.chat.recipients.map((userId) => userStore.getUser(userId));
        }
    }
});