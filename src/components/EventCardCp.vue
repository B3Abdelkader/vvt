<template>
  <!-- Card ICI -->
  <router-link :to="{ name: 'EventDetailPage', params: { id: event.id } }">
    <div class="grid justify-items-center select-none">
      <div class="max-w-xl justify-items-center bg-white rounded-xl p-2 shadow-md m-2">
        <div class="flex flex-col w-full">
          <div class="flex flex-row justify-between">
            <!-- Display Event data -->
            <span class="relative text-3xl whitespace-nowrap truncate overflow-hidden">{{
              event.title.toUpperCase()
            }}</span>
          </div>

          <p
            class="inline-block top-auto text-sm my-1 text-gray-600 float-right rounded-full mx-1 px-2 bg-gray-100 hover:animate-pulse font-thin"
          >
            By: {{ event.creator }} / {{ event.email }} on
          </p>
          <span
            class="text-sm text-blue-100 font-mono bg-gray-600 rounded-full px-2 animate-pulse"
            >{{ event.eventDate }}</span
          >

          <span class="text-gray-400 text-sm"
            >{{ event.message.substring(0, 300) }} ...+[{{
              event.message.length
            }}Char]</span
          >
          <!-- <p class="text-gray-500 leading-4" v-for="province in event.provinces" :key="province.id" :event="province">Provinces : {{event.province}};  </p> -->
        </div>
      </div>
    </div>
  </router-link>

  <div class="card text-center shadow-2xl">
    <figure class="px-10 pt-10">
      <img src="https://picsum.photos/id/1005/400/250" class="rounded-xl" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">shadow, center, padding</h2>
      <p>
        Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit
        necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.
      </p>
      <div class="justify-center card-actions">
        <button class="btn btn-outline btn-accent">More info</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    event: Object,
  },
};
</script>
