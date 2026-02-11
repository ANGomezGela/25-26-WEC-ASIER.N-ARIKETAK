<script setup>
import { ref, watch } from "vue";
const step = ref(0);
const count = ref(0);
function handleKontatu() {
    count.value = count.value + step.value;
}
watch(count, (newCount, oldCount) =>{
    console.log("Old: " + oldCount + "\nNew: " + newCount);
});
</script>
<template>
  <h1>2. Atala - CounterLogger</h1>
  <p>Zenbatetan gehitu nahi duzu?</p>
  <input type="number" v-model="step" placeholder="Sartu zenbaki bat." />
  <p>{{ count }}</p>
  <button @click="handleKontatu">SAKATU</button>
</template>
<style scoped></style>
