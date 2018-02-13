<template>
    <div>
        <h4>{{ claim.theme['name_'+ $i18n.locale] }}</h4>
        <small>{{ claim.municipality['name_'+ $i18n.locale] }}</small>
        <div>
            <img
            v-if="claim.cover !== null" 
            :src="assetsBaseUrl + claim.cover.url" :alt="claim.subject" style="max-width: 200px; max-height: 200px">
            <p>{{ claim.description }}</p>
        </div>
    </div>
</template>
<script>
    import {apiConfig} from "../../../api-config";

    export default {
        props: ['claim'],
        data() {
            return {
                assetsBaseUrl: apiConfig().baseUrl
            }
        },
        
    }
</script>