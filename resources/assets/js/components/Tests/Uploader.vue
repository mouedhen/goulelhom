<template>
    <div id="dropzone">
        <div class="title m-b-md">
            Drop it like it's hot!
        </div>

        <dropzone ref="myVueDropzone" id="myVueDropzone" :options="dropzoneOptions" v-on:vdropzone-success="showSuccess"/>

    </div>
</template>

<script>
    import Dropzone from 'vue2-dropzone'
    // import 'vue2-dropzone/dist/vue2Dropzone.css'

    export default {
        components: {
            Dropzone
        },
        data() {
            return {
                dropzoneOptions: {
                    url: this.action,
                    thumbnailWidth: 50,
                    thumbnailHeight: 50,
                    // maxFilesize: 0.5,
                    headers: { "My-Awesome-Header": "header value" }
                }
            }
        },
        props: {
            action: {
                type: String
            }
        },
        methods: {
            showSuccess(file) {
                console.log('File uploaded')
            }
        }
    }
</script>