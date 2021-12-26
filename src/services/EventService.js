import axios from 'axios'

var EventAPI = axios.create({
    baseURL: 'https://public-holiday.p.rapidapi.com',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-rapidapi-host': 'public-holiday.p.rapidapi.com',
        'x-rapidapi-key': '69ab445655msh22f23b05a7b7933p183b10jsnfcd698fa2efa'
    }
});

export default {
    getEvents() {
        return EventAPI.get('/2019/US')
    }
}