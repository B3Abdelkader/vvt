<template>
  <di>
      <h1> OOPS!</h1>
      <h2>No conexion Ill GUESS</h2>
      <router-link :to="{name: 'EventsPage'}"><a href="#" @click="$router.go(-1)">Click HERE</a> to try again.</router-link>
  </di>
</template>

<script>
export default {

}
</script>

<style>

</style>