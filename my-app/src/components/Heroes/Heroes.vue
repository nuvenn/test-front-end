<template>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm6 md3 v-for="hero in filteredData()" :key="hero.id">
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
                <img class="card-button-icon" src="../../assets/to-do.png" alt="to-do">
                <span>Assign</span>
              </v-btn>
              <v-btn v-bind:href="hero.urls[0].url" class="card-button" flat>
                <img class="card-button-icon" src="../../assets/preview.png" alt="preview">
                <span>View</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "Heroes",
  data: () => ({ }),
  computed: mapGetters({
    searchParam: 'getSearchParam',
    heroes: 'getHeroes'
  }),
  methods: {
    filteredData() {
      if(this.heroes && this.searchParam){
        return this.heroes.filter(hero => hero.name.toLowerCase().match(this.searchParam.toLowerCase()))
      } else {
        return this.heroes
      }
    }
  },
  created () {
    this.$store.dispatch('fetchHeroes')
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
  max-width: 270px;
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
  background-image: url("../../assets/heart_outlined.png");
  height: 40px;
  width: 40px;
}
#heart-image:hover {
  background-image: url("../../assets/heart.png");
  margin-top: 9px;
}
.card-button-icon {
  margin-right: 10px;
}
</style>
