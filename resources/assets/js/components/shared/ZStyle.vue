<template>
    <link :href="cssLink" rel="stylesheet" id="rtl-style" type="text/css">
</template>

<script>
    export default {
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
            },
            cssLink: function () {
                if (this.$i18n.locale === 'ar') {
                    return 'css/app.rtl.css'
                }
                return 'css/app.css'
            }
        },
        watch: {
            locale: function (newLocale) {
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