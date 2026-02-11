<script setup>
import { ref, reactive } from "vue";

const user = reactive({
  name: "",
  abizena: "",
  email: "",
});

const izenaError = ref(false);
const abizenError = ref(false);
const emailError = ref(false);
const bidalita = ref(false);

function handleSubmit() {
  izenaError .value = false;
  abizenError .value = false;
  emailError .value = false;
  bidalita .value = false;

  if (!user.name) {
    izenaError.value = true;
  }

  if (!user.abizena) {
    abizenError.value = true;
  } 

  if (!user.email) {
    emailError.value = true;
  } 
  
  if (user.name && user.abizena && user.email) {
    bidalita.value = true;
  } 


}
</script>
<template>
  <h1>1. Atala - SimpleForm</h1>

  <form @submit.prevent="handleSubmit">
    <label for="name">Izena: </label>
    <input id="name" v-model="user.name" type="text" />
    <span v-show="izenaError">  Bete izena</span>
    <br>

    <label for="abizena">Abizena: </label>
    <input id="abizena" v-model="user.abizena" type="text" />
    <span v-show="abizenError">  Bete abizena</span>
    <br>

    <label for="email">Email: </label>
    <input id="email" v-model="user.email" type="email" />
    <span v-show="emailError"> Bete email </span>
    <br>

    <p v-show="bidalita">Datuak zuzen bidalita</p>

    <button>Bidali</button>
  </form>
</template>
<style scoped>
  span {
    color: red;
  }
  p {
    color: green;
  }
</style>
