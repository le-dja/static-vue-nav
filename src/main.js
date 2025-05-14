import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'
import routes from './routes' 

// Crée un routeur et enregistrer les routes'
const router = createRouter({
    history: createWebHistory(),// Utilise l'historique de nav HTML
    routes: routes // Utilise les routes définies dans src/router/inde.js
})

const app =createApp(App) // Crée une instance de l'application
app.use(router)  // Enregistre le routeur
app.mount('#app')  // Monte l'application sur l'élément avec l'ID app