<script setup>
import { useErrezetaStore } from "@/stores/errezetaStore";
import { useRouter } from "vue-router";
import { ref, computed } from "vue";

const route = useRouter();
const errezetaStore = useErrezetaStore();

const filtroMota = ref("");

const motak = computed(() => {
  const unicos = []
  for (const errezeta of errezetaStore.errezetak) {
    if (!unicos.includes(errezeta.mota)) {
      unicos.push(errezeta.mota)
    }
  }
  return unicos
})

const errezetaFiltrada = computed(() => {
  if (!filtroMota.value) return errezetaStore.errezetak;
  return errezetaStore.errezetak.filter((e) => e.mota === filtroMota.value);
});

function ezabatu(id) {
  errezetaStore.deleteErrezeta(id);
}
function ikusi(id) {
  route.push(`/details/${id}`);
}
</script>

<template>
  <label for="motaFilter">Filtrar por mota: </label>
  <br />
  <!--
  <select id="motaFilter" v-model="filtroMota">
    <option value="">Todas</option>
    <option value="lehenengo">Lehenengoa</option>
    <option value="bigarrena">Bigarrena</option>
    <option value="postrea">Postrea</option>
  </select>
  -->
  <select id="motaFilter" v-model="filtroMota">
    <option value="">Todas</option>
    <option v-for="mota in motak" :key="mota" :value="mota">
      {{ mota }}
    </option>
  </select>
  <br />

  <table v-show="errezetaFiltrada.length > 0">
    <thead>
      <tr>
        <th>IZENA</th>
        <th>MOTA</th>
        <th>ZAILTASUNA</th>
        <th>EZABATU</th>
        <th>IKUSI</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="errezeta in errezetaFiltrada" :key="errezeta.id">
        <td>{{ errezeta.izena }}</td>
        <td>{{ errezeta.mota }}</td>
        <td>{{ errezeta.zailtasuna }}</td>
        <td><button @click="ezabatu(errezeta.id)">EZABATU</button></td>
        <td><button @click="ikusi(errezeta.id)">IKUSI</button></td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table {
  border: solid white 1px;
  width: 100%;
  color: white;
}
th,
td {
  padding: 0.5rem;
  text-align: left;
  border: solid white 1px;
}
</style>
