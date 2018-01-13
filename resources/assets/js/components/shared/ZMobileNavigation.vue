<i18n>
{
    "en": {
        "logo": "Goulel'hom"
    },
    "ar": {
       "logo": "ڨوللهم"
    }
}
</i18n>


<template>
    <nav id="edisaNavigation" class="l-navigation navigation">
        <button id="toggleAsideTrigger" class="button button--square" type="button">
                <span class="button__symbol button__symbol--1">
                    <svg class="icon icon-menu">
                        <use xlink:href="/asset/symbol-defs.svg#icon-menu"></use>
                    </svg>
                </span>
            <span class="button__symbol button__symbol--2">
                    <svg class="icon icon-cross">
                        <use xlink:href="/asset/symbol-defs.svg#icon-cross"></use>
                    </svg>
                </span>
        </button>
        <div id="edisaNavigationLogotype" class="navigation__logo-type">
            <h1 class="logo">
                <a href="#0" class="type">
                    {{ $t('logo') }}
                </a>
            </h1>
        </div>
    </nav>
</template>

<script>
    export default {
        //
    }
</script>
