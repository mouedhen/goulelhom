<template>
    <div id="content" class="l-content content">

        <upload action="api/v1/upload"/>

        <image-list url="api/v1/list"/>

    </div>
</template>

<script>
    import Upload from './Uploader'
    import ImageList from './ImageList'
    export default {
        components: {Upload, ImageList}
    }
</script>