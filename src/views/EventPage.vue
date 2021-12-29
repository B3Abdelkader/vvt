<template>
    <div>
        <h1 class="text-6xl select-none">Actual events</h1>
        <EventCardCp
            v-for="sEvent in events"
            :key="sEvent.id"
            :event="sEvent"
        />
    </div>

    <router-link
        :to="{ name: 'EventPage', query: { page: page - 1 } }"
        rel="prev"
        v-if="page != 1"
    >
        Previous Page
    </router-link>
    <router-link
        :to="{ name: 'EventPage', query: { page: page + 1 } }"
        rel="next"
        v-if="page < 12"
    >
        Next Page
    </router-link>
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