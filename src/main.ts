import './assets/scss/index.scss'

import App from './App.vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(VueAxios, axios)
app.use(router)
app.use(ElementPlus)
app.use(createPinia())

app.mount('#app')
