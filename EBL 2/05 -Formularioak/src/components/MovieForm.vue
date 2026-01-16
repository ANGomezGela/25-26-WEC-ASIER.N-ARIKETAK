<script setup>
import { reactive, computed } from "vue";

const film = reactive({
  tituloa: "",
  luzera: "",
  zuzendaria: "",
});

const films = reactive([]);

const isFormValid = computed(() => {
  return film.tituloa && film.luzera && film.zuzendaria;
});

function handleSubmit() {
  films.push({...film}); // Hace una copia del array y  crea otro independiente dentro de la lista
  film.tituloa = "";
  film.luzera = "";
  film.zuzendaria = "";
}

function ezabatu(index) {
    films.splice(index, 1);
}
</script>
<template>
  <h1>3. Atala - MovieForm</h1>

  <form @submit.prevent="handleSubmit">
    <label for="tituloa">Tituloa: </label>
    <input id="tituloa" v-model="film.tituloa" type="text" />
    <br />

    <label for="luzera">Luzera: </label>
    <input
      id="luzera"
      v-model="film.luzera"
      type="number"
      placeholder="Minututan"
    />
    <br />

    <label for="zuzendaria">Zuzendaria: </label>
    <input id="zuzendaria" v-model="film.zuzendaria" type="text" />
    <br />

    <button type="submit" :disabled="!isFormValid">Bidali</button>
  </form>
  <p v-show="films.length === 0">Pelikularik ez daude</p>
  <table v-show="films.length > 0">
    <thead>
      <tr>
        <th>TITULOA</th>
        <th>LUZERA</th>
        <th>ZUZENDARIA</th>
        <th>EZABATU</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(auxFilm, index) in films" :key="index">
        <td>{{ auxFilm.tituloa }}</td>
        <td>{{ auxFilm.luzera }}</td>
        <td>{{ auxFilm.zuzendaria }}</td>
        <td><button @click="ezabatu(index)">EZABATU</button></td>
      </tr>
    </tbody>
  </table>
</template>
<style scoped>
table {
  border: solid white 1px;
}
</style>
