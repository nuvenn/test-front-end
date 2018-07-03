<template>
  <div class="main">
    <v-toolbar color="white">
        <v-toolbar-side-icon class="menu-icon"></v-toolbar-side-icon>
        <v-toolbar-title class="logo font-weight-bold">
          <img src="../assets/woelfel.png" alt="logo">
        </v-toolbar-title>
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
              <img class="toolbar-avatar" src="../assets/homer.png" alt="avatar">
            </v-avatar>
            <span class="profile-name">Guest User</span>
            <v-icon>keyboard_arrow_down</v-icon>
        </v-chip>
    </v-toolbar>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm6 md3 v-for="hero in filteredData(searchParam)" :key="hero.id">
          <v-card class="card-custom">
            <v-card-actions class="favorite-panel">
                <v-spacer></v-spacer>
                <button class="heart-button">
                  <div id="heart-image"></div>
                </button>
            </v-card-actions>
            <v-card-media>
              <img class="card-image" :src="hero.thumbnail.path + '/portrait_large.jpg'">
            </v-card-media>
            <v-card-title primary-title class="justify-center card-title">
              <div class="text-lg-center">
                <div class="headline">{{ hero.name }}</div>
                <span class="grey--text">{{`${hero.name.split(" ")[0]}@gmail.com`}}</span>
              </div>
            </v-card-title>
            <v-card-actions class="justify-center">
              <v-btn class="card-button" flat>
                <img class="card-button-icon" src="../assets/to-do.png" alt="to-do">
                <span>Assign</span>
              </v-btn>
              <v-btn v-bind:href="hero.urls[0].url" class="card-button" flat>
                <img class="card-button-icon" src="../assets/preview.png" alt="preview">
                <span>View</span>
              </v-btn>
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
        error => { throw `Falha de comunicação com servidor - ${error}`  }
      )
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-custom div {
  font-size: 18px !important;
}
.card-custom span {
  font-size: 14px !important;
}
.card-custom {
  max-width: 280px;
  min-height: 320px;
  margin: 5px auto;
}
.card-image {
  width: 120px;
  height: 120px;
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
  color: #bfc5d1;
  width: 115px;
  border-radius: 20px 20px 20px 20px; 
  text-transform: none !important;
  bottom: 5px;
}
.card-button:hover {
  background-color: #507bfc !important;
  color: #FFF !important;
}
.card-button-icon:hover {
  color: #FFF !important;
}
.favorite-panel {
  height: 50px;
}
.heart-button:focus {
  outline:none;
}
#heart-image {
  background-image: url("../assets/heart_outlined.png");
  height: 40px;
  width: 40px;
}
#heart-image:hover {
  background-image: url("../assets/heart.png");
  margin-top: 9px;
}
.card-button-icon {
  margin-right: 10px;
}
.toolbar-search {
  margin: 8px 0 0 50px;
}
.menu-icon {
  color: #bfc5d1;
}
</style>
