<script setup>
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";
import { useErrezetaStore } from "@/stores/errezetaStore";
import { computed, ref, reactive } from "vue";

const router = useRouter();
const editatu = ref(false);

const editForm = reactive({
  izena: '',
  mota: '',
  zailtasuna: '',
  denbora: null,
  osagaiak: [],
  prozedura: []
});

const newOsagai = ref('');
const newPauso = ref('');

function itzuli() {
  router.push(`/list`);
}

function handleEditatu() {
  editForm.izena = errezeta.value.izena;
  editForm.mota = errezeta.value.mota;
  editForm.zailtasuna = errezeta.value.zailtasuna;
  editForm.denbora = errezeta.value.denbora;
  editForm.osagaiak = [...(errezeta.value.osagaiak || [])];
  editForm.prozedura = [...(errezeta.value.prozedura || [])];
  editatu.value = true;
}

function gehituOsagai() {
  if (newOsagai.value.trim()) {
    editForm.osagaiak.push(newOsagai.value.trim());
    newOsagai.value = '';
  }
}

function kenduOsagai(index) {
  editForm.osagaiak.splice(index, 1);
}

function gehituPauso() {
  if (newPauso.value.trim()) {
    editForm.prozedura.push(newPauso.value.trim());
    newPauso.value = '';
  }
}

function kenduPauso(index) {
  editForm.prozedura.splice(index, 1);
}

function handleAceptar() {
  const updated = {
    ...errezeta.value,
    izena: editForm.izena,
    mota: editForm.mota,
    zailtasuna: editForm.zailtasuna,
    denbora: editForm.denbora,
    osagaiak: editForm.osagaiak,
    prozedura: editForm.prozedura
  };
  errezetaStore.updateErrezeta(errezetaId, updated);
  editatu.value = false;
}

function handleCancelar() {
  editatu.value = false;
}

const route = useRoute();
const errezetaStore = useErrezetaStore();
const errezetaId = route.params.id;

const errezeta = computed(() => {
  return errezetaStore.errezetak.find(
    (auxErrezeta) => auxErrezeta.id == errezetaId,
  );
});
</script>

<template>
  <div style="margin-top: 100px; padding: 2rem">
    <h1>Detalles de la Receta</h1>

    <div v-show="!editatu">
      <div v-if="errezeta">
        <h2>{{ errezeta.izena }}</h2>
        <p><strong>ID:</strong> {{ errezeta.id }}</p>
        <p><strong>ID Author:</strong> {{ errezeta.idAuthor }}</p>
        <p><strong>Mota:</strong> {{ errezeta.mota }}</p>
        <p><strong>Zailtasuna:</strong> {{ errezeta.zailtasuna }}</p>
        <p><strong>Denbora:</strong> {{ errezeta.denbora }} minutu</p>

        <h3>Osagaiak:</h3>
        <ul v-if="errezeta.osagaiak && errezeta.osagaiak.length > 0">
          <li v-for="(osagai, index) in errezeta.osagaiak" :key="index">
            {{ osagai }}
          </li>
        </ul>
        <p v-else>Ez dago osagairik</p>

        <h3>Prozedura:</h3>
        <ol v-if="errezeta.prozedura && errezeta.prozedura.length > 0">
          <li v-for="(pauso, index) in errezeta.prozedura" :key="index">
            {{ pauso }}
          </li>
        </ol>
        <p v-else>Ez dago prozedurarik</p>
      </div>

      <div v-else>
        <p style="color: red">Ez da aurkitu errezeta hori</p>
      </div>

      <button @click="itzuli">ITZULI</button>
      <button @click="handleEditatu">EDITATU</button>
    </div>

    <div v-show="editatu">
      <form @submit.prevent="handleAceptar">
        <label for="izena">Izena: </label>
        <input id="izena" v-model="editForm.izena" type="text" required />
        <br />

        <label for="mota">Mota: </label>
        <select id="mota" v-model="editForm.mota" required>
          <option value="">Aukeratu plater mota</option>
          <option value="lehenengo">Lehenengoa</option>
          <option value="bigarrena">Bigarrena</option>
          <option value="postrea">Postrea</option>
        </select>
        <br />

        <label for="zailtasuna">Zailtasuna: </label>
        <select id="zailtasuna" v-model="editForm.zailtasuna" required>
          <option value="">Aukeratu zailtasuna</option>
          <option value="erreza">Erreza</option>
          <option value="normala">Normala</option>
          <option value="zaila">Zaila</option>
        </select>
        <br />

        <label for="denbora">Denbora: </label>
        <input id="denbora" v-model="editForm.denbora" type="number" placeholder="Minututan" required />
        <br />

        <h3>Osagaiak:</h3>
        <div>
          <input v-model="newOsagai" type="text" placeholder="Osagai berria" />
          <button type="button" @click="gehituOsagai">+</button>
        </div>
        <ul v-if="editForm.osagaiak.length > 0">
          <li v-for="(osagai, index) in editForm.osagaiak" :key="index">
            {{ osagai }} 
            <button type="button" @click="kenduOsagai(index)">X</button>
          </li>
        </ul>
        <br />

        <h3>Pausoak:</h3>
        <div>
          <input v-model="newPauso" type="text" placeholder="Pauso berria" />
          <button type="button" @click="gehituPauso">+</button>
        </div>
        <ol v-if="editForm.prozedura.length > 0">
          <li v-for="(pauso, index) in editForm.prozedura" :key="index">
            {{ pauso }} 
            <button type="button" @click="kenduPauso(index)">X</button>
          </li>
        </ol>
        <br />

        <button type="submit">ACEPTAR</button>
        <button type="button" @click="handleCancelar">CANCELAR</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
h1,
h2,
h3 {
  color: white;
}

p,
li {
  color: white;
  margin: 0.5rem 0;
}

ul,
ol {
  margin-left: 2rem;
}
</style>
