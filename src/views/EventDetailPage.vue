<template>
    <div>
        <h1>{{ event.email }}</h1>
    </div>
</template>

<script>
export default {
    props: ['id'],
    created() {
        this.$store.dispatch('fetchEvent', this.id)
        console.log('ID?' + this.id)
    },
    computed: {
        event() {
            console.log(this.$store.state.event)
            return this.$store.state.event
        },
    },
}
</script>

<style>
</style>