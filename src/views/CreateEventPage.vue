<template>
    <div class="flex items-center min-h-screen bg-gray-50 font-thin">
        <div class="container mx-auto">
            <div
                class="
                    max-w-md
                    mx-auto
                    bg-white
                    p-5
                    rounded-md
                    shadow-sm
                    text-left
                "
            >
                <div class="text-left select-none">
                    <h1 class="my-3 text-3xl text-gray-700 dark:text-gray-200">
                        New Event!
                    </h1>
                    <p class="text-gray-400 dark:text-gray-400">
                        Fill up the form below to add your Event.
                    </p>
                </div>
                <div class="m-7">
                    <form @submit.prevent="onSubmit" id="form">
                        <div class="mb-7 input-with-placeholder">
                            <select
                                v-model="event.category"
                                placeholder="Select a category"
                                class="
                                    w-full
                                    text-gray-600
                                    placeholder-gray-400
                                    h-10
                                    px-3
                                    rounded-md
                                    font-thin
                                    focus:outline-none
                                    focus:ring
                                    focus:ring-teal-50
                                    focus:border-teal-200
                                "
                                required
                            >
                                <option
                                    value=""
                                    disabled
                                    selected
                                    class="placeholder-gray-800"
                                >
                                    A category...
                                </option>
                                <option
                                    v-for="option in categories"
                                    :value="option.toLowerCase()"
                                    :key="option"
                                    :selected="option === event.category"
                                >
                                    {{ option }}
                                </option>
                            </select>
                        </div>
                        <div class="mb-7 input-with-placeholder">
                            <input
                                type="text"
                                v-model="event.fullName"
                                name="name"
                                id="name"
                                required
                                class="
                                    w-full
                                    bg-gray-200
                                    h-10
                                    px-3
                                    py-3
                                    text-gray-600
                                    font-thin
                                    rounded-md
                                    focus:outline-none
                                    focus:ring
                                    focus:ring-teal-50
                                    focus:border-teal-200
                                "
                            />
                            <label for="name" class="text-gray-400 select-none"
                                >Full Name</label
                            >
                        </div>

                        <div class="mb-7 input-with-placeholder">
                            <input
                                type="email"
                                v-model="event.email"
                                name="email"
                                id="email"
                                required
                                class="
                                    w-full
                                    bg-gray-200
                                    h-10
                                    px-3
                                    py-2
                                    text-gray-600
                                    font-thin
                                    rounded-md
                                    focus:outline-none
                                    focus:ring
                                    focus:ring-teal-50
                                    focus:border-teal-200
                                "
                            />
                            <label for="email" class="text-gray-400 select-none"
                                >Email Adress</label
                            >
                        </div>
                        <div class="mb-7 input-with-placeholder">
                            <input
                                type="text"
                                v-model="event.phone"
                                name="phone"
                                id="phone"
                                required
                                class="
                                    w-full
                                    bg-gray-200
                                    h-10
                                    px-3
                                    py-2
                                    text-gray-600
                                    font-thin
                                    rounded-md
                                    focus:outline-none
                                    focus:ring
                                    focus:ring-teal-50
                                    focus:border-teal-200
                                "
                            />
                            <label for="phone" class="text-gray-400 select-none"
                                >Phone number</label
                            >
                        </div>
                        <div class="mb-6">
                            <label
                                for="message"
                                class="
                                    block
                                    mb-2
                                    text-sm text-gray-600
                                    dark:text-gray-400
                                    select-none
                                "
                                >Event description</label
                            >
                            <textarea
                                rows="5"
                                v-model="event.message"
                                name="message"
                                id="message"
                                placeholder="Your Message"
                                class="
                                    input-with-placeholder
                                    w-full
                                    px-3
                                    py-2
                                    bg-gray-100
                                    font-thin
                                    placeholder-gray-300
                                    border border-gray-300
                                    rounded-md
                                    focus:outline-none
                                    focus:ring
                                    focus:ring-teal-50
                                    focus:border-teal-100
                                "
                                required
                            ></textarea>
                        </div>
                        <div class="mb-6">
                            <button
                                type="submit"
                                class="
                                    bg-gray-100
                                    border-b-2
                                    border-teal-400
                                    ml-2
                                    hover:bg-teal-50
                                    text-gray-600
                                    font-thin
                                    py-4
                                    px-6
                                    rounded
                                "
                            >
                                Submit
                            </button>
                        </div>
                        <p
                            class="text-base text-center text-gray-400"
                            id="result"
                        ></p>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div>{{ $store.state.events }}</div>
    <div
        class="
            bg-teal-100
            border-t-4 border-teal-500
            rounded-b
            text-teal-900
            px-4
            py-3
            shadow-sm
        "
        role="alert"
    >
        <div class="flex">
            <div class="py-1">
                <svg
                    class="fill-current h-6 w-6 text-teal-500 mr-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                >
                    <path
                        d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"
                    />
                </svg>
            </div>
            <div>
                <p class="font-semibold text-left">
                    Our privacy policy has changed
                </p>
                <p class="text-sm font-thin text-left">
                    Make sure you know how these changes affect you.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'

export default {
    data() {
        return {
            categories: ['Nature', 'Food', 'Education', 'Community', 'Housing'],
            event: {
                id: '',
                category: '',
                fullName: '',
                email: '',
                phone: '',
                message: '',
                creator: '',
            },
        }
    },
    methods: {
        onSubmit() {
            const event = {
                ...this.event,
                id: uuidv4(),
                creator: this.$store.state.creator,
            }
            this.$store
                .dispatch('createEvent', event)
                .then(() => {
                    this.$router.push({
                        name: 'EventDetailPage',
                        params: { id: event.id },
                    })
                })
                .catch((error) => {
                    this.$router.push({
                        name: 'ErrorPage',
                        params: { error: error }, //error est transmis a 'ErrorPage' comme une props
                    })
                })
        },
    },
}
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
        transition: 300ms all;
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