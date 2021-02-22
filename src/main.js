import '@babel/polyfill'
import 'mutationobserver-shim'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);
app.mount('#app');
