<template>
    <div class="pt-4">
        <p class="font-thin">
            <img
                src="https://i.imgur.com/MckKMNJ.png"
                style="width: 5%; height: 5%; display: inline"
            />
            News from
            <span
                class="
                    inline
                    bg-teal-100
                    text-sm text-gray-900
                    rounded
                    dark:bg-gray-600 dark:text-gray-200
                "
                >India-IN</span
            >:
        </p>
    </div>

    <div class="grid grid-cols-4 pt-4">
        <IndiaNewsCp
            v-for="item in NewsObject"
            :key="item.source.id"
            :news="item"
        />
    </div>
</template>

<script>
import IndiaNewsCp from '../../components/IndiaNewsCp.vue'
import IndiaNewsService from '../../services/IndiaNewsService.js'

import linq from 'linq'
export default {
    name: 'IndiaNewsPage',
    components: { IndiaNewsCp },
    data() {
        return {
            NewsObject: null,
        }
    },
    beforeRouteEnter(to, from, next) {
        IndiaNewsService.getNews()
            .then((response) => {
                next(x => { //englober dans next pour que la vue soit chargée avant le chargement des données
                    x.NewsObject = linq
                    .from(response.data.articles)
                    .where((x) => x.content)
                    .toArray() //je recupere uniquement les articles avec du contenu!
                console.log(response.data.articles)
            })})
            .catch((error) => {
                console.error(error)
            })
    },
}
</script>