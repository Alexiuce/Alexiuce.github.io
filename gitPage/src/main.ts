import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import App from './App.vue'
import router from './router'
import 'virtual:uno.css'
const app = createApp(App)
const vuetify = createVuetify({
    components,
    directives,
});

app.use(vuetify);
app.use(createPinia())
app.use(router)

app.mount('#app')
