<template>
    <div id="content" class="l-content content">
        <!--
        <div>Hello</div>
        <div class="countries">
            <div v-for="country in countries.models" :key="country.id">{{country['name_' + $i18n.locale]}}</div>
        </div>
        -->
        <!-- <z-mobile></z-mobile> -->
        <z-complains-background v-on:setLocation="setLocation" />
        <z-complains-forground :claim="claim" v-on:resetClaim="reInitClaim" v-on:saveClaim="claimSave" />
    </div>
</template>

<script>
    import ZComplainsBackground from './ZComplainsBackground'
    import ZComplainsForground from './ZComplainsForground'

    import {Countries} from './../../../models/Countries'
    // import {ClaimsList, Claim} from './../../../models/Claims'
    import {ClaimsList, Claim} from './../../../models/Claims'

    export default {
        components: {ZComplainsBackground, ZComplainsForground},
        data() {
            return {
                claim: new Claim(),
                claimsList: new ClaimsList(),
                countries: new Countries(),
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
            this.countries.fetch();
        }
    }

</script>
