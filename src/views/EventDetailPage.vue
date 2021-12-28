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
        .catch(error => {
                this.$router.push({
                    name:'ErrorPage',
                    params:{error:error} //error est transmis a 'ErrorPage' comme une props
                })
            })
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