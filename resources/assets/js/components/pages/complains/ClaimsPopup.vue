<template>
    <div>
        <h4>{{ claim.subject }}</h4>
        <small>{{ claim.claimer.name }}</small>
        <div>
            <img height="200"
            v-if="claim.cover !== null" 
            :src="assetsBaseUrl + claim.cover.url" :alt="claim.subject">
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