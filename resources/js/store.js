import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        session: false,
        status: null,
        credentials: {}
    },
    actions:{
        login(mutate,payload){
            mutate.commit('login',payload)
        },
        logout(mutate){
            mutate.commit('logout')
        },
        setStatusCode(mutate, params){
            mutate.commit('setStatusCode',params)
        }
    },
    mutations:{
        login(state,payload){
            state.session= true
            state.status = null
            state.credentials = payload
        },

        logout(state){
            state.session = false
            state.credentials = {}
        },
        setStatusCode(state, params){
            state.status = params
        }
    },
    getters:{},
    plugins: [createPersistedState({key:'START'})]
});