<i18n>
    {
    "en": {
    "slogan-1-word-1": "We can build the future",
    "slogan-1-word-2": "TOGETHER",
    "slogan-2-word-1": "رصيد الديمقراطية الحقيقي ليس في صناديق الانتخابات فحسب بل في",
    "slogan-2-word-2": "وعي الناس",
    "slogan-3-word-1": "The power of the people is stronger than the people in the",
    "slogan-3-word-2": "power",
    "slogan-4-word-1": "لا أحد يحب قيوده و لو كانت من",
    "slogan-4-word-2": "ذهب"
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
        <!--
        -->
        <!--
        <div class="carousel__item">
            <img src="images/cover.jpg" alt="placeholder 2">
        </div>
        <div class="carousel__item">
            <img src="images/smoke3.jpg" alt="placeholder 3">
        </div>
        <div class="carousel__item">
            <img src="images/smoke4.jpg" alt="placeholder 4">
        </div>
        <div class="carousel__item">
            <img src="images/smoke5.jpg" alt="placeholder 5">
        </div>
        -->
    </div>
</template>

<script>
    import anime from 'animejs'

    export default {
        methods: {
            carousel() {
                const carousel = document.getElementById('carousel');
                let slideIndex = 0;
                const showSlides = () => {
                    const slides = carousel.querySelectorAll('.carousel__item');
                    for (const slide of slides) {
                        slide.style.display = 'none';
                    }
                    slideIndex++;
                    if (slideIndex > slides.length) {
                        slideIndex = 1;
                    }
                    slides[slideIndex - 1].style.display = 'block';
                    setTimeout(showSlides, 6000);
                };

                if (carousel !== null) {
                    showSlides();
                }
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