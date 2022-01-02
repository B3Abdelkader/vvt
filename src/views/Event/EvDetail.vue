<template>

    <div class="flex items-center justify-center py-5">
        <div
            class="
                card
                cursor-pointer
                border border-gray-300
                rounded-lg
                hover:shadow-md hover:border-opacity-0
                transform
                hover:-translate-y-1
                transition-all
                duration-200
            "
        >
            <div class="m-3">
                <h2 class="text-lg mb-2">
                    {{ event.creator }}
                    <span
                        class="
                            text-sm text-blue-100
                            font-mono
                            bg-violet-600
                            rounded-full
                            px-2
                            animate-pulse
                        "
                        >{{ event.id }}</span
                    >
                </h2>
                <p
                    class="
                        font-light font-mono
                        text-sm text-gray-700
                        hover:text-gray-900
                        transition-all
                        duration-200
                    "
                >
                    {{ event.message }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['event']
}
</script>

<style>
</style>