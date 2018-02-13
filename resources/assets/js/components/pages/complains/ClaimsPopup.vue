<template>
    <div>
        <h4>{{ claim.subject }}</h4>
        <small>{{ claim.claimer.name }}</small>
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