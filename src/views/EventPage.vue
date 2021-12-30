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
    class="flex items-center px-2 py-1 text-gray-400 bg-gray-100 rounded-md hover:bg-violet-200 hover:text-white"
        :to="{ name: 'EventPage', query: { page: page - 1 } }"
        rel="prev"
        v-if="page != 1"
    >
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
        </svg>
    </router-link>
    <router-link
    class="px-2 py-1 text-gray-400 bg-gray-100 rounded-md hover:bg-violet-200 hover:text-white"
        :to="{ name: 'EventPage', query: { page: page + 1 } }"
        rel="next"
        v-if="page < 12"
    >
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
    </router-link>
    </div>

</div>

</template>

<script>
import EventCardCp from '../components/EventCardCp.vue'
import { watchEffect } from 'vue'

export default {
    name: 'eventPage',
    props: ['page'],
    components: { EventCardCp },
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