<script setup>
import { ref } from "vue";
import ChildComponent from "./ChildComponent.vue";

const izena = ref("");
const aceptar = ref(0);
const cancelar = ref(0);

function handleAcept() {
  aceptar.value++;
}

function handleCancel() {
  cancelar.value++;
}
</script>

<template>
  <div>

    <h1>Componente Padre</h1>
    <label>Bienvenido al component padre.</label>
    <br />
    <input v-model="izena" />

    <div>
      <ChildComponent
        :nombre="izena"
        @acept="handleAcept"
        @canc="handleCancel"
      />
    </div>

    <div>
      <h2>Estadisticas</h2>
      <p>Veces aceptado: {{ aceptar}}</p>
      <p>Veces cancelado: {{ cancelar}}</p>
    </div>

  </div>
</template>

<style scoped></style>
