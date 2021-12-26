<template>
       <!-- Card ICI -->
<div class="grid justify-items-center select-none">
    <div class="max-w-xs justify-items-center bg-white rounded-xl p-2 shadow-md m-2">
        <div class="flex flex-col w-full">
            <div class="flex flex-row justify-between">
                       <!-- Display Event data -->
                <span class="relative text-3xl whitespace-nowrap truncate overflow-hidden">{{event.localName}}</span>
            </div>
            <p class="text-gray-400 text-xs">@{{event.countryCode}}/{{event.type}} on {{event.date}}</p>
            <!-- <p class="text-gray-500 leading-4" v-for="province in event.provinces" :key="province.id" :event="province">Provinces : {{event.province}};  </p> -->
        </div>
        
    </div>
    
</div>

</template>

<script>
export default {
    name: 'EventCardCp',
    props:{
        event: Object
    }
}
</script>

<style>

</style>