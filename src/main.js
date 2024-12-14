// cspell:ignore Pinia
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Router from './router/router'
import App from './App.vue'

import './assets/css/tailwind.css'
const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
app.use(Router)
app.mount('#app')