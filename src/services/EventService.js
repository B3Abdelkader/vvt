import axios from 'axios'

var EventAPI = axios.create({
    baseURL: 'http://localhost:3004',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-rapidapi-host': 'public-holiday.p.rapidapi.com',
        'x-rapidapi-key': '69ab445655msh22f23b05a7b7933p183b10jsnfcd698fa2efa'
    }
});

export default {
    getEvents() {
        return EventAPI.get('/events')
    },
    getEvent(id) {
        return EventAPI.get('/events/'+id)
    },
    postEvent(event){
        return EventAPI.post('/events', event)
    }
}