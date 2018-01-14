<template>
    <div class="content__background">
        <div class="tnetnoc petition-container">
            <div class="grid">
                <div class="grid__inner">
                    <div class="cell cell--medium-12 cell--large-6 petitions-cards-container">
                        <div class="grid__inner">
                            <div class="cell cell--medium-12 cell--large-12 hotspot">
                                <div class="FlexEmbed hotspot__thumbnail">
                                    <div class="FlexEmbed-ratio FlexEmbed-ratio--16by9">
                                        <div class="FlexEmbed-content">
                                            <img src="http://via.placeholder.com/379x289?text=card" alt="card">
                                        </div>
                                    </div>
                                </div>
                                <div class="hotspot__description">
                                    <h4 class="description__title">
                                        Iis sapientiam statuerimus accepimus perfecta.
                                    </h4>
                                    <p class="description__p">
                                        Ex exemplis narravimus primordiis utinam Bellona narravimus forte exitium saeviens
                                        iuge consurgunt supra et ex.
                                    </p>
                                    <div class="hotspot__footer">
                                        <a href="#0" class="button button--primary">
                                            Adnexa
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="cell cell--medium-12 cell--large-6 card">
                                <div class="FlexEmbed card__thumbnail">
                                    <div class="FlexEmbed-ratio FlexEmbed-ratio--4by3">
                                        <div class="FlexEmbed-content">
                                            <img src="http://via.placeholder.com/379x289?text=card" alt="card">
                                        </div>
                                    </div>
                                </div>
                                <div class="card__description">
                                    <h4 class="description__title">
                                        Manicis perduceret vias fluminis vias.
                                    </h4>
                                    <p class="description__p">
                                        Et ex vero nobilis quae punico conmilitio sospitales abstractum vel redirent illius
                                        abstractum consumpsit mors.
                                    </p>
                                </div>
                                <div class="card__footer">
                                    <button class="button button--primary" type="button" data-modal-trigger="card3">
                                        Quod
                                    </button>
                                </div>
                            </div>
                            <div class="cell cell--medium-12 cell--large-6 card">
                                <div class="FlexEmbed card__thumbnail">
                                    <div class="FlexEmbed-ratio FlexEmbed-ratio--4by3">
                                        <div class="FlexEmbed-content">
                                            <img src="http://via.placeholder.com/379x289?text=card" alt="card">
                                        </div>
                                    </div>
                                </div>
                                <div class="card__description">
                                    <h4 class="description__title">
                                        Manicis perduceret vias fluminis vias.
                                    </h4>
                                    <p class="description__p">
                                        Et ex vero nobilis quae punico conmilitio sospitales abstractum vel redirent illius
                                        abstractum consumpsit mors.
                                    </p>
                                </div>
                                <div class="card__footer">
                                    <button class="button button--primary" type="button" data-modal-trigger="card3">
                                        Quod
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="cell cell--medium-12 cell--large-6 petition">
                        <petition-form/>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import PetitionForm from './PetitionForm.vue'

    export default {
        components: {PetitionForm}
    }
</script>
