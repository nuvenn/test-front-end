import Vue from 'vue'
import Vuex from 'vuex'
import HeroesService from '../services/HeroesService'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        searchParam: '',
        heroes: null
    },
    getters: {
        getHeroes(state) {
            return state.heroes
        },
        getSearchParam(state) {
            return state.searchParam
        }
    },
    mutations: {
        bindHero(state, hero) {
            state.searchParam = hero
        },
        setHeroes(state, heroes) {
            state.heroes = heroes
        }
    },
    actions: {
        fetchHeroes({ commit }) {    
            HeroesService.getHeroes().then(
              response => {
                 commit('setHeroes', response.data.data.results)
               }).catch(
                 error => { throw `Falha de comunicação com servidor - ${error}`  }
               )
        }   
    }
})