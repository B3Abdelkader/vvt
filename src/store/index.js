import {
    createStore
} from "vuex";
import user from "../store/modules/user.js"

const store = createStore({
    state: {
        creator: 'Abdelkader BENABDALLAH',
        events: []
    },
    mutations:{
ADD_EVENT(state, event){
     state.events.push(event)
}
    },
    modules: {
        user,
    }
})

export default store