<template>
    <div id="content" class="l-content content">
        <z-mobile/>
        <z-complains-background
                :claim="claim"
                :claimsList="claimsList.models"/>

        <z-complains-forground
                :claim="claim"
                :claimer="claimer"
                :municipalities="municipalities.models"
                :uploadUrl="uploadUrl"
                :processUpload="processUpload"
                v-on:resetClaim="reInitClaim"
                v-on:saveClaim="claimSave"/>
    </div>
</template>

<script>

    import ZMobile from './../../shared/ZMobileNavigation.vue'
    import ZComplainsBackground from './ZComplainsBackground'
    import ZComplainsForground from './ZComplainsForground'

    import {Municipalities} from './../../../models/Municipalities'

    import {Claimer} from './../../../models/Claimer'
    import {Claims, Claim} from './../../../models/Claims'

    export default {
        components: {ZMobile, ZComplainsBackground, ZComplainsForground},
        data() {
            return {
                claimer: new Claimer(),
                claim: new Claim(),
                uploadUrl: 'api/v1/upload',
                processUpload: false,
                municipalities: new Municipalities(),
                claimsList: new Claims(),
            }
        },
        methods: {
            claimSave() {
                this.claimer
                    .save().then((response) => {
                    this.claim.claimer_id = this.claimer.id;
                    this.claim
                        .save().then((response) => {
                            this.processUpload = true;
                            this.reInitClaim();
                    }).catch((error) => {
                        console.log(error)
                    })
                }).catch((error) => {
                    console.log(error)
                });
            },
            reInitClaim() {
                this.claimer = new Claimer();
                this.claim = new Claim();
                this.claimsList.fetch();
            }
        },
        mounted() {
            this.claimsList.fetch();
            this.municipalities.fetch();
            require('./../../../zaza-ui/splash');
        }
    }

</script>
