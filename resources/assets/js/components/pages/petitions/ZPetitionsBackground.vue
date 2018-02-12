<template>
    <div class="content__background">
        <div class="tnetnoc petition-container" style="overflow-y: scroll;">
            <div class="grid">
                <div class="grid__inner">
                    <div class="cell cell--medium-12 cell--large-6 petitions-cards-container">
                        <div class="grid__inner">

                            <!--
                            <option v-for="municipality in municipalities"
                                :key="municipality.id"
                                :value="municipality['name_'+ $i18n.locale]">{{municipality['name_'+ $i18n.locale]}}</option>
                        -->

                            <div class="cell cell--medium-12 cell--large-6 card" v-for="petition in petitions.models">
                                <div class="FlexEmbed card__thumbnail">
                                    <div class="FlexEmbed-ratio FlexEmbed-ratio--4by3">
                                        <div class="FlexEmbed-content">
                                            <img src="http://via.placeholder.com/379x289?text=card" alt="card">
                                        </div>
                                    </div>
                                </div>
                                <div class="card__description">
                                    <h4 class="description__title">
                                        {{petition.theme}}
                                    </h4>
                                    <p class="description__p">
                                        {{petition.observation}}
                                    </p>
                                </div>
                                <!--
                                <div class="card__footer">
                                    <button class="button button--primary" type="button" data-modal-trigger="card3">
                                        Quod
                                    </button>
                                </div>
                                -->
                            </div>


                        </div>
                    </div>

                    <div class="cell cell--medium-12 cell--large-6 petition">
                        <petition-form
                                :uploadUrl="uploadUrl"
                                :processUpload="processUpload"
                                :municipalities="municipalities.models"
                                :petitions="petitions.models"
                                v-on:petitionSaved="refreshData"/>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import PetitionForm from './PetitionForm.vue'

    import {Municipalities} from './../../../models/Municipalities'
    import {Petitions} from './../../../models/Petitions'

    export default {
        components: {PetitionForm},
        data() {
            return {
                municipalities: new Municipalities(),
                uploadUrl: 'api/v1/upload',
                processUpload: false,
                petitions: new Petitions()
            }
        },
        methods: {
            refreshData() {
                this.petitions.fetch();
                console.log(this.petitions)
            }
        },
        mounted() {
            this.municipalities.fetch();
            console.log(this.municipalities)
            this.petitions.fetch();
            console.log(this.petitions)
        }
    }
</script>
