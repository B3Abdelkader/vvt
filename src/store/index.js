import {
    createStore
} from "vuex";
import user from "../store/modules/user.js"
import EventService from '../services/EventService.js'

const store = createStore({
    state: {
        creator: 'Abdelkader BENABDALLAH',
        events: []
    },
    mutations: {
        ADD_EVENT(state, event) {
            state.events.push(event)
        },
        SET_EVENT(state, events) {
            state.events = events
        }
    },
    actions: {
        createEvent({
            commit
        }, event) {
            EventService.postEvent(event)
                .then(() => {
                    // add vueX state
                    commit('ADD_EVENT', event)
                })
                .catch(error => {
                    console.log(error);
                })
            console.log('Event', this.event)
        },
        fetchEvents({
            commit
        }) {
            EventService.getEvents()
                .then((response) => {
                    commit('SET_EVENT', response.data)
                    console.log(response.data)
                })
                .catch((error) => {
                    console.error(error)
                })
        },
        fetchEvent({
            commit,
            state
        }, id) {
            const exisitingEvent = state.events.find(x => x.id === id)
            if (exisitingEvent) {
                commit('SET_EVENT', exisitingEvent)
            } else {
                EventService.getEvents()
                    .then((response) => {
                        commit('SET_EVENT', response.data)
                        console.log(response.data)
                    })
                    .catch((error) => {
                        console.error(error)
                    })
            }
        }
    },
    modules: {
        user,
    }
})

export default store