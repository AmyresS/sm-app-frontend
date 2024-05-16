<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Auth from './components/Auth.vue'

const user = false;
</script>

<template>
  <div class="acryllic-bg"></div>
  <header v-if="user === true">
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/messages">Messenger</RouterLink>
        <RouterLink to="/dashboard">Dashboard</RouterLink>
      </nav>
    </div>
  </header>

  <div id="modal-component"></div>
  <Auth v-if="user === false"></Auth>
  <RouterView v-if="user === true"/>
</template>

<style scoped></style>
