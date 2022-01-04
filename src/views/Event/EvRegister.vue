<template>

    <div class="flex items-center justify-center py-5">
<button @click="register"> Register me</button>
    </div>
</template>

<script>
export default {
    props: ['event'],
    methods: {
        register() {
            //call API
            //regider vers event details
            this.$router.push({ name: 'EventDetailPage'/*, params: { id: this.event.id }*/ }); // pas de params c'est envoyé par defaut8
        }
    }
}
</script>

<style>
</style>