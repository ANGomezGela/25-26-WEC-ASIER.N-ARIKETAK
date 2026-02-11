<script setup>
import { ref, watch } from "vue";

const step = ref(0);
const count = ref(0);

function handleSumar () {
    count.value += step.value;
}

watch(count, (newCount, oldCount) => {
  console.log(`El total ha cambiado: ${oldCount} + ${step.value} = ${newCount}`);
});

</script>

<template>
    <div>
        <h1>2-ATALA</h1>
        <label for="paso">Cuanto quieres sumar??</label>
        <br>
        <input id="paso" type="number" v-model="step">
        <br>
        <button @click="handleSumar">Suma</button>
    </div>
</template>

<style scoped></style>