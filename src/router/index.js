import { createRouter, createWebHistory } from 'vue-router'
import HomeCp from '/src/components/HomeCp.vue'
import AboutCp from '/src/components/AboutCp.vue'
import EventsPage from '/src/views/event/HomePage.vue'
import IndiaNewsPage from '/src/views/news/HomePage.vue'
import CreateEventPage from '/src/views/event/CreatePage.vue'
import RegisterEventPage from '/src/views/event/RegisterPage.vue'
import EventDetailPage from '/src/views/event/DetailPage.vue'
import EventLayoutPage from '/src/views/event/LayoutPage.vue'
import EditEventPage from '/src/views/event/EditPage.vue'
import ErrorPage from '/src/views/error/404Page.vue'
import NotFound from '/src/views/error/NotFoundPage.vue'
import NetworkErrorPage from '/src/views/error/NetworkPage.vue'
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
            return { path: '/events/' + to.params.afterEvent }
        },
    },
    {
        path: '/:catchAll(.*)', // match toutes les routes non listé/existantes.
        name: 'NotFound',
        component: NotFound,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        // if(savedPosition) {
        //     return savedPosition
        // }
        // else{
        //return top 0
        return { top: 0 }
    // }
    },
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
