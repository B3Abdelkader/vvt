<template>
  <div
    class="card m-1 cursor-pointer border border-gray-300 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200"
    v-animate
    :keyframes="{
      y: -10,
      opacity: 1,
    }"
    :options="{
      duration: 0.5,
      easing: [0.22, 0.03, 0.26, 1],
    }"
  >
    <div class="m-3">
      <h2 class="text-lg mb-2">
        {{ news.title }}
        <span
          class="text-sm text-blue-100 font-mono bg-violet-600 animate-pulse inline rounded-full px-2 align-top float-right"
          >{{ news.publishedAt }}</span
        >
      </h2>
      <p
        class="font-light font-mono text-sm text-gray-700 hover:text-gray-900 transition-all duration-200"
      >
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
