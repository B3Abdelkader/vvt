<template>
    <p class="font-medium">
        About
        <a class="underline underline-offset-2 decoration-indigo-500">
            {{ name }}</a
        >
    </p>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = new useStore()
const name = computed(() => {
    return store.state.user.name
})
</script>