import './assets/scss/index.scss';

import App from './App.vue';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import axios from 'axios';
import VueAxios from 'vue-axios';
import router from './router';
import 'virtual:uno.css';

const app = createApp(App);

app.use(VueAxios, axios);
app.use(router);
app.use(createPinia());

app.mount('#app');
