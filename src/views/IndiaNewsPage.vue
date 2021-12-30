<template>
    <div class="grid grid-cols-4">
        <IndiaNewsCp
            v-for="item in NewsObject"
            :key="item.source.id"
            :news="item"
        />
    </div>
</template>

<script>
import IndiaNewsCp from '../components/IndiaNewsCp.vue'
import IndiaNewsService from '../services/IndiaNewsService.js'
import linq from 'linq'
export default {
    name: 'IndiaNewsPage',
    components: { IndiaNewsCp },
    data() {
        return {
            NewsObject: null,
        }
    },
    created() {
        IndiaNewsService.getNews()
            .then((response) => {
                this.NewsObject = linq.from(response.data.articles).where(x => x.content).toArray()
                console.log(response.data)
            })
            .catch((error) => {
                console.error(error)
            })
    },
}
</script>