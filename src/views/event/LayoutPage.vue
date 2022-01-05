<template>
    <div v-if="event">
        <div id="nav">
            <h1 id="flashMessage" v-if="GlobalStore.flashMessage">
{{ GlobalStore.flashMessage }}
</h1>
            <router-link
                class="
                    inline-block
                    top-auto
                    text-gray-600
                    float-right
                    rounded-full
                    mx-1
                    px-2
                    bg-violet-100
                    hover:animate-pulse
                    font-thin
                "
                :to="{name: 'EventDetailPage'}"

                >Details</router-link
            >
                            <!-- le params ici peut être ignoré.    :to="{name: 'EventDetailPage', params: {id}}" 
                            vu que l'id est required sur le router,
                            pour chaque child ils va utiliser l':id si ce dernier n'est pas precisé --> 
        </div>
        <router-link
            class="
                inline-block
                top-auto
                text-gray-600
                float-right
                rounded-full
                mx-1
                px-2
                bg-violet-100
                hover:animate-pulse
                font-thin
            "
            :to="{name: 'RegisterEventPage'}"
            >Register</router-link
        >
        <router-link
            class="
                inline-block
                top-auto
                text-gray-600
                float-right
                rounded-full
                mx-1
                px-2
                bg-violet-100
                hover:animate-pulse
                font-thin
            "
            :to="{name: 'EditEventPage'}"
            >Edit</router-link
        >
        <router-view :event="event"/> <!-- ici les componant child seront affiché ( details/register/edit)-->
    </div>
</template>

<script>
export default {
    props: ['id'],
    inject: ['GlobalStore'],
    created() {
        this.$store.dispatch('fetchEvent', this.id).catch((error) => {
                    if (error.response && error.response.status === 404) {
                        this.$router.push({
                            name: 'ErrorPage',
                            params: { error: error }, //error est transmis a 'ErrorPage' comme une props
                        })
                    } else {
                        this.$router.push({
                            name: 'NetworkErrorPage',
                        })
                    }
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
@keyframes yellowFade {
    from{
    background: yellow;}
    to{ background: transparent;}
}
#flashMessage {
    animation-name: yellowFade;
        animation-duration: 3s;
}

</style>