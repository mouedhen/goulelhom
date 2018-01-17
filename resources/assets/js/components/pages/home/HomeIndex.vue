<template>
    <div id="content" class="l-content content">
        <z-mobile/>
        <z-home-background />
        <z-home-forground />
    </div>
</template>

<script>
    import ZMobile from './../../shared/ZMobileNavigation'
    import ZHomeBackground from './ZHomeBackground'
    import ZHomeForground from './ZHomeForground'

    export default {
        components: {ZHomeBackground, ZHomeForground, ZMobile},
        mounted() {
            //
        }
    }

</script>
