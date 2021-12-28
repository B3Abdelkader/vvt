<template>
    <!-- Card ICI -->
    <router-link :to="{name: 'EventDetailPage', params:{id: event.id} }">
    <div class="grid justify-items-center select-none">
        <div
            class="
                max-w-xs
                justify-items-center
                bg-white
                rounded-xl
                p-2
                shadow-md
                m-2
            "
        >
            <div class="flex flex-col w-full">
                <div class="flex flex-row justify-between">
                    <!-- Display Event data -->
                    <span
                        class="
                            relative
                            text-3xl
                            whitespace-nowrap
                            truncate
                            overflow-hidden
                        "
                        >{{ event.category.toUpperCase() }}</span
                    >
                </div>
                <p class="text-gray-400 text-xs">
                    @{{ event.creator }}/{{ event.email }} on
                    <span>{{ event.message }}</span>
                </p>
                <!-- <p class="text-gray-500 leading-4" v-for="province in event.provinces" :key="province.id" :event="province">Provinces : {{event.province}};  </p> -->
            </div>
        </div>
    </div>
    </router-link>
</template>

<script>
export default {
    name: 'EventCardCp',
    props: {
        event: Object,
    },
}
</script>