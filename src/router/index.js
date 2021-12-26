import { createRouter, createWebHistory } from "vue-router";
import HomeCp from '/src/components/HomeCp.vue'
import AboutCp from '/src/components/AboutCp.vue'
import EventPage from '/src/views/EventPage.vue'
import IndiaNewsPage from '/src/views/IndiaNewsPage.vue'

const routes = [
    {
        path: '/',
        name: 'HomeCp',
        component: HomeCp,
    },
    {
        path: '/about',
        name: 'AboutCp',
        component: AboutCp,
    },
    {
        path: '/event',
        name: 'EventPage',
        component: EventPage,
    },
    {
        path: '/news',
        name: 'IndiaNewsPage',
        component: IndiaNewsPage,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router