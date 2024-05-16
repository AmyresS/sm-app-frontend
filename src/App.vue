<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useAuthStore } from './stores/auth';
import { onMounted } from 'vue';

const authStore = useAuthStore();

onMounted(() => {
  // temp
  authStore.login("test@sm-app.org", "test").then(() => {
    authStore.refreshAccessToken().then(() => {
      console.log(authStore.getUser());
    });
  });
});
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