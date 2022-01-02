import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import  ant  from 'ant-design-vue';

createApp(App).use(ant).use(router).use(store).mount('#app')
