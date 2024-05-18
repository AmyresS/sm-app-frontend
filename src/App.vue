<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useAuthStore } from './stores/auth'
import { computed, onMounted } from 'vue'
import Auth from './components/Auth.vue'

const auth = useAuthStore()

onMounted(() => {
  auth.refreshAccessToken().then(() => console.log("refresh"))
})

const isLoggedIn = computed(() => {
  return auth.isLoggedIn
})
</script>

<template>
  <div class="acryllic-bg"></div>
  <header v-if="isLoggedIn">
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/messages">Messenger</RouterLink>
        <RouterLink to="/dashboard">Dashboard</RouterLink>
      </nav>
    </div>
  </header>

  <div id="modal-component"></div>
  <Auth v-if="!isLoggedIn"></Auth>
  <RouterView v-if="isLoggedIn" />
</template>

<style scoped></style>
