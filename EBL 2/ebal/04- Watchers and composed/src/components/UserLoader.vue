<script setup>
import { reactive, ref, watch } from "vue";
const ezDago = ref(false);
const kargatzen = ref(false);
const userId = ref(0);
const users = [
  { id: 1, izena: "Asier", adina: 20 },
  { id: 2, izena: "Mikel", adina: 23 },
  { id: 3, izena: "Nicolas", adina: 26 },
];
let user = reactive("");

watch(userId, () => {
  user = null;
  ezDago.value = false;
  kargatzen.value = true;
  setInterval(aux, 1000);
});

function aux() {
  const index = users.findIndex((user) => user.id === Number(userId.value));
  if (index !== -1) {
    user = users[index];
  } else {
    ezDago.value = true;
  }
  kargatzen.value = false;
}
</script>
<template>
  <h1>3. Atala - UserLoader</h1>
  <input type="number" v-model="userId" placeholder="sartu user Id bat." />
  <p v-show="ezDago">Ez dago user Id horrekin.</p>
  <p v-show="kargatzen">
    {{ userId }} erabiltzailearen datuak kargatzen.
  </p>
  <p v-show="user">Izena: {{ user.izena }} --- Adina: {{ user.adina }}</p>
</template>
<style scoped></style>
