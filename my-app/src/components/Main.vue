<template>
  <div class="main">
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm6 md3>
          <v-card class="card-custom">
            <v-card-title primary-title class="justify-center">
              <div class="text-lg-center">
                <span class="grey--text">Add New Member</span>
              </div>
            </v-card-title>
            <v-card-media>
              <img class="card-image-profile" src="../assets/profile.png">
            </v-card-media>
            <v-form class="card-form"> 
              <v-text-field
                required
                placeholder="Name"
              ></v-text-field>
              <v-text-field
                required
                placeholder="E-mail"
              ></v-text-field>
            </v-form>
            <v-card-actions class="justify-center">
              <v-btn class="card-button" flat>Add</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 md3>
          <v-card class="card-custom">
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon color="red">favorite</v-icon>
                </v-btn>
            </v-card-actions>
            <v-card-media>
              <img class="card-image" src="../assets/batman.jpg">
            </v-card-media>
            <v-card-title primary-title class="justify-center">
              <div class="text-lg-center">
                <div class="headline">Marie Walters</div>
                <span class="grey--text">mariewalters@gmail.com</span>
              </div>
            </v-card-title>
            <v-card-actions class="justify-center">
              <v-btn class="card-button" flat>Assign</v-btn>
              <v-btn class="card-button" flat>View</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import HerosService from '../services/HerosService'
export default {
  name: "Main",
  data: () => ({
    heros: null
  }),
  methods: {},
  created () {
    HerosService.getHeros().then(
      response => {
        console.log(response);
        this.heros = response.data
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
  min-height: 360px;
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
.card-form {
  margin: 0 30px 0 30px;
}
.card-button {
  color: #9e9e9e;
  width: 115px;
  border-radius: 20px 20px 20px 20px; 
  text-transform: none !important;
}
.card-button:hover {
  background-color: blue !important;
  color: #FFF !important;
}
</style>
