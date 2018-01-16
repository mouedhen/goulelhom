<template>
    <section id="section" class="l-section section">
        <router-view/>
        <!-- <div id="content" class="l-content content">
            <z-mobile></z-mobile>
            <router-view/>
            <router-view name="splash"/>
        </div>
        --->
        <z-footer/>
    </section>
</template>

<script>
    import ZMobile from './shared/ZMobileNavigation.vue'
    import ZFooter from './shared/ZFooter.vue'

    export default {
        components: {ZMobile, ZFooter},
        mounted() {
            // require('./../zaza-ui/splash')
        }
    }
</script>
