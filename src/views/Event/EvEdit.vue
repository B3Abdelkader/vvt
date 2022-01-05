<template>

    <div class="flex items-center justify-center py-5">
EDIT HERE
    </div>
</template>

<script>
export default {
    props: ['event'],
    data: function() {
        return {
            unsavedChanges: true
        }
    },
    beforeRouteLeave(to, from, next) {
        if (this.unsavedChanges) {
            if (confirm('You have unsaved changes. Are you sure you want to leave this page?')) {
                next();
            } else {
                next(false);
            }
        } else {
            next();
        }
    },
}
</script>

<style>
</style>