import axios from 'axios'

var EventAPI = axios.create({
    baseURL: 'http://localhost:3004',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

export default {
    getEvents(perPage, page) {
        return EventAPI.get('/events?_limit=' + perPage + '&_page=' + page)
    },
    getEvent(id) {
        return EventAPI.get('/events/' + id)
    },
    async postEvent(event) {
        return await EventAPI.post('/events', event)
    }
}