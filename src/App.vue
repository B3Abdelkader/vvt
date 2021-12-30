<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
    <header class="p-4 shadow-sm">
        <div class="inline-block text-lg">
            <h1>
                <span
                    class="
                        before:block
                        before:absolute
                        before:-inset-1
                        before:-skew-y-3
                        before:bg-violet-400
                        relative
                        inline-block
                    "
                    ><span class="relative text-white">B3Abdelkader</span></span
                >
            </h1>
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
            "
            to="/"
            >Home</router-link
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
            "
            to="/events"
            >Events</router-link
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
            "
            to="/about"
            >About</router-link
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
            "
            to="/news"
            >India News</router-link
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
