<template>
  <div class="content">
    <div class="grid">
      <div class="backlight bl-1"></div>
      <div class="backlight bl-2"></div>
      <div class="backlight bl-3"></div>
      <div class="box messages-box">
        <p v-if="selectedChat == null" noChatSelected>Select a chat to start a conversation</p>
        <Chat v-if="selectedChat != null" v-model="selectedChat" />
      </div>

      <div class="box tool-box"></div>

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
          <div class="chat" @click="selectedChat = 'p_id1'">
            <div class="avatar">
              <img src="../assets/images/16.png" alt="" />
            </div>
            <div class="chat-preview">
              <p>Some chat name</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div class="chat-info">
              <p class="time">19:00</p>
              <p class="message-count unread">12</p>
            </div>
          </div>

          <div class="chat chat-group">
            <div class="avatar">
              <img src="../assets/images/7.png" alt="" />
            </div>
            <div class="chat-preview">
              <p>Group</p>
              <p>Hello world!</p>
            </div>
            <div class="chat-info">
              <p class="time">19:00</p>
              <p class="message-count unread">87</p>
            </div>
          </div>

          <div class="chat">
            <div class="avatar">
              <img src="../assets/images/4.png" alt="" />
            </div>
            <div class="chat-preview">
              <p>Some chat name</p>
              <p>Test message for current chat. Some more text for testing. And even more!!</p>
            </div>
            <div class="chat-info">
              <p class="time">19:00</p>
              <p class="message-count">12</p>
            </div>
          </div>

          <div class="chat">
            <div class="avatar">
              <img src="../assets/images/7.png" alt="" />
            </div>
            <div class="chat-preview">
              <p>Some chat name</p>
              <p>Test message for current chat. Some more text for testing. And even more!!</p>
            </div>
            <div class="chat-info">
              <p class="time">19:00</p>
              <p class="message-count unread">12</p>
            </div>
          </div>

          <div class="chat chat-group">
            <div class="avatar">
              <img src="../assets/images/16.png" alt="" />
            </div>
            <div class="chat-preview">
              <p>Some group name</p>
              <p>Test message for current chat. Some more text for testing. And even more!!</p>
            </div>
            <div class="chat-info">
              <p class="time">Sat</p>
              <p class="message-count">28</p>
            </div>
          </div>

          <div class="chat">
            <div class="avatar">
              <img src="../assets/images/16.png" alt="" />
            </div>
            <div class="chat-preview">
              <p>Some chat name</p>
              <p>Test message for current chat. Some more text for testing. And even more!!</p>
            </div>
            <div class="chat-info">
              <p class="time">Fri</p>
              <p class="message-count">12</p>
            </div>
          </div>

          <div class="chat chat-group">
            <div class="avatar">
              <img src="../assets/images/7.png" alt="" />
            </div>
            <div class="chat-preview">
              <p>Some group name</p>
              <p>Test message for current chat. Some more text for testing. And even more!!</p>
            </div>
            <div class="chat-info">
              <p class="time">Thu</p>
              <p class="message-count unread">999+</p>
            </div>
          </div>

          <div class="chat">
            <div class="avatar">
              <img src="../assets/images/4.png" alt="" />
            </div>
            <div class="chat-preview">
              <p>Some chat name</p>
              <p>Test message for current chat. Some more text for testing. And even more!!</p>
            </div>
            <div class="chat-info">
              <p class="time">Wed</p>
              <p class="message-count unread">2</p>
            </div>
          </div>

          <div class="chat">
            <div class="avatar">
              <img src="../assets/images/7.png" alt="" />
            </div>
            <div class="chat-preview">
              <p>Some chat name</p>
              <p>Test message for current chat. Some more text for testing. And even more!!</p>
            </div>
            <div class="chat-info">
              <p class="time">Tue</p>
              <p class="message-count unread">8</p>
            </div>
          </div>

          <div class="chat chat-group">
            <div class="avatar">
              <img src="../assets/images/16.png" alt="" />
            </div>
            <div class="chat-preview">
              <p>Some group name</p>
              <p>Test message for current chat. Some more text for testing. And even more!!</p>
            </div>
            <div class="chat-info">
              <p class="time">Mon</p>
              <p class="message-count">28</p>
            </div>
          </div>
          <div class="chat">
            <div class="avatar">
              <img src="../assets/images/16.png" alt="" />
            </div>
            <div class="chat-preview">
              <p>Some chat name</p>
              <p>Test message for current chat. Some more text for testing. And even more!!</p>
            </div>
            <div class="chat-info">
              <p class="time">28.05.2024</p>
              <p class="message-count unread">12</p>
            </div>
          </div>

          <div class="chat chat-group">
            <div class="avatar">
              <img src="../assets/images/7.png" alt="" />
            </div>
            <div class="chat-preview">
              <p>Some group name</p>
              <p>Test message for current chat. Some more text for testing. And even more!!</p>
            </div>
            <div class="chat-info">
              <p class="time">28.05.2024</p>
              <p class="message-count unread">99+</p>
            </div>
          </div>

          <div class="chat">
            <div class="avatar">
              <img src="../assets/images/4.png" alt="" />
            </div>
            <div class="chat-preview">
              <p>Some chat name</p>
              <p>Test message for current chat. Some more text for testing. And even more!!</p>
            </div>
            <div class="chat-info">
              <p class="time">28.05.2024</p>
              <p class="message-count">12</p>
            </div>
          </div>

          <div class="chat">
            <div class="avatar">
              <img src="../assets/images/7.png" alt="" />
            </div>
            <div class="chat-preview">
              <p>Some chat name</p>
              <p>Test message for current chat. Some more text for testing. And even more!!</p>
            </div>
            <div class="chat-info">
              <p class="time">28.05.2024</p>
              <p class="message-count">12</p>
            </div>
          </div>

          <div class="chat chat-group">
            <div class="avatar">
              <img src="../assets/images/16.png" alt="" />
            </div>
            <div class="chat-preview">
              <p>Some group name</p>
              <p>Test message for current chat. Some more text for testing. And even more!!</p>
            </div>
            <div class="chat-info">
              <p class="time">28.05.2024</p>
              <p class="message-count">28</p>
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
import { ref } from 'vue'
import Chat from './Chat.vue'
import ChatInfo from './ChatInfo.vue'

const selectedChat = ref()
</script>
