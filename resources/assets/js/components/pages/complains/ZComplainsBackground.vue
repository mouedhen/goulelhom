<template>
        <mapbox
                class="content__background"
                @map-load="mapLoaded"
                @map-click="mapClicked"
                access-token="pk.eyJ1IjoibW91ZWRoZW4iLCJhIjoiY2o1b25ibHdvMDFrbTJxcXRtaWttZ3VqcCJ9.D5l-yqWthlUroyn5GFoY2w"
                :map-options="{
                  style: 'mapbox://styles/mapbox/streets-v9',
                  center: [10.166, 36.8188],
                  zoom: 12
                }"
                :geolocate-control="{
                  show: true,
                  position: 'bottom-right'
                }"
                :scale-control="{
                  show: false,
                  position: 'top-left'
                }"
                :fullscreen-control="{
                  show: false,
                  position: 'top-left'
                }">
        </mapbox>
</template>

<script>
    import Mapbox from 'mapbox-gl-vue';

    export default {
        components: {Mapbox},
        methods: {
            i18nMap(map) {
                map.getStyle().layers.forEach(layer => {
                    if (layer.type === 'symbol' && layer.layout && layer.layout['text-field'] !== undefined) {
                        map.setLayoutProperty(layer.id, 'text-field', '{name_' + this.$i18n.locale + '}')
                    }
                });
            },
            mapLoaded(map) {
                //
            },
            mapClicked(map, e) {
                //
            }
        }
    }
</script>
