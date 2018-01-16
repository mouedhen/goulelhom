<i18n>
{
    "en": {
        "logo": "Goulel'hom"
    },
    "ar": {
       "logo": "ڨوللهم"
    }
}
</i18n>


<template>
    <nav id="edisaNavigation" class="l-navigation navigation">
        <button id="toggleAsideTrigger" class="button button--square" type="button" v-on:click="toggleAside">
                <span class="button__symbol button__symbol--1" >
                    <svg class="icon icon-menu">
                        <use xlink:href="/asset/symbol-defs.svg#icon-menu"></use>
                    </svg>
                </span>
            <span class="button__symbol button__symbol--2">
                    <svg class="icon icon-cross">
                        <use xlink:href="/asset/symbol-defs.svg#icon-cross"></use>
                    </svg>
                </span>
        </button>
        <div id="edisaNavigationLogotype" class="navigation__logo-type logo-type logo-type--img logo-type--logotype">
        <h1 class="logo">
                <router-link :to="{ name: 'home'}" class="type">{{ $t('logo') }}</router-link>
            </h1>
        </div>
    </nav>
</template>

<script>
    import {toggleClass} from './../../zaza-ui/classname';
    export default {
        methods: {
            toggleAside() {
                const niam = document.getElementById('main');
                const toggleAsideTrigger = document.getElementById('toggleAsideTrigger');

                toggleClass(niam, 'main--off-1-aside');
                toggleClass(toggleAsideTrigger, 'button--2');
            }
        },
        mounted() {
        }
    }
</script>
