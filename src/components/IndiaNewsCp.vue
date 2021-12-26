<template>
      <div class="card m-1 cursor-pointer border border-gray-400 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200">
        <div class="m-3">
          <h2 class="text-lg mb-2">{{news.title}}
         <span class="text-sm text-teal-800 font-mono bg-teal-100 inline rounded-full px-2 align-top float-right animate-pulse">{{news.publishedAt}}</span></h2>
        <p class="font-light font-mono text-sm text-gray-700 hover:text-gray-900 transition-all duration-200">{{news.content}}</p>
        </div>
      </div>
</template>

<script>
export default {
name: 'IndianNewsCp',
    props:{
        news: {
            type:Object
        }
    }
}
</script>