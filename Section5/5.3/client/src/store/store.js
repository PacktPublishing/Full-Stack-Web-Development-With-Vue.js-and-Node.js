import Vue from 'vue'
import Vuex from 'vuex'
import Api from '@/services/Api'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    state:{
        token: null,
        user: null,
        isUserLoggedIn: false,
        songs: null
    },
    mutations: {
        setToken ( state, token) {
            state.token = token
            if(state.token) {
                state.isUserLoggedIn= true
            } else{
                state.isUserLoggedIn= false
            }
        },
        setUser (state, user) {
            state.user = user
        },
        setAllSongs (state, songs) {
            state.songs = songs.data
        }
    },
    actions: {
        setToken ({ commit }, token) {
            commit('setToken', token)
        },
        setUser ({ commit }, user) {
            commit('setUser', user)
        },
        getAllSongs({ commit }) {
            return new Promise((resolve, reject) => {
                Api.get('songs').then(response => {
                    commit('setAllSongs', response)
                    resolve(response)
                }, error => {
                    reject(error)
                })
            })
        }
    }
})