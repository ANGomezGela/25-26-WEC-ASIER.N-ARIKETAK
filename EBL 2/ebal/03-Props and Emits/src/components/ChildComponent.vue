<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  izena: String,
});

const emit = defineEmits(["onartu", "utzi"]);

function onartu() {
  emit("onartu"); // solo emitimos
}

function utzi() {
  emit("utzi"); // solo emitimos
}
</script>

<template>
  <div>
    <h2>Kaixo {{ props.izena }}</h2>
    <p>Mesedez, aukeratu aukera bat.</p>
    <button id="b_onartu" @click="onartu">ONARTU</button>
    <button id="b_utzi" @click="utzi">UTZI</button>
  </div>
</template>



<style scoped>
#b_onartu {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  margin-right: 1rem;
  border-radius: 5px;
  cursor: pointer;
}
#b_utzi {
  background-color: #ff4d4d;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
}
</style>