<script setup>
// onMounted (para ejecutar código cuando carga la página)
import { ref, computed, onMounted } from 'vue'
// Importamos el store de Pinia donde guardamos los datos del usuario
import { useUserStore } from '@/stores/userStore'
// Importamos el router para poder navegar entre páginas
import { useRouter } from 'vue-router'

// Inicializamos el store de usuario (la caja fuerte de datos)
const userStore = useUserStore()
// Inicializamos el router para poder cambiar de página
const router = useRouter()

const users = ref([])
const username = ref('')
const password = ref('')
const error = ref(false)

// Función asíncrona que trae los usuarios del archivo JSON
async function fetchUsers() {
  // Hace una petición HTTP al archivo JSON con los usuarios
  const response = await fetch('/src/data/erabiltzaileak.json')
  // Convierte la respuesta a formato JSON y lo guarda en users.value
  users.value = await response.json()
}

// onMounted se ejecuta cuando la página se carga por primera vez
onMounted(() => {
  // Llama a fetchUsers para traer los datos cuando carga la vista
  fetchUsers()
})

const login = () => {
  const user = users.value.find(
    (u) => u.izena === username.value && u.pasahitza === password.value
  )

  if (user) {
    userStore.setUser(user)
    router.push('/list')
  } else {
    error.value = true
    username.value = ''
    password.value = ''
  }
}

const isFormValid = computed(() => {
  return username.value && password.value
})
</script>

<template>
  <div style="margin-top: 100px; padding: 2rem;">
    <h1>Login</h1>
    <br />

    <form @submit.prevent="login">
      <label for="name2">Izena: </label>
      <input id="name2" v-model="username" type="text" />
      <br />

      <label for="pasahitza">Pasahitza: </label>
      <input id="pasahitza" v-model="password" type="password" />
      <br />

      <button type="submit" :disabled="!isFormValid">Bidali</button>
      <p v-if="error" style="color: red">Usuario o contraseña incorrectos</p>
    </form>
  </div>
</template>

<style scoped></style>