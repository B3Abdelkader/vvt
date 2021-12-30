<template>
    <div>
        <h1 class="text-6xl select-none">Actual events</h1>
        <EventCardCp
            v-for="sEvent in events"
            :key="sEvent.id"
            :event="sEvent"
        />
    </div>
    <div class="flex h-screen">
        <div class="flex m-auto space-x-2">
            <router-link
                class="
                    flex
                    items-center
                    px-2
                    py-1
                    text-gray-400
                    bg-gray-50
                    rounded-md
                    hover:bg-blue-50 hover:text-white
                "
                :to="{ name: 'EventPage', query: { page: page - 1 } }"
                rel="prev"
                v-if="page != 1"
            >
                <img src="src\assets\arrow-angle-left-solid-svgrepo-com.svg" />
            </router-link>
            <router-link
                class="
                    flex
                    items-center
                    px-2
                    py-1
                    text-gray-400
                    bg-gray-50
                    rounded-md
                    hover:bg-blue-50 hover:text-white
                "
                :to="{ name: 'EventPage', query: { page: page + 1 } }"
                rel="next"
                v-if="page < 12"
            >
                <img src="src\assets\arrow-angle-right-solid-svgrepo-com.svg" />
            </router-link>
        </div>
    </div>

      <Switch
    v-model="enabled"
    :class="enabled ? 'bg-teal-900' : 'bg-teal-700'"
    class="relative inline-flex items-center h-6 rounded-full w-11"
  >
    <span class="sr-only">Enable notifications</span>
    <span
      :class="enabled ? 'translate-x-6' : 'translate-x-1'"
      class="inline-block w-4 h-4 transform bg-white rounded-full"
    />
  </Switch>
</template>

<script>
import { ref } from 'vue'
  import { Switch } from '@headlessui/vue'
import EventCardCp from '../components/EventCardCp.vue'
import { watchEffect } from 'vue'

export default {
    name: 'eventPage',
    props: ['page'],
    components: { EventCardCp, Switch },
    setup() {
      const enabled = ref(false)

      return { enabled }
    },
    created() {
        watchEffect(() => {
            //Si un Object reactif change watchEffect est appelé :)
            this.$store
                .dispatch('fetchEvents', this.page) //L'acces page (this.page est reactif)
                .catch((error) => {
                    this.$router.push({
                        name: 'ErrorPage',
                        params: { error: error }, //error est transmis a 'ErrorPage' comme une props.
                    })
                })
        })
    },
    computed: {
        events() {
            return this.$store.state.events
        },
        hasNextPage() {
            var totalPages = Math.ceil(this.totalEvents / 2) // Trouver le nombre total de pages.
            return this.page < totalPages // Si la page n'est pas la derniere.
        },
    },
}
</script>

<style lang="scss">
</style>