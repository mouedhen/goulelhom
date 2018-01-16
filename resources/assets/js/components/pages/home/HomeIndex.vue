<template>
    <div id="content" class="l-content content">
        <!-- <z-mobile></z-mobile> -->
        <z-home-background />
        <z-home-forground />
    </div>
</template>

<script>
    import ZHomeBackground from './ZHomeBackground'
    import ZHomeForground from './ZHomeForground'

    export default {
        components: {ZHomeBackground, ZHomeForground},
        mounted() {
            // require('./../../../zaza-ui/index')
        }
    }

</script>
