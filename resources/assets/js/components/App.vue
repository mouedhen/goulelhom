<template>
    <section id="section" class="l-section section">
        <router-view/>
        <z-footer/>
    </section>
</template>

<script>
    import ZMobile from './shared/ZMobileNavigation.vue'
    import ZFooter from './shared/ZFooter.vue'

    export default {
        components: {ZMobile, ZFooter},

        mounted() {
            //
        }
    }
</script>
