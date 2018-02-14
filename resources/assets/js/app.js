import '@babel/polyfill'
import axios from 'axios'
import Vue from 'vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
import VueI18n from 'vue-i18n'
import VueAnalytics from 'vue-analytics'

import ar from 'vee-validate/dist/locale/ar';
import VeeValidate, { Validator } from 'vee-validate';

import Notifications from 'vue-notification'

import router from './routes'

import ZStyle from './components/shared/ZStyle'
import ZSidebar from './components/shared/ZSidebar'
import App from './components/App.vue'

Vue.use(VueAnalytics, {
    id: 'UA-67496136-3',
    checkDuplicatedScript: true,
    router,
    autoTracking: {
        skipSamePath: true,
        exception: true
    }
});

window.Vue = Vue;
window.axios = axios;

axios.defaults.headers.common = {
    'X-CSRF-TOKEN': window.Laravel.csrfToken,
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
};

Vue.use(VueI18n);
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Vuex);

const i18n = new VueI18n({
    locale: 'ar', // set locale
});

Validator.localize('ar', ar);

Vue.use(VeeValidate);
Vue.use(Notifications);

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


