<template>

    <div class="flex items-center justify-center py-5">
<button @click="register"> Register me</button>
    </div>
</template>

<script>
export default {
    props: ['event'],
    inject: ['GlobalStore'],
    methods: {
        register() {
            //call API
            //afficher la notification
            this.GlobalStore.flashMessage = 'You are registered '+this.event.title;
            //settimout 3000
            setTimeout(() => {
                this.GlobalStore.flashmessage = '';
            }, 3000)
            //register vers event details
            this.$router.push({ name: 'EventDetailPage'/*, params: { id: this.event.id }*/ }); // pas de params c'est envoyé par defaut8
        }
    }
}
</script>

<style>
</style>