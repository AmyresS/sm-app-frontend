<template>
  <div @click="selectedChat = null" id="closeChatButton">
    <svg
      shape-rendering="geometricPrecision"
      text-rendering="geometricPrecision"
      image-rendering="optimizeQuality"
      fill-rule="evenodd"
      clip-rule="evenodd"
      viewBox="0 0 500 511.61"
    >
      <path
        fill-rule="nonzero"
        d="m234.04 148.39-15.5 101.27c45.53-4.54 96.06-15.77 138.72-45.89 47.72-33.69 86.31-91.72 98.25-191.8.87-7.43 7.62-12.75 15.06-11.87 5.73.68 10.21 4.85 11.55 10.13 10.87 32.61 16.46 63.43 17.63 92.35 3.27 79.4-26.39 144.21-70.18 193.61-43.36 48.92-100.66 82.64-153.32 100.33-20.18 6.79-39.8 11.27-57.77 13.36l15.44 85.83c1.31 7.33-3.57 14.37-10.91 15.69-4.07.72-8.04-.46-11-2.9L4.91 337.19c-5.76-4.76-6.57-13.32-1.8-19.08l1.54-1.58 207.06-180.39c5.64-4.92 14.22-4.32 19.14 1.32 2.72 3.12 3.75 7.13 3.19 10.93z"
      />
    </svg>
  </div>
  <div class="messages">
    <div class="fix-this-freaking-scroll"></div>

    <div class="message own" id="m_id225465472">
      <img class="avatar" src="../assets/images/photo_2024-05-03_02-58-25.jpg" alt="" />
      <div class="username">AmyresS</div>
      <div class="text">
        My first test message
        <div class="time">19:00</div>
      </div>
    </div>
    <div class="message" id="m_id225465472">
      <img class="avatar" src="../assets/images/avatar3.jpg" alt="" />
      <div class="username">Test User2</div>
      <div class="text">
        Hello world!
        <div class="time">18:31</div>
      </div>
    </div>
    <div class="message" id="m_id225465472">
      <img class="avatar" src="../assets/images/avatar2.jpg" alt="" />
      <div class="username">Test User</div>
      <div class="text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Sed arcu non odio euismod lacinia at quis risus sed. Odio eu
        feugiat pretium nibh. Eu mi bibendum neque egestas congue quisque egestas diam in.
        Pellentesque habitant morbi tristique senectus et netus et malesuada. Sagittis orci a
        scelerisque purus semper eget. Enim facilisis gravida neque convallis a cras semper auctor.
        Est sit amet facilisis magna etiam tempor orci. Fringilla ut morbi tincidunt augue interdum
        velit euismod in. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit
        scelerisque.
        <div class="time">Mon</div>
      </div>
    </div>
    <div class="message own" id="m_id225465472">
      <img class="avatar" src="../assets/images/photo_2024-05-03_02-58-25.jpg" alt="" />
      <div class="username">AmyresS</div>
      <div class="text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Sed arcu non odio euismod lacinia at quis risus sed. Odio eu
        feugiat pretium nibh. Eu mi bibendum neque egestas congue quisque egestas diam in.
        Pellentesque habitant morbi tristique senectus et netus et malesuada. Sagittis orci a
        scelerisque purus semper eget.
        <div class="time">28.05.2024</div>
      </div>
    </div>
    <div class="message" id="m_id225465472">
      <img class="avatar" src="../assets/images/avatar2.jpg" alt="" />
      <div class="username">Test User</div>
      <div class="text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Sed arcu non odio euismod lacinia at quis risus sed. Odio eu
        feugiat pretium nibh. Eu mi bibendum neque egestas congue quisque egestas diam in.
        Pellentesque habitant morbi tristique senectus et netus et malesuada. Sagittis orci a
        scelerisque purus semper eget. Enim facilisis gravida neque convallis a cras semper auctor.
        Est sit amet facilisis magna etiam tempor orci. Fringilla ut morbi tincidunt augue interdum
        velit euismod in. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit
        scelerisque.
        <div class="time">28.05.2024</div>
      </div>
    </div>
  </div>
  <form action="">
    <div class="type-area">
      <div class="media">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101 101" id="clip">
          <path
            d="M40.1 84.4c5.4 0 10.5-2.1 14.4-5.9l12.6-12.6c.9-.9.9-2.5 0-3.4s-2.5-.9-3.4 0L51.1 75c-2.9 2.9-6.8 4.5-11 4.5s-8-1.6-11-4.5-4.5-6.8-4.5-11 1.6-8 4.5-11l28.5-28.5c2.1-2.1 4.8-3.2 7.8-3.2 2.9 0 5.7 1.1 7.8 3.2 2.1 2.1 3.2 4.8 3.2 7.8 0 2.9-1.1 5.7-3.2 7.8L44.6 68.7c-2.5 2.5-6.7 2.5-9.2 0-1.2-1.2-1.9-2.9-1.9-4.6 0-1.7.7-3.4 1.9-4.6l12.7-12.7c.9-.9.9-2.5 0-3.4s-2.5-.9-3.4 0L32.1 56.1c-2.1 2.1-3.3 5-3.3 8s1.2 5.9 3.3 8c4.4 4.4 11.6 4.4 16 0l28.5-28.5c3-3 4.6-6.9 4.6-11.2s-1.6-8.2-4.6-11.2c-6.1-6.1-16.2-6.1-22.3 0L25.8 49.7c-3.8 3.8-5.9 8.9-5.9 14.4 0 5.4 2.1 10.5 5.9 14.4 3.8 3.8 8.9 5.9 14.3 5.9z"
          ></path>
        </svg>
      </div>
      <div class="textarea-box">
        <textarea
          name="user-message"
          id="user-message"
          placeholder="Your message..."
          ref="textarea"
          v-model="input"
        ></textarea>
      </div>
      <div class="send">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 32 32"
          viewBox="0 0 32 32"
          id="send"
        >
          <path
            d="M30.5,14.58997l-28-10c-0.54999-0.19995-1.16998-0.04999-1.58002,0.37C0.51001,5.38,0.39001,6.01001,0.60999,6.56l2.91882,7.31079C3.68054,14.25073,4.0484,14.5,4.45752,14.5h7.70245c0.83002,0,1.5,0.66998,1.5,1.5c0,0.82996-0.66998,1.5-1.5,1.5H4.45752c-0.40912,0-0.77698,0.24921-0.92871,0.62921L0.60999,25.44c-0.21997,0.54999-0.09998,1.17999,0.31,1.59998C1.21002,27.33997,1.59998,27.5,2,27.5c0.16998,0,0.34003-0.03003,0.5-0.09003l28-10c0.59998-0.20996,1-0.77997,1-1.40997S31.09998,14.79999,30.5,14.58997z"
          ></path>
        </svg>
      </div>
    </div>
  </form>
</template>

<style>
@import '../assets/Chat.css';
</style>

<script setup>
import { useTextareaAutosize } from '@vueuse/core'

const selectedChat = defineModel()
const { textarea, input } = useTextareaAutosize()
</script>
