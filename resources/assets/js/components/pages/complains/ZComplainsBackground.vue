<template>
    <v-map :zoom=14 :center="[36.8188, 10.156]" ref="map" class="absolute-map">
        <v-tilelayer
                url='https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibW91ZWRoZW4iLCJhIjoiY2o1b25ibHdvMDFrbTJxcXRtaWttZ3VqcCJ9.D5l-yqWthlUroyn5GFoY2w'/>

        <v-marker-cluster>
            <v-marker v-for="claimMarker in claimsList"
                      :key="claimMarker.id"
                      :lat-lng="[claimMarker.latitude, claimMarker.longitude]">
                <v-popup :content="'<p>' + claimMarker.description + '</h1>'"></v-popup>
            </v-marker>
        </v-marker-cluster>

    </v-map>
</template>

<script>

    import Vue2Leaflet from 'vue2-leaflet';
    import Vue2LeafletMarkerCluster from 'vue2-leaflet-markercluster'

    import L from 'leaflet'

    require('leaflet.locatecontrol');

    export default {
        components: {
            'v-map': Vue2Leaflet.Map,
            'v-tilelayer': Vue2Leaflet.TileLayer,
            'v-marker': Vue2Leaflet.Marker,
            'v-marker-cluster': Vue2LeafletMarkerCluster,
            'v-popup': Vue2Leaflet.Popup
        },
        props: ['claim', 'claimsList'],
        data() {
            return {
                // claimsList: new Claims(),
            }
        },
        methods: {},
        mounted() {


            let that = this;
            let position = [36.8188, 10.166];

            that.claim.latitude = position[0];
            that.claim.longitude = position[1];

            let map = this.$refs.map.mapObject;

            let circle = L.circle(position, 1000);
            let marker = new L.marker(position, {draggable: true})


            marker.on('dragstart', function (event) {
                circle.setRadius(0)
            });

            marker.on('dragend', function (event) {
                circle.setLatLng(event.target.getLatLng()).setRadius(1000);

                position = [event.target.getLatLng().lat, event.target.getLatLng().lng];
                that.claim.latitude = position[0];
                that.claim.longitude = position[1];
            });

            let lc = L.control.locate({
                onLocationError: function (err, control) {
                    marker.addTo(map);
                    circle.addTo(map);

                    that.claim.latitude = position[0];
                    that.claim.longitude = position[1];
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

            map.on('locationfound', layer => {

                marker.setLatLng(layer.latlng);
                circle.setLatLng(layer.latlng);

                map.flyTo(layer.latlng);

                marker.addTo(map);
                circle.addTo(map);

                position = [layer.latlng.lat, layer.latlng.lng];
                that.claim.latitude = position[0];
                that.claim.longitude = position[1];
            });

            map.on('click', function (event) {
                marker.setLatLng(event.latlng);
                circle.setLatLng(event.latlng).setRadius(1000);

                position = [event.latlng.lat, event.latlng.lng];
                that.claim.latitude = position[0];
                that.claim.longitude = position[1];
            });

            lc.start();
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
