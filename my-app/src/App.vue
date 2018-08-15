<template>
  <div id="app">
    <v-app light>
      <Toolbar />
      <Heroes />
    </v-app>
  </div>
</template>

<script>
import Toolbar from './components/Common/Toolbar.vue'
import Heroes from './components/Heroes/Heroes.vue'

export default {
  name: 'app',
  components: {
    Toolbar,
    Heroes
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
