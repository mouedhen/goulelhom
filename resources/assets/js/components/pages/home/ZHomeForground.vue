<template>
    <div class="content__foreground">
        <div id="splash" class="foreground__splash foreground__splash--p-0">
            <nav-splach></nav-splach>
            <div class="FlexEmbed">
                <div class="FlexEmbed-ratio FlexEmbed-ratio--16by9">
                    <div class="FlexEmbed-content video-wrapper">
                        <iframe src="https://www.youtube.com/embed/FzwZTOtzGrg" frameborder="0" gesture="media"
                                allow="encrypted-media" allowfullscreen></iframe>
                        <!-- <video controls muted>
                            <source src="source/Animation_Goulelhom.mp4" type="video/mp4">
                        </video>-->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {addClass, hasClass, removeClass} from './../../../zaza-ui/helpers'

    import NavSplach from './../../shared/components/NavSplach.vue'

    export default {
        components: {NavSplach},
        methods: {
            initialState() {
                const container = document.getElementById('main');
                if (container.classList.contains('main--off-splash')) {
                    removeClass(container, 'main--off-splash');
                }
            },
            splash() {
                const niam = document.getElementById('main');
                const openSplashTrigger = document.getElementById('openSplashTrigger');
                const closeSplashTrigger = document.getElementById('closeSplashTrigger');
                const openSplashHandler = () => {
                    if (!hasClass(niam, 'main--off-splash')) {
                        addClass(niam, 'main--off-splash');
                    }
                };
                const closeSplashHandler = () => {
                    removeClass(niam, 'main--off-splash');
                };

                openSplashTrigger.addEventListener('click', openSplashHandler);
                closeSplashTrigger.addEventListener('click', closeSplashHandler);

            },
        },
        mounted() {
            this.initialState();
            this.splash();
        }
    }
</script>
