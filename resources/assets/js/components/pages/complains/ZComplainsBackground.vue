<template>
    <v-map :zoom=14 :center="[36.8188, 10.156]" ref="map" class="absolute-map">
        <v-tilelayer
                url='https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibW91ZWRoZW4iLCJhIjoiY2o1b25ibHdvMDFrbTJxcXRtaWttZ3VqcCJ9.D5l-yqWthlUroyn5GFoY2w'/>
        <!-- <v-marker :lat-lng="[36.8188, 10.166]"/> -->
    </v-map>
</template>

<script>

    import Vue2Leaflet from 'vue2-leaflet';
    import L from 'leaflet'

    require('leaflet.locatecontrol');

    export default {
        components: {
            'v-map': Vue2Leaflet.Map,
            'v-tilelayer': Vue2Leaflet.TileLayer,
            'v-marker': Vue2Leaflet.Marker,
        },
        props: ['claim',],
        methods: {},
        mounted() {
            let that = this;
            let position = [36.8188, 10.166];

            that.claim.latitude = position[0];
            that.claim.longitude = position[1];

            let map = this.$refs.map.mapObject;
            let lc = L.control.locate({
                onLocationError: function (err, control) {
                    // alert(err);
                },
                setView: true,
                flyTo: true,
                cacheLocation: true,
                maxZoom: 14,
                drawCircle: false,
                locateOptions: {
                    enableHighAccuracy: true
                }
            }).addTo(map);

            let circle = L.circle(position, 1000);
            let marker = new L.marker(position, {draggable: true});

            map.on('locationfound', layer => {
                position = layer.latlng;
                marker.setLatLng(position);
                circle.setLatLng(position);

                marker.addTo(map);
                circle.addTo(map);

                that.claim.latitude = position[0];
                that.claim.longitude = position[1];
            });

            map.on('locationerror', error => {
                marker.addTo(map);
                circle.addTo(map);
            });

            lc.start();

            marker.on('dragstart', function (event) {
                circle.setRadius(0)
            });

            marker.on('dragend', function (event) {
                position = event.target.getLatLng();
                circle.setLatLng(position).setRadius(1000);

                that.claim.latitude = position[0];
                that.claim.longitude = position[1];
            })
        }
    }
</script>

<style>
    .absolute-map {
        position: absolute;
        height: 100vh;
        width: 100vw;
    }
</style>
