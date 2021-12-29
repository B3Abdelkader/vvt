import {
    createStore
} from "vuex";
import user from "../store/modules/user.js"
import EventService from '../services/EventService.js'

const store = createStore({
    state: {
        creator: 'Abdelkader BENABDALLAH',
        events: [],
        event:{}
    },
    mutations: {
        ADD_EVENT(state, event) {
            state.events.push(event)
        },
        SET_EVENTS(state, events) {
            state.events = events
        },
        SET_EVENT(state, event) {
            state.event = event
        }
    },
    actions: {
        createEvent({
            commit
        }, event) {
            EventService.postEvent(event)
                .then(() => {
                    // add vueX state
                    commit('ADD_EVENTS', event)
                })
                .catch(error => {
                    console.log(error);
                    throw(error);
                })
            console.log('Event', this.event)
        },
        fetchEvents({
            commit
        }, page) {
            return EventService.getEvents(2, page)
                .then((response) => {
                    commit('SET_EVENTS', response.data)
                    console.log(response.data)
                })
                .catch((error) => {
                    console.log(error);
                    throw(error);
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
                return EventService.getEvent(id)
                    .then((response) => {
                        commit('SET_EVENT', response.data)
                        console.log(response.data)
                    })
                    .catch((error) => {
                        console.log(error);
                    throw(error);
                    })
            }
        }
    },
    modules: {
        user,
    }
})

export default store