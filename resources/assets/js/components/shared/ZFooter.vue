<i18n>
    {
        "en": {
            "raj": "RAJ Tunisia",
            "join-us": "Join us",
            "partners": "Partners",
            "privacy-and-cookies": "Privacy and cookies",
            "legal-notice": "Legal notice",
            "contact-us": "Contact us"
        },
        "ar": {
            "raj": "راج تونس",
            "join-us": "الالتحاق بنا",
            "partners": "الشركاء",
            "privacy-and-cookies": "السرية والكوكيز",
            "legal-notice": "المعلومات القانونية",
            "contact-us": "الإتصال بنا"
        }
    }
</i18n>

<template>
    <footer id="footer" class="l-footer footer">
        <ul class="footer__menu menu">
            <!--<li>
                <a href="#0" class="menu__king"><p>message: {{ $t('hello') }}</p></a>
            </li>-->
            <li>
                <a href="#0" class="menu__king">{{ $t('raj') }}</a>
            </li>
            <li>
                <a href="#0" class="menu__king">{{ $t('join-us') }}</a>
            </li>
            <li>
                <a href="#0" class="menu__king">{{ $t('partners') }}</a>
            </li>
            <li>
                <a href="#0" class="menu__king">{{ $t('privacy-and-cookies') }}</a>
            </li>
            <li>
                <a href="#0" class="menu__king">{{ $t('legal-notice') }}</a>
            </li>
            <li>
                <a href="#0" class="menu__king">{{ $t('contact-us') }}</a>
            </li>
        </ul>
    </footer>
</template>

<script>
    export default {

    }
</script>
