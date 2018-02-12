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
                :themes="themes.models"
                :uploadUrl="uploadUrl"
                :processUpload="processUpload"
                v-on:resetClaim="reInitClaim"
                v-on:saveClaim="claimSave"/>
    </div>
</template>

<script>

    import axios from 'axios'

    import ZMobile from './../../shared/ZMobileNavigation.vue'
    import ZComplainsBackground from './ZComplainsBackground'
    import ZComplainsForground from './ZComplainsForground'

    import {Municipalities} from './../../../models/Municipalities'

    import {Claimer} from './../../../models/Claimer'
    import {Claims, Claim} from './../../../models/Claims'
    import {Themes} from "../../../models/Themes";
    import {apiConfig} from "../../../api-config";

    export default {
        components: {ZMobile, ZComplainsBackground, ZComplainsForground},
        data() {
            return {
                claimer: new Claimer(),
                claim: new Claim(),
                uploadUrl: 'api/v1/upload',
                processUpload: false,
                municipalities: new Municipalities(),
                themes: new Themes(),
                claimsList: new Claims(),
            }
        },
        methods: {
            claimSave() {
                /*axios(
                    {
                        method: 'POST',
                        url: apiConfig().apiUrl  + 'claimers',
                        data: this.claimer,
                        headers: {
                            'X-CSRF-TOKEN': window.Laravel.csrfToken,
                            'X-Requested-With': 'XMLHttpRequest',
                            'Content-Type': 'application/json',
                            'Access-Control-Allow-Origin': '*',
                        }
                    })
                    .then(response => {
                        console.log(response.data)
                    })
                    .catch(error => {
                        console.log(error.response.data)
                    })*/

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
            this.themes.fetch();
            require('./../../../zaza-ui/splash');
        }
    }

</script>
