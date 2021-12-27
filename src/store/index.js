import {
    createStore
} from "vuex";
import user from "../store/modules/user.js"

const store = createStore({
    state: {
        creator: 'Abdelkader BENABDALLAH'
    },
    modules: {
        user,
    }
})

export default store