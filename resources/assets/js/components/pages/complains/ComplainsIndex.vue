<template>
    <div id="content" class="l-content content">
        <!--
        <div>Hello</div>
        <div class="countries">
            <div v-for="country in countries.models" :key="country.id">{{country['name_' + $i18n.locale]}}</div>
        </div>
        -->
        <z-mobile/>
        <z-complains-background v-on:setLocation="setLocation" />
        <z-complains-forground :claim="claim" :municipalities="municipalities.models" v-on:resetClaim="reInitClaim" v-on:saveClaim="claimSave" />
    </div>
</template>

<script>

    import {addClass, hasClass, removeClass} from './../../../zaza-ui/helpers'

    import ZMobile from './../../shared/ZMobileNavigation.vue'
    import ZComplainsBackground from './ZComplainsBackground'
    import ZComplainsForground from './ZComplainsForground'

    import {Countries} from './../../../models/Countries'
    import {Municipalities} from './../../../models/Municipalities'

    import {ClaimsList, Claim} from './../../../models/Claims'

    export default {
        components: {ZMobile, ZComplainsBackground, ZComplainsForground},
        data() {
            return {
                claim: new Claim(),
                claimsList: new ClaimsList(),
                countries: new Countries(),
                municipalities: new Municipalities(),
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
            this.municipalities.fetch();
            // console.log(this.municipalities)
        }
    }

</script>
