<template>
  <router-link :to="{ name: 'EventDetailPage', params: { id: event.id } }">
    <a
      href="/"
      aria-label="View item"
      title="View item"
      class="relative block p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-sm"
      v-animate
      :keyframes="{
        transform: 'scale(0.95)',
      }"
    >
      <div
        class="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100"
      ></div>
      <div
        class="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100"
      ></div>
      <div
        class="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100"
      ></div>
      <div
        class="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100"
      ></div>
      <div class="relative flex items-center justify-between p-5 bg-white rounded-sm">
        <div class="pr-4">
          <h6 class="mb-2 font-semibold leading-5">
            {{ event.creator }} / {{ event.email }}
          </h6>
          <span
            class="text-sm text-white font-mono bg-deep-purple-400 rounded-full px-2 animate-pulse"
            >{{ event.eventDate }}</span
          >
          <p class="text-sm text-gray-900">
            {{ event.message.substring(0, 300) }} ...+[{{ event.message.length }}Char]
          </p>
        </div>
        <div class="flex items-center justify-center">
          <svg
            class="w-3 text-gray-700 transition-colors duration-300 group-hover:text-deep-purple-accent-400"
            fill="currentColor"
            viewBox="0 0 12 12"
          >
            <path
              d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"
            ></path>
          </svg>
        </div>
      </div>
    </a>
  </router-link>
</template>

<script>
export default {
  props: {
    event: Object,
  },
};
</script>
