<template>
    <div class="content__background">
        <div class="tnetnoc petition-container" style="overflow-y: scroll">
            <div class="grid">
                <div class="grid__inner">

                    <div class="cell cell--medium-4 cell--large-3 card" v-for="municipality in municipalities.models">
                        <div class="FlexEmbed card__thumbnail" style="height: 80%">
                            <div class="FlexEmbed-ratio FlexEmbed-ratio--4by3">
                                <div class="FlexEmbed-content">
                                    <img v-if="municipality.cover === null" src="/images/tunisia-flag.jpg" class="image">
                                    <img v-if="municipality.cover !== null" :src="assetsBaseUrl + municipality.cover.url">
                                </div>
                            </div>
                        </div>
                        <div class="card__description">
                            <h4 class="description__title">
                                {{municipality['name_'+ $i18n.locale]}}
                            </h4>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {Municipalities} from "../../../models/Municipalities";
    import {apiConfig} from "../../../api-config";

    export default {
        data() {
            return {
                assetsBaseUrl: apiConfig().baseUrl,
                municipalities: new Municipalities(),
            }
        },
        mounted() {
            this.municipalities.fetch();
        }
    }
</script>
