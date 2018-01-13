import '@babel/polyfill'
import axios from 'axios'
import Vue from 'vue'

window.Vue = Vue;
window.axios = axios;
// window.mapboxgl = require('mapbox-gl');

mapboxgl.setRTLTextPlugin('https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.1.1/mapbox-gl-rtl-text.js');

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n);
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Vuex);

import router from './routes'

import ZSidebar from './components/shared/ZSidebar.vue'
import App from './components/App.vue'

Vue.component('z-sidebar', ZSidebar);
Vue.component('app', App);

const i18n = new VueI18n({
    locale: 'ar', // set locale
});

const app = new Vue({
    router,
    i18n
}).$mount('#main');
