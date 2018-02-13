<template>
    <div class="display-in-block mlr35">
        <svg :id="id" class="circle-stat" viewBox="0 0 110 110" width="110" height="110" xmlns="http://www.w3.org/2000/svg" v-on:click.prevent="test" :stroke-dasharray="strokeValue + ' 330'" :stroke-dashoffset="strokeValue">
            <g>
                <ellipse ry="50" rx="50" id="svg_1" cy="52" cx="52.5" stroke-width="3" :stroke="color" fill="#fff" stroke-linecap="round" ></ellipse>
                <text  font-size="14" x="50%" y="60%" class="title" text-anchor="middle" stroke-width="0" stroke="#000" fill="#000000">{{title}}</text>
                <text font-size="24" x="50%" y="40%" text-anchor="middle">{{percentage.toFixed(2)}}%</text>
            </g>
        </svg>
    </div>
</template>

<script>
    import anime from 'animejs'
    export default {
        props: ["percentage", "color", "title", "id"],
        data() {
            return {
                "strokeValue": null
            }
        },
        methods: {
            calculateStrokeValue: function(precentage) {
                this.strokeValue = 330 * ((100 - precentage) / 100);
            },
            test: function() {
                anime({
                    targets: `#${this.id} ellipse`,
                    strokeDashoffset: [anime.setDashoffset, this.strokeValue],
                    easing: "easeInQuad",
                    duration: 2500,
                    delay: function(el, i) {
                        return i * 250;
                    },
                    direction: "both",
                    loop: false
                });
            }
        },
        created: function() {
            this.calculateStrokeValue(this.percentage);
        },
        mounted: function() {
            this.test();
        }
    }
</script>