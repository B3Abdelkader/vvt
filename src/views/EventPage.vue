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
    // data() {  NOT REACTIVE ENOUGHT
    //     return { 
    //         events: null,
    //     }
    // },
    created() {
    this.$store.dispatch('fetchEvents')
    },
    computed:{
        events(){
    return this.$store.state.events
}
    }
}
</script>

<style>
</style>