<template>
    <h1>Hello</h1>

    <span
        class="bg-blue-600 font-bold text-white text-center py-1 px-2 text-xs rounded"
        >Primary</span
    >
    <span
        class="bg-gray-500 font-bold text-white text-center py-1 px-2 text-xs rounded"
        >Secondary</span
    >
    <span
        class="bg-green-500 font-bold text-white text-center py-1 px-2 text-xs rounded"
        >Success</span
    >
    <span
        class="bg-red-500 font-bold text-white text-center py-1 px-2 text-xs rounded"
        >Danger</span
    >
    <span
        class="bg-yellow-500 font-bold text-white text-center py-1 px-2 text-xs rounded"
        >Warning</span
    >
    <span
        class="bg-purple-400 font-bold text-white text-center py-1 px-2 text-xs rounded"
        >Info</span
    >
    <span
        class="bg-gray-100 font-bold text-gray-800 text-center py-1 px-2 text-xs rounded"
        >Light</span
    >
    <span
        class="bg-gray-800 font-bold text-white text-center py-1 px-2 text-xs rounded"
        >Dark</span
    >

    <div class="relative overflow-hidden w-56 h-56 bg-white border">
        <div class="absolute left-0 top-0 h-16 w-16">
            <div
                class="absolute transform -rotate-45 bg-gray-600 text-center text-white font-semibold py-1 left-[-34px] top-[32px] w-[170px]"
            >
                Popular
            </div>
        </div>
    </div>

    <div class="flex items-center min-h-screen bg-gray-50 font-bold">
        <div class="container mx-auto">
            <div
                class="max-w-md mx-auto bg-white p-5 rounded-md shadow-sm text-left"
            >
                <div class="text-left select-none">
                    <h1
                        class="my-3 text-3xl text-gray-700 dark:text-gray-200 underline decoration-indigo-200 font-bold"
                    >
                        LogIn
                    </h1>
                </div>
                <div class="m-7">
                    <form @submit.prevent="onSubmit" id="form">
                        <div class="mb-7 input-with-placeholder">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                required
                                class="w-full bg-gray-100 h-30 px-3 py-3 text-gray-600 rounded-md focus:outline-none focus:ring focus:ring-teal-50 focus:border-teal-200"
                            />
                            <label for="name" class="text-gray-400 select-none"
                                >UserName</label
                            >
                        </div>
                                                <div class="mb-7 input-with-placeholder">
                            <input
                                type="password"
                                name="password"
                                id="password"
                                required
                                class="w-full bg-gray-100 h-30 px-3 py-3 text-gray-600 rounded-md focus:outline-none focus:ring focus:ring-teal-50 focus:border-teal-200"
                            />
                            <label for="password" class="text-gray-400 select-none"
                                >Password</label
                            >
                        </div>
                        <div class="mb-6">
                            <button
                                type="submit"
                                class="w-full bg-indigo-400 border-b-4 border-indigo-500 hover:bg-indigo-500 text-white rounded select-none font-bold"
                                block
                            >
                                Se Connecter
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

<script></script>

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
