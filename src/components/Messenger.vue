<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="content">
    <div class="grid">
      <div class="backlight bl-1"></div>
      <div class="backlight bl-2"></div>
      <div class="backlight bl-3"></div>
      <div class="box messages-box">
        <div class="background-image"></div>
        <p v-if="selectedChat == null" noChatSelected>Select a chat to start a conversation</p>
        <Chat v-if="selectedChat != null" v-model="selectedChat" />
      </div>

      <div class="box tool-box">
        <p>chats</p>
        <div class="tool chat-new" @click="openModal(1)">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
              stroke-width="1.5"
            />
            <path
              d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
          <Teleport to="#modal-component">
            <Modal
              :shown="isModalOpened"
              @modal-close="closeModal"
              @submit="createChat"
              name="createChat-modal"
            >
              <template #header>Create chat</template>
              <template #content
                >(-- here must be a list of people from your division--)
                <!-- <input type="text" class="test" v-model="testInput" /> -->
              </template>
            </Modal>
          </Teleport>
        </div>
        <p>status</p>
        <div class="tool status">
          <div>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M18.7491 9.70957V9.00497C18.7491 5.13623 15.7274 2 12 2C8.27256 2 5.25087 5.13623 5.25087 9.00497V9.70957C5.25087 10.5552 5.00972 11.3818 4.5578 12.0854L3.45036 13.8095C2.43882 15.3843 3.21105 17.5249 4.97036 18.0229C9.57274 19.3257 14.4273 19.3257 19.0296 18.0229C20.789 17.5249 21.5612 15.3843 20.5496 13.8095L19.4422 12.0854C18.9903 11.3818 18.7491 10.5552 18.7491 9.70957Z"
                stroke-width="1.5"
              />
              <path
                d="M7.5 19C8.15503 20.7478 9.92246 22 12 22C14.0775 22 15.845 20.7478 16.5 19"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <div>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M18.7491 9.70957V9.00497C18.7491 5.13623 15.7274 2 12 2C8.27256 2 5.25087 5.13623 5.25087 9.00497V9.70957C5.25087 10.5552 5.00972 11.3818 4.5578 12.0854L3.45036 13.8095C2.43882 15.3843 3.21105 17.5249 4.97036 18.0229C9.57274 19.3257 14.4273 19.3257 19.0296 18.0229C20.789 17.5249 21.5612 15.3843 20.5496 13.8095L19.4422 12.0854C18.9903 11.3818 18.7491 10.5552 18.7491 9.70957Z"
                stroke-width="1.5"
              />
              <path
                d="M10 9H14L10 13H14"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.5 19C8.15503 20.7478 9.92246 22 12 22C14.0775 22 15.845 20.7478 16.5 19"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <div>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M18.7491 9.70957V9.00497C18.7491 5.13623 15.7274 2 12 2C8.27256 2 5.25087 5.13623 5.25087 9.00497V9.70957C5.25087 10.5552 5.00972 11.3818 4.5578 12.0854L3.45036 13.8095C2.43882 15.3843 3.21105 17.5249 4.97036 18.0229C9.57274 19.3257 14.4273 19.3257 19.0296 18.0229C20.789 17.5249 21.5612 15.3843 20.5496 13.8095L19.4422 12.0854C18.9903 11.3818 18.7491 10.5552 18.7491 9.70957Z"
                stroke-width="1.5"
              />
              <path
                d="M7.5 19C8.15503 20.7478 9.92246 22 12 22C14.0775 22 15.845 20.7478 16.5 19"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path d="M12 6V10" stroke-width="1.5" stroke-linecap="round" />
            </svg>
          </div>
        </div>
      </div>

      <div class="box chat-list-box">
        <div class="searchbar">
          <input type="text" placeholder="search" />
          <svg class="svg-icon search-icon" viewBox="0 0 19.9 19.7">
            <g class="search-path" fill="none" stroke>
              <path stroke-linecap="square" d="M18.5 18.3l-5.4-5.4" />
              <circle cx="8" cy="8" r="7" />
            </g>
          </svg>
          <svg class="svg-icon cross-icon" viewBox="0 0 24 24">
            <path
              d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"
            ></path>
          </svg>
        </div>

        <div class="chat-list">
          <div v-for="chat in chatList" :key="chat.id" :class="`chat ${chat.recipients.length > 2 ? 'chat-group' : ''}`" @click="selectedChat = chat.id">
            <div class="avatar">
              <img src="../assets/images/16.png" alt="" />
            </div>
            <div class="chat-preview">
              <p>{{ chat.title }}</p>
              <p v-if="chat.lastMessage">{{ chat.lastMessage.message }}</p>
            </div>
            <div class="chat-info">
              <p class="time">19:00</p>
              <p class="message-count">1</p>
            </div>
          </div>

        </div>
      </div>
      <div class="box chat-info-box">
        <p v-if="selectedChat == null" noChatSelected>No chat selected</p>
        <ChatInfo v-if="selectedChat != null" v-model="selectedChat" />
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '../assets/messenger.css';
</style>

<script setup>
import { ref, computed, onMounted } from 'vue'
import Chat from './Chat.vue'
import ChatInfo from './ChatInfo.vue'
import Modal from './Modal.vue'
import { useChatStore } from '@/stores/chat'

const chat = useChatStore();
const chatList = computed(() => {
  return chat.getChats
});

onMounted(() => {
  chat.findMyChats().then(() => {});
});

const selectedChat = ref()
const isModalOpened = ref(false)

const openModal = () => {
  isModalOpened.value = true
}
const closeModal = () => {
  isModalOpened.value = false
}

const createChat = () => {
  console.log('createChat')
  // chat creation code
}
</script>
