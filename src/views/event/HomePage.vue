<template>
  <div
    class="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-12"
  >
    <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
      <h1
        class="flex self-center max-w-lg mb-6 font-sans text-6xl select-none font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none"
      >
        Actual<!--<br class="hidden md:block" /> -->

        <span class="relative px-1">
          <div
            class="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400"
          ></div>
          <span class="relative inline-block text-deep-purple-accent-400">Events!</span>
        </span>
      </h1>
    </div>
  </div>
  <div
    class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
  >
    <div class="grid max-w-screen-lg row-gap-6 sm:mx-auto lg:grid-cols-2">
      <EventCardCp v-for="sEvent in events" :key="sEvent.id" :event="sEvent" />
    </div>
  </div>

  <div class="grid justify-items-center">
    <div class="flex m-1">
      <div class="btn-group">
        <router-link
          class="btn btn-outline btn-wide"
          :to="{ name: 'EventsPage', query: { page: page - 1 } }"
          rel="prev"
          v-if="page != 1"
          ><svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </router-link>

        <router-link
          class="btn btn-outline btn-wide"
          :to="{ name: 'EventsPage', query: { page: page + 1 } }"
          rel="next"
          v-if="page < 7"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
          <!-- Next -->
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import EventCardCp from "../../components/EventCardCp.vue";
import { watchEffect } from "vue";

export default {
  name: "EventsPage",
  props: ["page"],
  components: { EventCardCp },
  created() {
    watchEffect(() => {
      //Si un Object reactif change watchEffect est appelé :)
      this.$store
        .dispatch("fetchEvents", this.page) //L'acces page (this.page est reactif)
        .catch((error) => {
          console.log("Error:" + error.ressponse.status);
          if (error.response && error.ressponse.status === 404) {
            this.$router.push({
              name: "ErrorPage",
              params: { error: error }, //error est transmis a 'ErrorPage' comme une props
            });
          } else {
            this.$router.push({
              name: "NetworkErrorPage",
            });
          }
        });
    });
  },
  computed: {
    events() {
      return this.$store.state.events;
    },
    hasNextPage() {
      var totalPages = Math.ceil(this.totalEvents / 2); // Trouver le nombre total de pages.
      return this.page < totalPages; // Si la page n'est pas la derniere.
    },
  },
};
</script>

<style lang="scss"></style>
