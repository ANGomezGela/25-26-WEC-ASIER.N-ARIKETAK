<script setup>
import { reactive, computed } from "vue";
import { useErrezetaStore } from "@/stores/errezetaStore";


const errezetaStore = useErrezetaStore();

const errezeta = reactive({
  idAuthor: null,
  id: null,
  izena: null,
  mota: null,
  zailtasuna: null,
  denbora: null,
  osagaiak: [],
  prozedura: [],
});

const isFormValid = computed(() => {
  return (
    errezeta.id &&
    errezeta.idAuthor &&
    errezeta.izena &&
    errezeta.mota &&
    errezeta.zailtasuna &&
    errezeta.denbora
  );
});

function post() {
  const nueva = {
    ...errezeta,
    osagaiak: [...errezeta.osagaiak],
    prozedura: [...errezeta.prozedura],
  };
  errezetaStore.postErrezeta(nueva)
  console.log(errezetaStore.errezetak)

  
  errezeta.idAuthor = "";
  errezeta.id = "";
  errezeta.izena = "";
  errezeta.mota = "";
  errezeta.zailtasuna = "";
  errezeta.denbora = "";
}
</script>

<template>
  <form @submit.prevent="post">

    <label for="id">Id: </label>
    <input id="id" v-model="errezeta.id" type="number" />
    <br />

    <label for="idAuthor">idAuthor: </label>
    <input id="idAuthor" v-model="errezeta.idAuthor" type="number" />
    <br />

    <label for="izena">Izena: </label>
    <input id="izena" v-model="errezeta.izena" type="text" />
    <br />

    <label for="mota">Mota: </label>
    <select id="mota" v-model="errezeta.mota">
      <option default>Aukeratu plater mota</option>
      <option value="lehenengo">Lehenengoa</option>
      <option value="bigarrena">bigarrena</option>
      <option value="postrea">Postrea</option>
    </select>
    <br />

    <label for="zailtasuna">Zailtasuna: </label>
    <select id="zailtasuna" v-model="errezeta.zailtasuna">
      <option value="">Aukeratu zailtasuna</option>
      <option value="erreza">Erreza</option>
      <option value="normala">Normala</option>
      <option value="zaila">Zaila</option>
    </select>
    <br />

    <label for="denbora">Denbora: </label>
    <input
      id="denbora"
      v-model="errezeta.denbora"
      type="number"
      placeholder="Minututan"
    />
    <br />

    <button type="submit" :disabled="!isFormValid">Bidali</button>
  </form>
</template>

<style scoped></style>
