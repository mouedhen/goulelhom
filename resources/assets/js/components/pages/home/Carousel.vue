<i18n>
    {
    "en": {
    "slogan-1-word-1": "We can build the future",
    "slogan-1-word-2": "TOGETHER",

    "slogan-2-word-1": "The true balance of democracy is not only in election funds but in",
    "slogan-2-word-2": "people's consciousness",
    "slogan-2-cite": "Jean-Jacques Rousseau",

    "slogan-3-word-1": "The power of the people is stronger than the people in the",
    "slogan-3-word-2": "Power",
    "slogan-3-cite": "Anonymous",

    "slogan-4-word-1": "No one likes his restrictions even if they are",
    "slogan-4-word-2": "Gold",
    "slogan-4-cite": "Abraham Lincoln"

    },
    "ar": {
    "slogan-1-word-1": "يمكننا أن نبني المستقبل",
    "slogan-1-word-2": "معا",

    "slogan-2-word-1": "رصيد الديمقراطية الحقيقي ليس في صناديق الانتخابات فحسب بل في",
    "slogan-2-word-2": "وعي الناس",
    "slogan-2-cite": "جان جاك روسو",

    "slogan-3-word-1": "قوة الشعب اعظم من قوة الاشخاص الذين في",
    "slogan-3-word-2": "السلطة",
    "slogan-3-cite": "مجهول",

    "slogan-4-word-1": "لا أحد يحب قيوده و لو كانت من",
    "slogan-4-word-2": "ذهب",
    "slogan-4-cite": "ابراهام لنكولن"
    }
    }
</i18n>

<template>
    <div id="carousel" class="tnetnoc carousel">

        <div class="carousel__item">
            <img src="images/smoke3.jpg" alt="Sonio">
            <div class="slogan">
                <blockquote><span class="word">{{ $t('slogan-1-word-1') }}</span><br>
                    <strong class="word">{{ $t('slogan-1-word-2') }}</strong></blockquote>
            </div>
        </div>
        <div class="carousel__item">
            <img src="images/slogan1.jpg" alt="Sonio">
            <div class="slogan">
                <blockquote><span class="word">{{ $t('slogan-2-word-1') }}</span><br>
                    <strong class="word">{{ $t('slogan-2-word-2') }}</strong><br>
                    <cite>-- {{ $t('slogan-2-cite') }} --</cite></blockquote>
            </div>
        </div>
        <div class="carousel__item">
            <img src="images/slogan2.jpg" alt="Sonio">
            <div class="slogan">
                <blockquote><span class="word">{{ $t('slogan-3-word-1') }}</span><br>
                    <strong class="word">{{ $t('slogan-3-word-2') }}</strong><br>
                    <cite>-- {{ $t('slogan-3-cite') }} --</cite></blockquote>
            </div>
        </div>
        <div class="carousel__item">
            <img src="images/slogan3.jpg" alt="Sonio">
            <div class="slogan">
                <blockquote><span class="word">{{ $t('slogan-4-word-1') }}</span><br>
                    <strong class="word">{{ $t('slogan-4-word-2') }}</strong><br>
                    <cite>-- {{ $t('slogan-4-cite') }} --</cite></blockquote>
            </div>
        </div>
    </div>
</template>

<script>
    import anime from 'animejs'
    import Flickity from 'flickity';



    export default {
        data() {
            return {
                preloading: true
            }
        },
        methods: {
            carousel() {
                new Flickity('#carousel', {
                    autoPlay: true,
                    prevNextButtons: false,
                    pageDots: false,
                    wrapAround: true
                });
            },
            animateSlogan() {
                anime({
                    targets: '.slogan .word',
                    scale: [14, 1],
                    opacity: [0, 1],
                    easing: "easeOutCirc",
                    duration: 800,
                    delay: function (el, i) {
                        return 800 * i;
                    }
                });
            },
        },
        mounted() {
            this.carousel();
            this.animateSlogan();
        }
    }

</script>