<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <img v-for="file in files" :src="file" class="img-rounded vue-image" width="200">
            </div>
        </div>
    </div>
</template>

<script>

    import axios from 'axios'

    export default {
        mounted() {
            this.refresh();
        },
        props: {
            url: {
                type: String
            }
        },
        data() {
            return {
                files: []
            }
        },
        methods: {
            refresh() {
                axios.get(this.url).then(
                    response => {
                        if(response.data) {
                            this.files = response.data
                        }
                    }
                )
            }
        }
    }
</script>