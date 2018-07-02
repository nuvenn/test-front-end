<template>
  <div class="main">
    <v-toolbar color="white">
        <v-toolbar-side-icon class="menu-icon"></v-toolbar-side-icon>
        <v-toolbar-title class="logo font-weight-bold"><span class="text-blue">Woel</span>Fel</v-toolbar-title>
        <v-flex xs6 sm6 md6>
          <v-text-field
            :value="searchParam"
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
              <img class="toolbar-avatar" src="../assets/batman.jpg" alt="trevor">
            </v-avatar>
            <span class="profile-name">Guest User</span>
            <v-icon>keyboard_arrow_down</v-icon>
        </v-chip>
    </v-toolbar>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm6 md3 v-for="hero in filteredData(searchParam)" :key="hero.id">
          <v-card class="card-custom">
            <v-card-actions>
                <v-spacer></v-spacer>
                <!-- <v-btn icon @click="changeColor">
                  <v-icon color="red">favorite</v-icon>
                </v-btn> -->
            </v-card-actions>
            <v-card-media>
              <img class="card-image" :src="hero.thumbnail.path + '/portrait_large.jpg'">
            </v-card-media>
            <v-card-title primary-title class="justify-center card-title">
              <div class="text-lg-center">
                <div class="headline">{{ hero.name }}</div>
                <!-- <span class="grey--text">hero</span> -->
              </div>
            </v-card-title>
            <v-card-actions class="justify-center">
              <!-- <v-btn class="card-button" flat>Assign</v-btn> -->
              <v-btn class="card-button" flat>View</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import HeroesService from '../services/HeroesService'
export default {
  name: "Main",
  data: () => ({
    searchParam: '',
    heroes: null
  }),
  methods: {
    searchHero(event) {
      this.searchParam = event
    },
    filteredData (searchParam) {
      if(this.heroes && searchParam){
        return this.heroes.filter(hero => hero.name.toLowerCase().match(searchParam.toLowerCase()))
      } else {
        return this.heroes
      }
    }
  },
  created () {
    HeroesService.getHeroes().then(
      response => {
        this.heroes = response.data.data.results
      }).catch(
      error => console.log(error)
    )
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-custom {
  max-width: 275px;
  min-height: 320px;
  margin: 5px auto;
}
.card-image {
  width: 150px;
  height: 150px;
  margin: 0 auto;
  border-radius: 50%;
}
.card-image-profile {
  width: 100px;
  height: 100px;
  margin: 0 auto;
  border-radius: 50%;
}
.card-title {
  height: 100px;
}
.card-form {
  margin: 0 30px 0 30px;
}
.card-button {
  color: #9e9e9e;
  width: 115px;
  border-radius: 20px 20px 20px 20px; 
  text-transform: none !important;
  bottom: 5px;
}
.card-button:hover {
  background-color: blue !important;
  color: #FFF !important;
}
.toolbar-search {
  margin: 8px 0 0 50px;
}
.menu-icon {
  color: #9e9e9e;
}
</style>
