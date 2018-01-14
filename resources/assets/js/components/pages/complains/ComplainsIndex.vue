<template>
    <div id="content" class="l-content content">
        <!-- <z-mobile></z-mobile> -->
        <z-complains-background v-on:setLocation="setLocation" />
        <z-complains-forground :claim="claim" v-on:resetClaim="reInitClaim" v-on:saveClaim="claimSave" />
    </div>
</template>

<script>
    import ZComplainsBackground from './ZComplainsBackground'
    import ZComplainsForground from './ZComplainsForground'

    import {ClaimsList, Claim} from './../../../models/Claims'

    export default {
        components: {ZComplainsBackground, ZComplainsForground},
        data() {
            return {
                claim: new Claim(),
                claimsList: new ClaimsList()
            }
        },
        methods: {
            claimSave() {
                this.claim
                    .save().then((response) => {
                    console.log(response)
                }).catch((error) => {
                    console.log(error)
                })
            },
            reInitClaim() {
                this.claim = new Claim()
            },
            setLocation(location) {
                console.log(location)
            }
        },
        mounted() {
            this.claimsList.fetch();
        }
    }

</script>
