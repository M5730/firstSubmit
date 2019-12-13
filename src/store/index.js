import Vue from 'vue'
import Vuex from 'vuex'
import { stat } from 'fs'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        totalNum: 1
    },
   
    mutations: {
        addFun(state) {
            state.totalNum = state.totalNum + 2
        },
        deleteFun(state) {
            state.totalNum = state.totalNum - 1;
        }
    },
    actions: {
        add(content) {
            content.commit('addFun')
        },
        delete(content) {
            content.commit('deleteFun')
        }
    }
})

export default store