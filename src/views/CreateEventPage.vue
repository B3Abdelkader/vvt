<template>
    <div class="flex items-center min-h-screen bg-gray-50 dark:bg-gray-900">
        <div class="container mx-auto">
            <div class="max-w-md mx-auto bg-white p-5 rounded-md shadow-sm">
                <div class="text-center">
                    <h1
                        class="
                            my-3
                            text-3xl
                            font-semibold
                            text-gray-700
                            dark:text-gray-200
                        "
                    >
                        VueX TP
                    </h1>
                    <p class="text-gray-400 dark:text-gray-400">
                        Fill up the form below to send us a message.
                    </p>
                </div>
                <div class="m-7">
                    <form @submit.prevent="onSubmit" id="form">
                        <div class="mb-6">
                            <label class="text-gray-400 dark:text-gray-400"
                                >Select a category</label
                            >
                            <select
                                v-model="event.category"
                                class="
                                    w-full
                                    h-8
                                    rounded-md
                                    focus:outline-none
                                    focus:ring
                                    focus:ring-indigo-100
                                    focus:border-indigo-300
                                    dark:text-white dark:focus:ring-gray-900
                                "
                            >
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
                        <div class="mb-6">
                            <input
                                type="text"
                                v-model="event.fullName"
                                name="name"
                                id="name"
                                placeholder="Full Name"
                                required
                                class="
                                    w-full
                                    h-8
                                    px-3
                                    py-2
                                    placeholder-gray-300
                                    border border-gray-300
                                    rounded-md
                                    focus:outline-none
                                    focus:ring
                                    focus:ring-indigo-100
                                    focus:border-indigo-300
                                    dark:bg-gray-700
                                    dark:text-white
                                    dark:placeholder-gray-500
                                    dark:border-gray-600
                                    dark:focus:ring-gray-900
                                    dark:focus:border-gray-500
                                "
                            />
                        </div>

                        <div class="mb-6">
                            <input
                                type="email"
                                v-model="event.email"
                                name="email"
                                id="email"
                                placeholder="Email Address"
                                required
                                class="
                                    w-full
                                    h-8
                                    px-3
                                    py-2
                                    placeholder-gray-300
                                    border border-gray-300
                                    rounded-md
                                    focus:outline-none
                                    focus:ring
                                    focus:ring-indigo-100
                                    focus:border-indigo-300
                                    dark:bg-gray-700
                                    dark:text-white
                                    dark:placeholder-gray-500
                                    dark:border-gray-600
                                    dark:focus:ring-gray-900
                                    dark:focus:border-gray-500
                                "
                            />
                        </div>
                        <div class="mb-6">
                            <input
                                type="text"
                                v-model="event.phone"
                                name="phone"
                                id="phone"
                                placeholder="Phone Number"
                                required
                                class="
                                    w-full
                                    h-8
                                    px-3
                                    py-2
                                    placeholder-gray-300
                                    border border-gray-300
                                    rounded-md
                                    focus:outline-none
                                    focus:ring
                                    focus:ring-indigo-100
                                    focus:border-indigo-300
                                    dark:bg-gray-700
                                    dark:text-white
                                    dark:placeholder-gray-500
                                    dark:border-gray-600
                                    dark:focus:ring-gray-900
                                    dark:focus:border-gray-500
                                "
                            />
                        </div>
                        <div class="mb-6">
                            <label
                                for="message"
                                class="
                                    block
                                    mb-2
                                    text-sm text-gray-600
                                    dark:text-gray-400
                                "
                                >Your Message</label
                            >

                            <textarea
                                rows="5"
                                v-model="event.message"
                                name="message"
                                id="message"
                                placeholder="Your Message"
                                class="
                                    w-full
                                    px-3
                                    py-2
                                    placeholder-gray-300
                                    border border-gray-300
                                    rounded-md
                                    focus:outline-none
                                    focus:ring
                                    focus:ring-indigo-100
                                    focus:border-indigo-300
                                    dark:bg-gray-700
                                    dark:text-white
                                    dark:placeholder-gray-500
                                    dark:border-gray-600
                                    dark:focus:ring-gray-900
                                    dark:focus:border-gray-500
                                "
                                required
                            ></textarea>
                        </div>
                        <div class="mb-6">
                            <button
                                type="submit"
                                class="
                                    w-full
                                    px-2
                                    py-2
                                    text-white
                                    bg-purple-800
                                    rounded-md
                                    focus:bg-indigo-600 focus:outline-none
                                "
                            >
                                Send Message
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
            this.event.id = uuidv4()
            this.event.creator = this.$store.state.creator
            console.log('Event', this.event)
        },
    },
}
</script>

<style>
</style>