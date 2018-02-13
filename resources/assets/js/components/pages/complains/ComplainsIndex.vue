<template>
    <div id="content" class="l-content content">
        <z-mobile/>
        <z-complains-background
                :claim="claim"
                :claimsList="claimsList.models"/>

        <z-complains-forground
                :claim="claim"
                :claimer="claimer"
                :claims="claimsList.models"
                :municipalities="municipalities.models"
                :themes="themes.models"
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
    import {Themes} from "../../../models/Themes";
    import {apiConfig} from "../../../api-config";

    export default {
        components: {ZMobile, ZComplainsBackground, ZComplainsForground},
        data() {
            return {
                claimer: new Claimer(),
                claim: new Claim(),
                uploadUrl: apiConfig().apiUrl + 'claims/upload',
                processUpload: false,
                municipalities: new Municipalities(),
                themes: new Themes(),
                claimsList: new Claims(),
            }
        },
        methods: {
            claimSave() {
                this.claimer
                    .save().then((response) => {
                    this.claim.claimer_id = this.claimer.id;
                    this.claim.save()
                        .then((response) => {
                            this.processUpload = this.claim.id;
                            this.reInitClaim();
                            this.$notify({
                                group: 'foo',
                                title: 'Succès',
                                text: 'Votre demande a été enregistrée avec succès!',
                                type: 'success'
                            });
                        }).catch((error) => {
                        this.$notify({
                            group: 'foo',
                            title: 'Erreur',
                            text: 'Merci de vérifier vos paramètres...',
                            type: 'error'
                        });
                    })
                }).catch((error) => {
                    this.$notify({
                        group: 'foo',
                        title: 'Erreur',
                        text: 'Merci de vérifier vos paramètres...',
                        type: 'error'
                    });
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
