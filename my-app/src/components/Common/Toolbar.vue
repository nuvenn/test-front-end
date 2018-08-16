<template>
    <v-toolbar color="white">
        <v-toolbar-side-icon class="menu-icon"></v-toolbar-side-icon>
        <v-toolbar-title class="logo font-weight-bold">
          <img src="../../assets/woelfel.png" alt="logo">
        </v-toolbar-title>
        <v-flex xs6 sm6 md6>
          <v-text-field
            @input="searchHero"
            class="toolbar-search font-weight-light font-italic"
            label="Solo"
            placeholder="Search..."
            height="30"
            solo
          ></v-text-field>
        </v-flex>
        <v-spacer></v-spacer>
        <v-chip color="white" text-color="grey">
            <v-avatar>
              <img class="toolbar-avatar" src="../../assets/homer.png" alt="avatar">
            </v-avatar>
            <span class="profile-name">Guest User</span>
            <v-icon>keyboard_arrow_down</v-icon>
        </v-chip>
    </v-toolbar>
</template>

<script>
export default {
  name: "Toolbar",
  methods: {
    searchHero(event) {
      this.$store.commit('bindHero', event)
    }  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.toolbar-search {
  margin: 8px 0 0 50px;
}
.menu-icon {
  color: #bfc5d1;
}
</style>
