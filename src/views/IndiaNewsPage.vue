<template>
<div class="grid grid-cols-4">
      <IndiaNewsCp v-for="item in NewsObject.articles" :key="item.source.id" :news="item" />
          </div>
</template>

<script>
import IndiaNewsCp from "../components/IndiaNewsCp.vue";
import IndiaNewsService from '../services/IndiaNewsService.js'
export default {
    name: "IndiaNewsPage",
    components: { IndiaNewsCp },
    data() {
        return {
            NewsObject: null
        }
    },
    created() {
IndiaNewsService.getNews().then(response => {
  this.NewsObject = response.data
  console.log(response.data)
}).catch(error => {
	console.error(error);
});
    }
}
</script>