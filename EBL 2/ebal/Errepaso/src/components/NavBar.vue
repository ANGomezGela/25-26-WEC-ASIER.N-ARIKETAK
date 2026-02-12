<script setup>
import { useUserStore } from '@/stores/userStore'
import { computed } from 'vue'

const userStore = useUserStore()
const userName = computed(() => {
  if (userStore.user) {
    return userStore.user.izena ?? 'Gonbidatua'
  }
  return 'Gonbidatua'
})
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/list">Lista</RouterLink>
    <RouterLink to="/about">Sobre nosotros</RouterLink>
    <span style="margin-left:60px">
      {{ userName }}
    </span>
  </nav>

  <RouterView />
</template>

<style scoped>
nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  gap: 12px;
  padding: 1rem;
  background-color: #333;
  z-index: 1000;
}

a,
span {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
}

a:hover {
  background-color: #555;
  border-radius: 4px;
}
</style>
