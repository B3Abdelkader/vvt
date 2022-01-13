<template>
  <div>
    <h1 class="text-6xl select-none">Actual events</h1>
    <EventCardCp v-for="sEvent in events" :key="sEvent.id" :event="sEvent" />
  </div>
  <div class="grid justify-items-center">
    <div class="flex m-1">
      <div class="btn-group">
        <router-link
          class="btn btn-outline btn-wide"
          :to="{ name: 'EventsPage', query: { page: page - 1 } }"
          rel="prev"
          v-if="page != 1"
          >Previous Page
        </router-link>
        <router-link
          class="btn btn-outline btn-wide"
          :to="{ name: 'EventsPage', query: { page: page + 1 } }"
          rel="next"
          v-if="page < 7"
        >
          Next Page
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
