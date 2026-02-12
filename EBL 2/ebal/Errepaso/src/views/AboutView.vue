<script setup>
import { computed } from "vue";
import { useUserStore } from "@/stores/userStore";
import { useErrezetaStore } from "@/stores/errezetaStore";

const userStore = useUserStore();
const errezetaStore = useErrezetaStore();

const user = computed(() => userStore.user);
const errezetaKop = computed(() => {
    if (!user.value) {
        return 0;
    }
    return errezetaStore.errezetak.filter(
        (errezeta) => errezeta.idAuthor === user.value.id
    ).length;
});
</script>

<template>
    <div style="margin-top: 100px; padding: 2rem">
        <h1>About</h1>

        <div v-if="user">
            <h2>Erabiltzailearen datuak</h2>
            <p><strong>ID:</strong> {{ user.id }}</p>
            <p><strong>Izena:</strong> {{ user.izena }}</p>
            <p><strong>Hiria:</strong> {{ user.hiria }}</p>
            <p><strong>Telefonoa:</strong> {{ user.telefonoa }}</p>

            <h3>Errezeta kopurua</h3>
            <p>{{ errezetaKop }}</p>
        </div>

        <div v-else>
            <p style="color: red">Ez dago erabiltzailea saioan</p>
        </div>
    </div>
    <!--
    <img
    v-if="user.hiria"
    :src="user.hiria"
    alt="User image"
    style="max-width: 200px; border-radius: 8px;"
  />
  -->
</template>

<style></style>