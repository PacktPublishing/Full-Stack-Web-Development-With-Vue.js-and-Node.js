import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    //State
    state: {
      count: 0 
    },
    //Getters
    getters:{
        evenorodd: state => state.count % 2 === 0 ? 'even':'odd'
    },
    //Mutations
    mutations:{
        increment(state) {
            state.count++
        },
        decrement(state) {
            state.count--
        }
    },
    //Actions
    actions:{
        increment(context){
            context.commit('increment')
        },
        decrement(context){
            context.commit('decrement')
        }
    }
})