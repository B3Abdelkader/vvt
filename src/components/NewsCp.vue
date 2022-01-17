<template>
  <div class="overflow-hidden transition-shadow duration-300 bg-white rounded">
    <a href="/" aria-label="Article"
      ><img :src="news.urlToImage" class="object-cover w-full h-64 rounded" alt=""
    /></a>
    <div class="py-5">
      <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
        {{ news.publishedAt }}
      </p>
      <a
        href="/"
        aria-label="Article"
        class="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
        ><p class="text-2xl font-bold leading-5">{{ news.title }}</p></a
      >
      <p class="mb-4 text-gray-700">
        {{ news.content }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsCp",
  props: {
    news: {
      type: Object,
    },
  },
};
</script>
