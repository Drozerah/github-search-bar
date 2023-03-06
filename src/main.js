import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Oruga from '@oruga-ui/oruga-next'
import '@oruga-ui/oruga-next/dist/oruga.css'
import { bulmaConfig } from '@oruga-ui/theme-bulma'

import App from './App.vue'
import router from './router'

import './assets/main.scss'
import '@oruga-ui/theme-bulma/dist/bulma.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Oruga, bulmaConfig)

app.mount('#app')
