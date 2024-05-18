import { API, BASE_URL } from "@/api";
import { defineStore } from "pinia";
import { useUserStore } from "./user";
import { useAuthStore } from "./auth";
import { io } from "socket.io-client";

export const useChatStore = defineStore('chat', {
    state: () => ({
        chats: [],
        chat: null,
        messages: [],
        socket: null
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
        },

        async attachSocket() {
            this.socket = io(BASE_URL);
            this.socket.emit('test', 'hello world from websocket!!');
        },

        async postMessage(message) {
            const res = await API.post(`/chat/${this.chat.id}/message`, { message });
            const newMessage = res.data;

            const authStore = useAuthStore();
            newMessage.user = authStore.getUser;
            newMessage.isMyself = true;
            this.messages.push(newMessage);
        }
    }
});