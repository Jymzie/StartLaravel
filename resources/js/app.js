require('./bootstrap');
import Vue from 'vue'
import Vuetify from 'vuetify'
import Router from './router'
import store from './store'
import App from './template/App';

//ANCHOR SOCKET IO - comment it if not needed
import io from 'socket.io-client';
const socket = io(`${window.location.protocol}//${window.location.hostname}:9090`);
Vue.prototype.$socket = socket;
//NOTE open cmd -> root directory and run -> yarn run socket-server

Vue.use(Vuetify)

Vue.prototype.$url = window.location.origin+'/STR'


const app = new Vue({
    el: '#app',
    store,
    router:Router,
    vuetify: new Vuetify(),
    render: h=>h(App)
});