import '@/assets/css/reset.css';
import router from '@/router';

import { createApp } from 'vue';
import App from './App.vue';
import { autoAnimatePlugin } from '@formkit/auto-animate/vue';

const app = createApp(App);

app.use(router).use(autoAnimatePlugin).mount('#app');
