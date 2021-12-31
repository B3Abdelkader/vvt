<template>
    <div class="grid min-h-screen grid-cols-1 place-items-center place-content-start">
        <p
            class="
            pt-6
                rounded-md
                shadow-sm
                text-xl
                font-thin
                inline
                px-2
                py-2
            "
        >
            {{ error }}
        </p>
        <div style="width: 5%; height: 5%">
            <img src="https://i.imgur.com/gOmjRel.png" />
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