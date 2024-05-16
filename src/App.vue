<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useAuthStore } from './stores/auth';
import { computed, onMounted } from 'vue';

const authStore = useAuthStore();

onMounted(() => {
  // temp
  authStore.login("test@sm-app.org", "test").then(() => {
    authStore.refreshAccessToken().then(() => {
    });

    console.log(authStore.getUser.id);
  });
});

const isLoggedIn = computed(() => {
  return authStore.isLoggedIn;
})
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
  <Auth v-if="!isLoggedIn"></Auth>
  <RouterView v-if="isLoggedIn"/>
</template>

<style scoped></style>