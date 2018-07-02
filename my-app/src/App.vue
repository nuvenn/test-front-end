<template>
  <div id="app">
    <v-app light>
      <Main />
    </v-app>
  </div>
</template>

<script>
import Main from './components/Main.vue'

export default {
  name: 'app',
  components: {
    Main
  }
}
</script>

<style>
@media screen and (min-width: 0px) and (max-width: 1200px) {
  .logo, .profile-name { display: none; } 
}
.text-blue {
  color: blue;
}
</style>
