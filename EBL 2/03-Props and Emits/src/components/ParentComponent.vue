<script setup>
import { ref } from "vue";
import ChildComponent from "./ChildComponent.vue";
const izena = ref("");
const aldiz_onartu = ref(0);
const aldiz_utzi = ref(0);
function handleOnartu() {
  aldiz_onartu.value++;
}

function handleUtzi() {
  aldiz_utzi.value++;
}
</script>
<template>
  <h1>Aita Konponentea</h1>
  <h3>Ongi etorri aita konponentera!</h3>
  <input v-model="izena" placeholder="Idatzi izena" />
  <ChildComponent :izena="izena" @onartu="handleOnartu" @utzi="handleUtzi" />
  <div>
    <h3>Estadistikak:</h3>
    <p>Aldiz onartuta: {{ aldiz_onartu }}</p>
    <p>Aldiz utzita: {{ aldiz_utzi }}</p>
  </div>
</template>
<style scoped>
div {
  border: 2px solid #397459;
  padding: 1rem;
  margin-top: 2rem;
  border-radius: 10px;
}
</style>
