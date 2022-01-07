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
                        inline-block
                        top-auto
                        text-gray-600
                        float-right
                        rounded-full
                        mx-1
                        px-2
                        py-2
                        bg-violet-100
                        font-thin
                    "
                    >B3Abdelkader</span
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
                font-thin
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
                font-thin
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
                font-thin
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
                font-thin
                hover:top-full
            "
            to="/news"
            >India News</router-link
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
            to="/event/create"
            >Add Event</router-link
        >
    </header>
    <router-view />
    <footer class="mt-16">
      <div class="border-t md:px-4 md:pt-10 md:pb-5">
        <div class="flex flex-wrap md:max-w-screen-lg mx-auto">
          <section
            class="relative text-gray-700 font-light border-b px-4 pb-4 md:py-3 w-full md:border-none md:w-1/4"
          >
            <a
              class="uppercase text-xs font-bold tracking-wider text-violet-600 hidden md:block"
              href="#"
            >
              Ut porta
            </a>
            <article class="h-0 md:h-auto -mt-4 md:mt-0 overflow-hidden">
              <ul class="my-5 text-sm tracking-wide">
                <li class="my-3 tracking-wide">
                  <a href="#">Pellentesque rhoncus</a>
                </li>
                <li class="my-3 tracking-wide">
                  <a href="#">Aenean</a>
                </li>
                <li class="my-3 tracking-wide">
                  <a href="#">Curabitur bibendum</a>
                </li>
                <li class="my-3 tracking-wide">
                  <a href="#">Phasellus non mi</a>
                </li>
                <li class="my-3 tracking-wide">
                  <a href="#">Duis accumsa</a>
                </li>
              </ul>
            </article>
          </section>
          <section
            class="relative text-gray-700 font-light border-b px-4 pb-4 md:py-3 w-full md:border-none md:w-1/4"
          >
            <a
              class="uppercase text-xs font-bold tracking-wider text-violet-600 hidden md:block"
              href="#"
            >
              Praesent elementum
            </a>
            <article class="h-0 md:h-auto -mt-4 md:mt-0 overflow-hidden">
              <ul class="my-5 text-sm tracking-wide">
                <li class="my-3 tracking-wide">
                  <a href="#">Mauris mattis nunc</a>
                </li>
                <li class="my-3 tracking-wide">
                  <a href="#">Nunc viverra risus</a>
                </li>
                <li class="my-3 tracking-wide">
                  <a href="#">Etiam a libero</a>
                </li>
              </ul>
            </article>
          </section>
          <section
            class="relative text-gray-700 font-light border-b px-4 pb-4 md:py-3 w-full md:border-none md:w-1/4"
          >
            <a
              class="uppercase text-xs font-bold tracking-wider text-violet-600 hidden md:block"
              href="#"
            >
              Aenean gravida orci in sem varius
            </a>
            <article class="h-0 md:h-auto -mt-4 md:mt-0 overflow-hidden">
              <ul class="my-5 text-sm tracking-wide">
                <li class="my-3 tracking-wide">
                  <a href="#">Cras id ipsum</a>
                </li>
              </ul>
            </article>
          </section>
        </div>
      </div>
      <div class="max-w-screen-lg mx-auto border-none px-4">
        <section
          class="flex flex-col md:flex-row md:justify-between md:border-solid md:border-t text-gray-700 font-light text-sm pt-4 pb-6 md:pt-5 md:pb-6 w-full"
        >
          <div>
            <p class="leading-8 tracking-wide">
              &copy; Lorem Ipsum Co., 123 Lorem Street, Paris, FR
            </p>
          </div>
          <div>
            <p class="leading-8 tracking-wide">Privacy Policy</p>
          </div>
        </section>
      </div>
    </footer>
</template>

<style>
#app {
    font-family: zillaslab,palatino,"Palatino Linotype",serif,
        BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans,
        sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol,
        Noto Color Emoji;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #483361;
    background: #f8f9fa;
    height: max-content;
}
</style>
