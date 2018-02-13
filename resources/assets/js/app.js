

import '@babel/polyfill'
import axios from 'axios'
import Vue from 'vue'

window.Vue = Vue;
window.axios = axios;

axios.defaults.headers.common = {
    'X-CSRF-TOKEN': window.Laravel.csrfToken,
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
};

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n);
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Vuex);

const i18n = new VueI18n({
    locale: 'ar', // set locale
});

import ar from 'vee-validate/dist/locale/ar';
import VeeValidate, { Validator } from 'vee-validate';

// Localize takes the locale object as the second argument (optional) and merges it.
Validator.localize('ar', ar);

import Notifications from 'vue-notification'


Vue.use(VeeValidate);
Vue.use(Notifications);

import router from './routes'

import ZStyle from './components/shared/ZStyle'
import ZSidebar from './components/shared/ZSidebar'
import App from './components/App.vue'


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


