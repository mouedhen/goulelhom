<template>
    <div id="content" class="l-content content">
        <z-mobile />
        <z-petitions-background />
    </div>
</template>

<script>
    import ZMobile from './../../shared/ZMobileNavigation'
    import ZPetitionsBackground from './ZMunicipalitiesBackground'

    export default {
        components: {ZPetitionsBackground, ZMobile},
    }

</script>
