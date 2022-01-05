import { createRouter, createWebHistory } from 'vue-router'
import HomeCp from '/src/components/HomeCp.vue'
import AboutCp from '/src/components/AboutCp.vue'
import EventsPage from '/src/views/Event/EvHome.vue'
import IndiaNewsPage from '/src/views/IndiaNewsPage.vue'
import CreateEventPage from '/src/views/Event/EvCreate.vue'
import RegisterEventPage from '/src/views/Event/EvRegister.vue'
import EventDetailPage from '/src/views/Event/EvDetail.vue'
import EventLayoutPage from '/src/views/Event/EvLayout.vue'
import EditEventPage from '/src/views/Event/EvEdit.vue'
import ErrorPage from '/src/views/ErrorPage.vue'
import NotFound from '/src/views/NotFound.vue'
import NetworkErrorPage from '/src/views/NetworkError.vue'
import NProgress from 'nprogress'

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
        path: '/about-us',
        redirect: { name: 'AboutCp' }, //si je saisie /about-us je redirige vers /about, Exellent pour la SEO
    },

    {
        path: '/events',
        name: 'EventsPage',
        component: EventsPage,
        props: (route) => ({
            page: parseInt(route.query.page) || 1,
        }), //Si la page exist parse la valeur en Int, sinon affiche la page avec la valeur 1:page
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
        alias: '/newsIndia', //alias pour la redirection, mauvais pour LA SEO, car contenu dans deux pages.
    },
    {
        path: '/404/:error',
        name: 'ErrorPage',
        props: true,
        component: ErrorPage,
    },
    {
        path: '/NetworkError',
        name: 'NetworkErrorPage',
        component: NetworkErrorPage,
    },
    {
        path: '/events/:id',
        name: 'EventLayoutPage',
        props: true,
        component: EventLayoutPage,
        children: [
            {
                path: '',
                name: 'EventDetailPage',
                component: EventDetailPage,
            },
            {
                path: 'edit',
                name: 'EditEventPage',

                component: EditEventPage,
            },
            {
                path: 'register',
                name: 'RegisterEventPage',
                component: RegisterEventPage,
            },
        ],
    },
    // {
    //     path: '/event/:id',
    //     redirect: () => { //(to) => { return name... , params: { id: to.params.id }} 
    //         return { name: 'EventDetailPage'} //redirection vers la page d'un evenement en passant le parametre id, le code est simplifié ici
    //     },
    // },
    {
        path: '/event/:afterEvent(.*)',
        redirect: (to) => { 
            return { path: '/events/'+ to.params.afterEvent }
        },
    },
    {
        path: '/:catchAll(.*)',// match toutes les routes non listé/existantes. 
        name: 'NotFound',
        component: NotFound,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
    //befor each route, stop the progress bar
     router.beforeEach(() => {
         NProgress.start()
         })
    //after each route, stop the progress bar
    router.afterEach(() => {
        NProgress.done()
    })

export default router
