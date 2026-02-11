<script setup>
const emit = defineEmits(["aceptar", "cancelar"]);

function aceptar() {
  emit("acept");
}

function cancelar() {
  emit("canc");
}

const props = defineProps({
  nombre: String
});

</script>

<template>
    <div>
        
        <h2>Hola, {{ nombre }}</h2>
        <p>Por favor selecciona una opción.</p>
        <button @click="aceptar">Aceptar</button>
        <button @click="cancelar">Cancelar</button>
        
    </div>
</template>

<style scoped>
</style>