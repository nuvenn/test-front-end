<template>
  <div id="app">
    <v-app light>
      <Menu></Menu>
      <Main msg="Boa consulta"/>
    </v-app>
  </div>
</template>

<script>
import Menu from './components/Menu'
import Main from './components/Main.vue'

export default {
  name: 'app',
  components: {
    Main,
    Menu
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
