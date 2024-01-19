<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useUserStore } from '../../store/modules/user.ts';
import router from '../../router';

const userStore = useUserStore();

onMounted(() => {
  setTimeout(() => {
    userStore.setUser({ id: 2, name: 'Yernar Mussin'});

    setTimeout(() => {
      router.push('/app')
    }, 1500)
  }, 1500)
})
</script>

<template>
  <h1>Login</h1>
  <p>{{ userStore.currentUser.id }} - {{ userStore.currentUser.name }}</p>
</template>
