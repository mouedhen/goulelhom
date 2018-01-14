<template>
    <div id="content" class="l-content content">
        <!-- <z-mobile></z-mobile> -->
        <z-petitions-background />
        <z-petitions-forground />
    </div>
</template>

<script>
    import ZPetitionsBackground from './ZPetitionsBackground'
    import ZPetitionsForground from './ZPetitionsForground'

    export default {
        components: {ZPetitionsBackground, ZPetitionsForground}
    }

</script>
