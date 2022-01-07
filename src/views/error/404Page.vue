<template>
    <div class="pt-6 grid min-h-screen grid-cols-1 place-items-center place-content-start">
                    <div class="py-3 px-5 mb-4 bg-red-100 text-red-900 text-lg font-thin rounded-md border border-red-200" role="alert">
                                    {{ error }}
                    </div>
        <div style="width: 5%; height: 5%" class="shake-opacity shake-constant">
            <img src="https://i.imgur.com/YxXnhM4.png" />
        </div>
    </div>
</template>

<script>
export default {
    props: ['error'],
}
</script>
<style>
</style>