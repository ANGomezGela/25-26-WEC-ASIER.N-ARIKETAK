<script setup>
import { reactive, computed  } from "vue";

const user = reactive({
  izena: "",
  pasahitza: ""
});

const isFormValid = computed(() => {
  return user.izena && user.pasahitza;
});

function handleSubmit() {
    console.log(user);
}
</script>
<template>
  <h1>2. Atala - LoginForm</h1>

  <form @submit.prevent="handleSubmit">
    <label for="name2">Izena: </label>
    <input id="name2" v-model="user.izena" type="text" />
    <br>

    <label for="pasahitza">Pasahitza: </label>
    <input id="pasahitza" v-model="user.pasahitza" type="password" />
    <br>

    <button type="submit" :disabled="!isFormValid">Bidali</button>
  </form>
</template>
<style scoped>

</style>
