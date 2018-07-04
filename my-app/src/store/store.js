import Vue from 'vue'
import Vuex from 'vuex'
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
        // Get data from server and send that to mutations to mutate the current state
    }
})