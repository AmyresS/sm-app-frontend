<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="wrapper-auth">
    <div class="box-auth">
      <p class="header">Authentication</p>
      <input v-model="email" type="text" placeholder="email" />
      <input v-model="password" type="password" placeholder="password" />
      <button v-on:click="onLogin">Login</button>
    </div>
  </div>
</template>

<style>
@import '../assets/auth.css';
</style>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';
const auth = useAuthStore();

const email = ref();
const password = ref();

function onLogin(e) {
  e.preventDefault();

  auth.login(email.value, password.value).then(() => console.log(auth.getUser.id));
}
</script>
