<template>
  <div class="flex items-center min-h-screen bg-gray-50 font-thin">
    <div class="container mx-auto">
      <div class="max-w-lg mx-auto bg-white p-5 rounded-md shadow-sm text-left">
        <div class="text-left select-none">
          <h1
            class="my-4 text-3xl text-gray-700 dark:text-gray-200 underline decoration-indigo-200"
          >
            <h1
              class="flex self-center max-w-lg mb-6 font-sans text-6xl select-none font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none"
            >
              Create<!--<br class="hidden md:block" /> -->

              <span class="relative px-1">
                <div
                  class="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400"
                ></div>
                <span class="relative inline-block text-deep-purple-accent-400"
                  >Event</span
                >
              </span>
            </h1>
          </h1>
          <p class="text-gray-400 dark:text-gray-400">
            Fill up the form below to add your Event.
          </p>
        </div>
        <div class="m-7">
          <form @submit.prevent="onSubmit" id="form">
            <div class="form-control w-full">
              <label class="label">
                <a href="#" class="label-text-alt"> Event type... </a>
              </label>
              <select class="select select-bordered w-full font-thin text-gray-500">
                <option disabled="" selected="">Choose a type</option>
                <option
                  v-for="option in categories"
                  :value="option.toLowerCase()"
                  :key="option"
                  :selected="option === event.category"
                >
                  {{ option }}
                </option>
              </select>
              <label class="label">
                <a href="#" class="label-text-alt"></a>
                <a href="#" class="label-text-alt">Need hint?</a>
              </label>
            </div>
            <div class="mb-7 input-with-placeholder">
              <input
                type="text"
                v-model="event.fullName"
                name="name"
                id="name"
                required
                class="input input-bordered w-full"
              />
              <label for="name" class="text-gray-400 select-none">Full Name</label>
            </div>

            <div class="mb-7 input-with-placeholder">
              <input
                type="email"
                v-model="event.email"
                name="email"
                id="email"
                required
                class="input input-bordered w-full"
              />
              <label for="email" class="text-gray-400 select-none">Email Adress</label>
            </div>
            <div class="mb-7 input-with-placeholder">
              <input
                type="text"
                v-model="event.phone"
                name="phone"
                id="phone"
                required
                class="input input-bordered w-full"
              />
              <label for="phone" class="text-gray-400 select-none font-thin"
                >Phone number</label
              >
            </div>
            <div class="mb-6">
              <label
                for="message"
                class="block mb-2 text-sm text-gray-600 dark:text-gray-400 select-none"
                >Event description</label
              >
              <textarea
                rows="5"
                v-model="event.message"
                name="message"
                id="message"
                placeholder="Your Message"
                class="input input-bordered w-full"
                required
              ></textarea>
            </div>
            <div class="mb-6">
              <button type="submit" class="btn btn-outline btn-primary w-full" block>
                Submit
              </button>
            </div>
            <p class="text-base text-center text-gray-400" id="result"></p>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div>{{ $store.state.events }}</div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";

export default {
  data() {
    return {
      categories: ["Nature", "Food", "Education", "Community", "Housing"],
      event: {
        id: "",
        category: "",
        fullName: "",
        email: "",
        phone: "",
        message: "",
        creator: "",
      },
    };
  },
  methods: {
    onSubmit() {
      const event = {
        ...this.event,
        id: uuidv4(),
        creator: this.$store.state.creator,
      };
      this.$store
        .dispatch("createEvent", event)
        .then(() => {
          //set timout
          setTimeout(() => {
            this.$router.push({
              name: "EventDetailPage",
              params: { id: event.id },
            });
          }, 2000);
        })
        .catch((error) => {
          if (error.response && error.response.status === 404) {
            this.$router.push({
              name: "ErrorPage",
              params: { error: error }, //error est transmis a 'ErrorPage' comme une props
            });
          } else {
            this.$router.push({
              name: "NetworkErrorPage",
            });
          }
        });
    },
  },
};
</script>

<style lang="scss">
.input-with-placeholder {
  position: relative;
  label {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 10px;
    transition: 50ms all;
  }
  input {
    &:valid + label,
    &:focus + label {
      height: 50%;
      padding-left: 0;
      transform: translateY(-100%);
      font-size: 12px;
      color: gray;
    }
  }
}
</style>
