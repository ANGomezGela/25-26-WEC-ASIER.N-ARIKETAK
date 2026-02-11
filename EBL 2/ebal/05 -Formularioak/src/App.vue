<script setup>
import SimpleForm from './components/SimpleForm.vue'
import LoginForm from './components/LoginForm.vue'
import MovieForm from './components/MovieForm.vue'
</script>

<template>
  <SimpleForm/>
  <LoginForm/>
  <MovieForm/>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
