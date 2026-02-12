<script setup>
import { ref, onMounted } from 'vue'
import { useErrezetaStore } from '@/stores/errezetaStore'
import ErrezetaForm from "../components/errezetaForm.vue"
import ErrezetaTabla from "../components/errezetaTabla.vue"

const errezetaStore = useErrezetaStore()

const errezetak = ref([])

async function fetchErrezetak() {
  const response = await fetch('/src/data/errezetak.json')
  errezetak.value = await response.json()
  errezetak.value.forEach(e => {
    errezetaStore.postErrezeta(e);
  });
  console.log(errezetaStore.errezetak);
}

onMounted(() => {
    if (errezetaStore.errezetak.length === 0) {
        fetchErrezetak()
    }
})
</script>

<template>
    <h1>Receipt</h1>
    <br>
    <ErrezetaForm/>
    <ErrezetaTabla/>
</template>

<style></style>