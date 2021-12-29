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

export default {
    name: 'eventPage',
    props:['page'],
    components: { EventCardCp },
    created() {
    this.$store.dispatch('fetchEvents', this.page)
    .catch(error => {
                this.$router.push({
                    name:'ErrorPage',
                    params:{error:error} //error est transmis a 'ErrorPage' comme une props
                })
            })
    },
    computed:{
        events(){
    return this.$store.state.events
}
    }
}
</script>

<style lang="scss">
</style>