<script setup>
import { ref, watch, computed } from "vue";
const age = ref(0);
const clasi = ref("Momentuz adina: ");
const erantzuna = computed(() => `${clasi.value} ${age.value}`);
watch(age, (newAge) => {
  if (newAge < 18) {
    clasi.value = "Adingabekoa zara. Daukazun urteak: ";
  } else if (newAge >= 18 && newAge < 65) {
    clasi.value = "Heldua zara. Daukazun urteak: ";
  } else if (65 <= newAge) {
    clasi.value = "Nagusia zara. Daukazun urteak: ";
  }
});
</script>
<template>
  <h1>1. Atal - AgeClassifier</h1>
  <p>Sartu zure adina:</p>
  <input type="number" v-model="age" placeholder="Sartu zure adina" />
  <p>{{ erantzuna }}</p>
</template>
<style scoped></style>
