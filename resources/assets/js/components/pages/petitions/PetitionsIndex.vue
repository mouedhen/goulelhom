<template>
    <div id="content" class="l-content content">
        <z-mobile />
        <z-petitions-background />
        <z-petitions-forground
                :uploadUrl="uploadUrl"
                :processUpload="processUpload"
                :municipalities="municipalities.models" />
    </div>
</template>

<script>
    import ZMobile from './../../shared/ZMobileNavigation'
    import ZPetitionsBackground from './ZPetitionsBackground'
    import ZPetitionsForground from './ZPetitionsForground'

    import {Municipalities} from './../../../models/Municipalities'

    export default {
        components: {ZPetitionsBackground, ZPetitionsForground, ZMobile},
        data() {
            return {
                municipalities: new Municipalities(),
                uploadUrl: 'api/v1/upload',
                processUpload: false,
            }
        },
        mounted() {
            this.municipalities.fetch();
        }
    }

</script>
