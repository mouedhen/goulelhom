<template>
    <v-map :zoom=13 :center="[36.8188, 10.156]" class="absolute-map">
        <v-tilelayer url='https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibW91ZWRoZW4iLCJhIjoiY2o1b25ibHdvMDFrbTJxcXRtaWttZ3VqcCJ9.D5l-yqWthlUroyn5GFoY2w'></v-tilelayer>
        <v-marker :lat-lng="[36.8188, 10.166]"></v-marker>
    </v-map>
</template>

<script>

    import Vue2Leaflet from 'vue2-leaflet';

    export default {
        components: {
            'v-map': Vue2Leaflet.Map,
            'v-tilelayer' :Vue2Leaflet.TileLayer,
            'v-marker': Vue2Leaflet.Marker,
        },
        methods: {}
    }
</script>

<style>
    .absolute-map {
        position: absolute;
        height: 100vh;
        width: 100vw;
    }
</style>
