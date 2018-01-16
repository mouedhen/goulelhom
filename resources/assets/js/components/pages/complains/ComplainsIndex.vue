<template>
    <div id="content" class="l-content content">
        <!--
        <div>Hello</div>
        <div class="countries">
            <div v-for="country in countries.models" :key="country.id">{{country['name_' + $i18n.locale]}}</div>
        </div>
        -->
        <z-mobile/>
        <z-complains-background :claim="claim" v-on:setLocation="setLocation"/>
        <z-complains-forground
                :claim="claim"
                :claimer="claimer"
                :municipalities="municipalities.models"
                :uploadUrl="uploadUrl"
                v-on:resetClaim="reInitClaim"
                v-on:saveClaim="claimSave"/>
    </div>
</template>

<script>

    import ZMobile from './../../shared/ZMobileNavigation.vue'
    import ZComplainsBackground from './ZComplainsBackground'
    import ZComplainsForground from './ZComplainsForground'

    import {Countries} from './../../../models/Countries'
    import {Municipalities} from './../../../models/Municipalities'

    import {Claimer} from './../../../models/Claimer'
    import {ClaimsList, Claim} from './../../../models/Claims'

    export default {
        components: {ZMobile, ZComplainsBackground, ZComplainsForground},
        data() {
            return {
                claimer: new Claimer(),
                claim: new Claim(),
                uploadUrl: 'api/v1/upload',
                claimsList: new ClaimsList(),
                municipalities: new Municipalities(),
            }
        },
        methods: {
            claimSave() {

                this.claimer
                    .save().then((response) => {
                    this.claim.claimer_id = this.claimer.id;
                    this.claim
                        .save().then((response) => {
                        console.log(this.claim)
                    }).catch((error) => {
                        console.log(error)
                    })

                }).catch((error) => {
                    console.log(error)
                });
            },
            reInitClaim() {
                this.claim = new Claim()
            },
            setLocation(location) {
                console.log(location)
            }
        },
        mounted() {
            this.municipalities.fetch();
            // console.log(this.municipalities)
        }
    }

</script>
