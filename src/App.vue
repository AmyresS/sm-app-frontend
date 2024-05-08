<script setup>
import { RouterLink, RouterView } from 'vue-router'
import LoginPage from './components/LoginPage.vue'
</script>

<template>
  <div class="acryllic-bg"></div>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/messages">Messenger</RouterLink>
        <RouterLink to="/dashboard">Dashboard</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
