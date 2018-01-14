<template>
    <div id="content" class="l-content content">
        <!-- <z-mobile></z-mobile> -->
        <z-complains-background />
        <z-complains-forground />
    </div>
</template>

<script>
    import ZComplainsBackground from './ZComplainsBackground'
    import ZComplainsForground from './ZComplainsForground'

    export default {
        components: {ZComplainsBackground, ZComplainsForground}
    }

</script>
