<template>
    <div class="accordion" v-bind="navElement">
        <button v-on:click="$router.push({name: navElement.routeName})" class="button accordion__trigger" type="button">
                    <span class="button__symbol--square">
                        <svg class="icon icon-camera">
                            <use :href="navElement.icon"></use>
                        </svg>
                    </span>
            <span class="button__label">{{navElement.label}}</span>
        </button>
        <div class="accordion__panel">
            <p>{{navElement.description}}</p>
        </div>
    </div>
</template>

<script>

    export default {
        props: ['navElement'],
        data() {
            return {
                //
            }
        }
    }
</script>
