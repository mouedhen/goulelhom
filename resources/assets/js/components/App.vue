<template>
    <section v-if="show" id="section" class="l-section section">
        <notifications group="foo" position="top center" />
        <router-view/>
        <z-footer/>
    </section>
</template>

<script>
    import ZMobile from './shared/ZMobileNavigation.vue'
    import ZFooter from './shared/ZFooter.vue'

    export default {
        components: {ZMobile, ZFooter},
        data() {
            return {
                show: true
            }
        },
        mounted() {
            //
        },
        computed: {
            locale: function () {
                return this.$i18n.locale
            }
        },
        watch: {
            locale: function (newLocale) {
                if (newLocale === 'ar') {
                    document.dir = 'rtl'
                } else {
                    document.dir = 'ltr'
                }
                document.lang = newLocale
                // document.getElementById('ltr-style').disabled  = false;
                // document.getElementById('rtl-style').disabled = false;
                // document.getElementsByTagName('head')[0].getElementById('main-style').href='css/app.rtl.css';
                // this.rerender()
                // <link href="css/app.rtl.css" rel="stylesheet" id="rtl-style" type="text/css">
            }
        },
        methods: {
            rerender(){
                this.show = false
                this.$nextTick(() => {
                    this.show = true
                    console.log('re-render start')
                    this.$nextTick(() => {
                        console.log('re-render end')
                    })
                })
            }
        },
    }
</script>
