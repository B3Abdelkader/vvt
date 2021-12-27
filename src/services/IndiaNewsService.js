import axios from 'axios'

var NewsAPI = axios.create({
    baseURL: 'https://newsapi.org/v2/top-headlines?country=in&apiKey=18d96ab65a094f28b609d7a736ac84ec',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
});

export default {
    getNews() {
        return NewsAPI.get()
    },
    getNews(id) {
        return NewsAPI.get()
    }
}