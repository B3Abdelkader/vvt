<template>
  <div class="pt-4">
    <p class="font-thin">
      <img
        src="https://i.imgur.com/MckKMNJ.png"
        style="width: 5%; height: 5%; display: inline"
        v-animate
        :keyframes="{
          transform: 'scale(0.7)',
        }"
        :options="{
          duration: 2,
        }"
      />
      News from
      <span class="inline bg-teal-100 text-sm text-white rounded">India-IN</span>:
    </p>
  </div>

  <div
    class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
  >
    <div class="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
      <NewsCp v-for="item in NewsObject" :key="item.source.id" :news="item" />
    </div>
  </div>
</template>

<script>
import NewsCp from "../../components/NewsCp.vue";
import IndiaNewsService from "../../services/NewsService.js";

import linq from "linq";
export default {
  name: "HomePage",
  components: { NewsCp },
  data() {
    return {
      NewsObject: null,
    };
  },
  beforeRouteEnter(to, from, next) {
    IndiaNewsService.getNews()
      .then((response) => {
        next((x) => {
          //englober dans next pour que la vue soit chargée avant le chargement des données
          x.NewsObject = linq
            .from(response.data.articles)
            .where((x) => x.content)
            .toArray(); //je recupere uniquement les articles avec du contenu!
          console.log(response.data.articles);
        });
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>
