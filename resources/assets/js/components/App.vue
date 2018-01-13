<template>
    <section id="section" class="l-section section">
        <div id="content" class="l-content content">
            <z-mobile></z-mobile>
            <router-view></router-view>
            <router-view name="splash"></router-view>
        </div>
        <z-footer></z-footer>
    </section>
</template>

<script>
    import ZMobile from './shared/ZMobileNavigation.vue'
    import ZFooter from './shared/ZFooter.vue'

    export default {
        components: {ZMobile, ZFooter},
    }
</script>
