<i18n>
    {
        "en": {
                "logo": "Goulel'hom",
                "presentation-goulelhom-line-1": "Goulel’hom is a project launched by Raj Tunisie with the aim of enhancing participatory democracy and enabling citizens to make decisions for a better tomorrow.",
                "presentation-goulelhom-line-2": "Today, you have the opportunity to express your opinion, expose your problem freely, you can also submit your complaint or your petition in order to reach a solution with public institutions.",
                "complains-title": "Complaints",
                "complains-description": "Here you find a series of complaints classified by categories.",
                "petitions-title": "Petitions",
                "petitions-description": "You can submit a new petition or sign a petition.",
                "events-title": "Events",
                "events-description": "Here is the set of events organized by Goulel’hom.",
                "municipalities-title": "Municipalities",
                "municipalities-description": "This link contains information related to municipalities.",
                "reports-title": "Reports",
                "reports-description": "Here are reports about complaints, petitions and related solutions.",
                "press-title": "Press",
                "press-description": "Press opinions."
        },
        "ar": {
            "logo": "ڨوللهم",
            "presentation-goulelhom-line-1": "ڨوللهم هو مشروع بعث من قبل منظمة راج في إطار دعم الديمقراطية التشاركية وتكريس مبدأ الحوكمة المفتوحة والبيانات المفتوحة وتمكين المواطن من صنع قرارات من أجل غدٍ أفضل.",
            "presentation-goulelhom-line-2": "ڨوللهم تتيح لك اليوم فرصة التعبير عن رأيك عن مشكلتك، تقديم شكوتك أو عريضتك بكل حرية حتى تصل إلى المصالح العمومية بكل موضوعية بغية التوصل إلى حل.",
            "complains-title": "الشكاوى",
            "complains-description": "يمكنك تقديم شكوى تخص الإدارات العمومية من مصالح بلدية أو نقل عمومي. وإن لاحظت تجاوزات أو انتهاكات تمس من البيئة والمحيط أو المصلحة الجماعية بإمكانك التشكي وتقديم أدلة للدعم كصور أو فيديو. يمكنك أيضا تحديد موقع التجاوز على الخريطة.",
            "petitions-title": "العرائض",
            "petitions-description": "يمكنك تقديم عريضة جديدة أو توقيع عريضة ضمن العرائض الموجودة حتى يكون هناك عدد أكبر من الموقعين. بإمكانك أيضا تحميل أدلة لدعم عريضتك بصور أو فيديو.",
            "events-title": "الاحداث",
            "events-description": "تجد هنا مجموعة الأحداث المنظمة من قبل ڨوللهم",
            "municipalities-title": "البلديات",
            "municipalities-description": "يحتوي هذا الرابط على معلومات تتعلق بالبلديات",
            "reports-title": "التقارير",
            "reports-description": "تجد هنا تقارير متعلقة بالشكاوى والعرائض والحلول المتعلقة بها.",
            "press-title": "الصحافة",
            "press-description": "أصداء ڨوللهم وأراء الصحافة"
        }
    }
</i18n>


<template>
    <aside id="aside" class="l-aside aside">
        <nav id="asideNavigation" class="l-navigation navigation">
            <div id="asideNavigationLogotype" class="navigation__logo-type logo-type logo-type--img logo-type--logotypeNegative">
            <h1 class="logo" v-on:click="accordionCollapse">
                    <router-link :to="{name: 'home'}" class="type">
                        {{ $t('logo') }}
                    </router-link>
                </h1>
            </div>
            <button id="toggleEdisaTrigger" class="button button--square" type="button">
                <span class="button__symbol button__symbol--2">
                    <svg class="icon icon-arrow-left">
                        <use xlink:href="/asset/symbol-defs.svg#icon-arrow-left"></use>
                    </svg>
                </span>
                    <span class="button__symbol button__symbol--1">
                    <svg class="icon icon-arrow-right">
                        <use xlink:href="/asset/symbol-defs.svg#icon-arrow-right"></use>
                    </svg>
                </span>
            </button>
        </nav>
        <p class="aside__description">{{ $t('presentation-goulelhom-line-1') }}<br>{{ $t('presentation-goulelhom-line-2') }}</p>
        <div id="accordion" class="aside__accordion">

            <accordion-element v-for="navElement in navBarElements"
                               :key="navElement.id"
                               :navElement="navElement" />
        </div>
    </aside>
</template>

<script>
    import houdini from 'houdinijs'
    import { addClass, hasClass, toggleClass, removeClass } from './../../zaza-ui/helpers'

    import AccordionElement from './components/AccordionElement.vue'

    import {navBarElements} from './../../config/navbar'

    export default {
        components: {AccordionElement},
        data() {
            return {
                navElement: {
                    label: 'test',
                    icon: '/asset/symbol-defs.svg#icon-camera',
                    description: 'test'
                },
                show: true
            }
        },
        computed: {
            locale: function () {
                return this.$i18n.locale
            },
            navBarElements: function () {
                return [
                    {
                        id: 1,
                        icon: '/asset/symbol-defs.svg#icon-camera',
                        label: this.$t('complains-title'),
                        description: this.$t('complains-description'),
                        routeName: 'complains'
                    },
                    {
                        id: 2,
                        icon: '/asset/symbol-defs.svg#icon-pen',
                        label: this.$t('petitions-title'),
                        description: this.$t('petitions-description'),
                        routeName: 'petitions'
                    },
                    {
                        id: 3,
                        icon: '/asset/symbol-defs.svg#icon-calendar',
                        label: this.$t('events-title'),
                        description: this.$t('events-description'),
                        routeName: 'home'
                    },
                    {
                        id: 4,
                        icon: '/asset/symbol-defs.svg#icon-library',
                        label: this.$t('municipalities-title'),
                        description: this.$t('municipalities-description'),
                        routeName: 'municipalities'
                    },
                    {
                        id: 5,
                        icon: '/asset/symbol-defs.svg#icon-files-empty',
                        label: this.$t('reports-title'),
                        description: this.$t('reports-description'),
                        routeName: 'home'
                    },
                    {
                        id: 6,
                        icon: '/asset/symbol-defs.svg#icon-bullhorn',
                        label: this.$t('press-title'),
                        description: this.$t('press-description'),
                        routeName: 'home'
                    },
                ]
            },
        },
        methods: {
            accordionCollapse() {
                const accordions = document.getElementById('accordion');
                const expanded = accordions.querySelector('.accordion--active');
                if (expanded) {
                    removeClass(expanded, 'accordion--active');
                }
            },
        },
        mounted() {
            let width = window.innerWidth
                || document.documentElement.clientWidth
                || document.body.clientWidth;

            if (width > 840) {
                require('./../../zaza-ui/accordion');
            }
            this.accordionCollapse();
            require('../../zaza-ui/aside')
        }
    }
</script>
