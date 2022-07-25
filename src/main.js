import { createApp, reactive } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { MotionOnePlugin } from 'vue-motion-one'
import './index.css'
import 'nprogress/nprogress.css'
import './index.css'

const GlobalStore = reactive({flashMessage: ''})

createApp(App).use(router).use(MotionOnePlugin).provide('GlobalStore', GlobalStore).use(store).mount('#app')
