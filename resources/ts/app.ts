import { createApp } from 'vue';
import{ createVuetify } from 'vuetify'
import App from "../vue/App.vue"
import 'vuetify/dist/vuetify.min.css'
import router from './router'

const app = createApp(App);
const vuetify = createVuetify();

app.use(vuetify)
app.use(router)
app.mount('#app');


