

import '@babel/polyfill'
import axios from 'axios'
import Vue from 'vue'

window.Vue = Vue;
window.axios = axios;

window.axios.defaults.headers.common = {
    'X-CSRF-TOKEN': window.Laravel.csrfToken,
    'X-Requested-With': 'XMLHttpRequest'
};

// window.mapboxgl = require('mapbox-gl');

// mapboxgl.setRTLTextPlugin('https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.1.1/mapbox-gl-rtl-text.js');

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n);
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Vuex);

import router from './routes'

import ZStyle from './components/shared/ZStyle'
import ZSidebar from './components/shared/ZSidebar'
import App from './components/App.vue'

const i18n = new VueI18n({
    locale: 'ar', // set locale
});

import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);

const appStyle = new Vue({
    components: {
        'z-style': ZStyle
    },
    i18n
}).$mount('#styles');

const app = new Vue({
    components: {
        'z-sidebar': ZSidebar,
        'app': App
    },
    router,
    i18n
}).$mount('#main');


