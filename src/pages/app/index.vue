<script setup lang="ts">
import { ref } from 'vue'
import { useUserStore } from '../../store/modules/user.ts';

defineProps<{ msg: string }>()
const count = ref(0)

const userStore = useUserStore();
</script>

<template>
  <h1>App</h1>
  <p>{{ userStore.currentUser.id }} - {{ userStore.currentUser.name }}</p>
</template>
