import { createApp, reactive } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'

const GlobalStore = reactive({flashMessage: ''})

createApp(App).use(router).provide('GlobalStore', GlobalStore).use(store).mount('#app')
