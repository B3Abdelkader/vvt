<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
  <nav class="bg-stone-100 border-gray-600 px-2 sm:px-4 py-2.5 rounded">
    <div class="container flex flex-wrap justify-between items-center mx-auto">
      <a href="#" class="flex">
        <svg
          class="mr-3 h-10"
          viewBox="0 0 52 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.87695 53H28.7791C41.5357 53 51.877 42.7025 51.877 30H24.9748C12.2182 30 1.87695 40.2975 1.87695 53Z"
            fill="#76A9FA"
          />
          <path
            d="M0.000409561 32.1646L0.000409561 66.4111C12.8618 66.4111 23.2881 55.9849 23.2881 43.1235L23.2881 8.87689C10.9966 8.98066 1.39567 19.5573 0.000409561 32.1646Z"
            fill="#A4CAFE"
          />
          <path
            d="M50.877 5H23.9748C11.2182 5 0.876953 15.2975 0.876953 28H27.7791C40.5357 28 50.877 17.7025 50.877 5Z"
            fill="#1C64F2"
          />
        </svg>
        <span class="self-center text-lg font-semibold whitespace-nowrap dark:text-white"
          >B3Abdelkader</span
        >
      </a>
      <div class="flex items-center md:order-2">
        <!-- Dropdown menu -->
        <div
          class="hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
          id="dropdown"
        >
          <div class="py-3 px-4">
            <span class="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
            <span
              class="block text-sm font-medium text-gray-500 truncate dark:text-gray-400"
              >name@flowbite.com</span
            >
          </div>
          <ul class="py-1" aria-labelledby="dropdown">
            <li>
              <a href="#" class="block py-2 px-4 text-sm text-gray-800 hover:bg-gray-100"
                >Dashboard</a
              >
            </li>
            <li>
              <a href="#" class="block py-2 px-4 text-sm text-gray-800 hover:bg-gray-100"
                >Settings</a
              >
            </li>
            <li>
              <a href="#" class="block py-2 px-4 text-sm text-gray-800 hover:bg-gray-100"
                >Earnings</a
              >
            </li>
            <li>
              <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"
                >Sign out</a
              >
            </li>
          </ul>
        </div>
        <button
          data-collapse-toggle="mobile-menu-2"
          type="button"
          class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mobile-menu-2"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <svg
            class="hidden w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <div
        class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
        id="mobile-menu-2"
      >
        <ul
          class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium"
        >
          <li>
            <a
              href="#"
              class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
              aria-current="page"
              >Home</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 pr-4 pl-3 text-gray-500 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >About</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 pr-4 pl-3 text-gray-500 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >Services</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 pr-4 pl-3 text-gray-500 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >Pricing</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 pr-4 pl-3 text-gray-500 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >Contact</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <header class="p-2 shadow-sm px-10 p py-5">
    <div class="inline-block text-lg">
      <h1>
        <span
          class="inline-block top-auto text-gray-600 float-right rounded-full mx-1 px-4 bg-violet-50 font-thin"
          >B3Abdelkader</span
        >
      </h1>
    </div>

    <router-link
      class="inline-block text-gray-600 float-right rounded-full mx-1 px-4 bg-violet-100 hover:animate-pulse font-thin"
      to="/"
      >Home</router-link
    >
    <router-link
      class="inline-block top-auto text-gray-600 float-right rounded-full mx-1 px-2 bg-violet-100 hover:animate-pulse font-thin"
      to="/events"
      >Events</router-link
    >
    <router-link
      class="inline-block top-auto text-gray-600 float-right rounded-full mx-1 px-2 bg-violet-100 hover:animate-pulse font-thin"
      to="/about"
      >About</router-link
    >

    <router-link
      class="inline-block top-auto text-gray-600 float-right rounded-full mx-1 px-2 bg-violet-100 hover:animate-pulse font-thin hover:top-full"
      to="/news"
      >India News</router-link
    >
    <router-link
      class="inline-block top-auto text-gray-600 float-right rounded-full mx-1 px-2 bg-violet-100 hover:animate-pulse font-thin"
      to="/event/create"
      >Add Event</router-link
    >
  </header>
  <router-view />
  <footer class="mt-6">
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
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans",
    Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #483361;
  background: #f8f9fa;
  height: max-content;
}
</style>
