import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Alpine from 'alpinejs'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'remixicon/fonts/remixicon.css'

const app = createApp(App)

window.Alpine = Alpine

Alpine.start()

app.use(createPinia())
app.use(router)

app.mount('#app')
