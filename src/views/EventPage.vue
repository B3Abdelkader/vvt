<template>
    <div>
        <h1 class="text-6xl select-none">Actual events</h1>
        <EventCardCp
            v-for="sEvent in events"
            :key="sEvent.id"
            :event="sEvent"
        />
    </div>
</template>

<script>
import EventCardCp from '../components/EventCardCp.vue'
import EventService from '../services/EventService.js'
export default {
    name: 'eventPage',
    components: { EventCardCp },
    data() {
        return {
            events: null,
        }
    },
    created() {
        EventService.getEvents()
            .then((response) => {
                this.events = response.data
                console.log(response.data)
            })
            .catch((error) => {
                console.error(error)
            })
    },
}
</script>

<style>
</style>