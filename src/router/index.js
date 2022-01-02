import {
    createRouter,
    createWebHistory
} from "vue-router";
import HomeCp from '/src/components/HomeCp.vue'
import AboutCp from '/src/components/AboutCp.vue'
import EventPage from '/src/views/Event/EvHome.vue'
import IndiaNewsPage from '/src/views/IndiaNewsPage.vue'
import CreateEventPage from '/src/views/Event/EvCreate.vue'
import RegisterEventPage from '/src/views/Event/EvRegister.vue'
import EventDetailPage from '/src/views/Event/EvDetail.vue'
import EventLayoutPage from '/src/views/Event/EvLayout.vue'
import EditEventPage from '/src/views/Event/EvEdit.vue'
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
        path: '/events/create',
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
    },
    {
        path: '/events/:id',
        name: 'EventLayoutPage',
        props: true,
        component: EventLayoutPage,
        children: [{
                path: '',
                name: 'EventDetailPage',
                component: EventDetailPage,
            },
            {
                path: 'edit',
                name: 'EditEventPage',

                component: EditEventPage
            },
            {
                path: 'register',
                name: 'RegisterEventPage',
                component: RegisterEventPage
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router