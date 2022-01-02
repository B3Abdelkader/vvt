import {
    createRouter,
    createWebHistory
} from "vue-router";
import HomeCp from '/src/components/HomeCp.vue'
import AboutCp from '/src/components/AboutCp.vue'
import EventPage from '/src/views/Event/EvHome.vue'
import IndiaNewsPage from '/src/views/IndiaNewsPage.vue'
import CreateEventPage from '/src/views/Event/EvAdd.vue'
import EventDetailPage from '/src/views/Event/EvDetail.vue'
import ErrorPage from '/src/views/ErrorPage.vue'

const routes = [{
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
        path: '/events',
        name: 'EventPage',
        component: EventPage,
        props: route => ({
            page: parseInt(route.query.page) || 1
        }) //Si la page exist parse la valeur en Int, sinon affiche la page avec la valeur 1:page
    },
    {
        path: '/events/:id',
        name: 'EventDetailPage',
        props: true,
        component: EventDetailPage
    },
    {
        path: '/event/create',
        name: 'CreateEventPage',
        component: CreateEventPage,
    },
    {
        path: '/news',
        name: 'IndiaNewsPage',
        component: IndiaNewsPage,
    },
    {
        path: '/error/:error',
        name: 'ErrorPage',
        props: true,
        component: ErrorPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router