<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
    <header class="p-4 shadow-sm">
        <div class="inline-block text-lg"><h1>B3Abdelkader</h1></div>
        <router-link
            class="
                inline-block
                top-auto
                text-teal-800
                float-right
                rounded-full
                mx-1
                px-2
                bg-teal-50
            "
            to="/"
            ><a href="#" class="align-middle"></a>Home</router-link
        >
        <router-link
            class="
                inline-block
                top-auto
                text-teal-800
                float-right
                rounded-full
                mx-1
                px-2
                bg-teal-50
            "
            to="/event"
            ><a href="#" class="align-middle">Events</a></router-link
        >
        <router-link
            class="
                inline-block
                top-auto
                text-teal-800
                float-right
                rounded-full
                mx-1
                px-2
                bg-teal-50
            "
            to="/about"
            ><a href="#" class="align-middle">About</a></router-link
        >
        <router-link
            class="
                inline-block
                top-auto
                text-teal-800
                float-right
                rounded-full
                mx-1
                px-2
                bg-teal-50
            "
            to="/news"
            ><a href="#" class="align-middle">India News</a></router-link
        >
    </header>
    <router-view />
</template>

<style>
#app {
    font-family: Inter var, ui-sans-serif, system-ui, -apple-system,
        BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans,
        sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol,
        Noto Color Emoji;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #334a61;
    background: #f8f9fa;
}
</style>
