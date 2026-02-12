import { defineStore } from "pinia";

export const useErrezetaStore = defineStore("errezeta", {
    state: () => ({
        errezetak: [],
    }),
    actions: {
        postErrezeta(errezetaData) {
            this.errezetak.push(errezetaData);
        },
        deleteErrezeta(id) {
            const index = this.errezetak.findIndex(errezeta => errezeta.id === id);
            this.errezetak.splice(index, 1);
        }
    }
});