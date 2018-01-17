<template>
    <div class="locale-switcher">
        <!-- {{ initLocale() }} -->
        <div>
            <a class="locale-link"
               v-for="locale in locales"
               :key="locale.id"
               @click="setLocale(locale)"
               :class="{ 'is-current': locale === activeLocale }"
               href="#">
                {{ getLanguageString(locale) }} |
            </a>
        </div>
    </div>
</template>

<script>

    import Vue from 'vue'
    // Restore locale from cookie, if it was set
    import VueCookie from 'vue-cookie'

    Vue.use(VueCookie);

    const localeStrings = {
        en: "English",
        ar: "عربى",
        fr: "Français"
    };

    Vue.config.lang = VueCookie.get('locale') || 'ar';

    export default {
        props: {
            locales: {
                type: Array,
                default: ['ar']
            },
            showFull: Boolean,
            locLabel: {
                type: String,
                default: ''
            }
        },
        data: function () {
            return {
                activeLocale: Vue.config.lang
            }
        },
        computed: {
            dropdownLbl: function () {
                return this.locLabel ? this.locLabel : this.activeLocale
            }
        },
        methods: {
            setLocale: function (locale) {
                Vue.config.lang = locale;
                this.activeLocale = locale;
                this.$cookie.set('locale', locale);
                this.$i18n.locale = Vue.config.lang;
            },
            getLanguageString: function (locale) {
                return this.showFull ? localeStrings[locale] : locale
            }
        }
    }
</script>