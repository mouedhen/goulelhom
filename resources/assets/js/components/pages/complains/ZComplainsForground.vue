<i18n>
{
    "en": {
        "complains-title": "Complaints",
        "complains-description": "Here you find a series of complaints classified by categories.",
        "name-placeholder": "Your name",
        "phone-placeholder": "Your phone number",
        "municipality-placeholder": "The municipality",
        "subject-placeholder": "The subject",
        "observation-placeholder": "Observations",
        "attach-placeholder": "Attach files",
        "button-submit": "Send",
        "button-reset": "Cancel",
    "dropzone": "Drop files here to upload"
    },
    "ar": {
        "complains-title": "تقديم شكوى",
        "complains-description": "يمكنك تقديم شكوى تخص الإدارات العمومية من مصالح بلدية أو نقل عمومي. وإن لاحظت تجاوزات أو انتهاكات تمس من البيئة والمحيط أو المصلحة الجماعية بإمكانك التشكي وتقديم أدلة للدعم كصور أو فيديو. يمكنك أيضا تحديد موقع التجاوز على الخريطة.",
        "name-placeholder": "الإسم واللقب",
        "phone-placeholder": "رقم الهاتف",
        "municipality-placeholder": "البلدية",
        "subject-placeholder": "موضوع الشكوى",
        "observation-placeholder": "الملاحظات",
        "attach-placeholder": "إرفاق ملفات",
        "button-submit": "إرسال",
        "button-reset": "إلغاء",
    "dropzone": "تحميل الملفات",
    "option-1": "البيئية",
    "option-2": "النقل العمومي",
    "option-3": "السياسة",
    "option-4": "الإدارة"
    }
}
</i18n>
<template>
    <div class="content__foreground">
        <div id="splash" class="foreground__splash foreground__splash--2">
            <nav-splach style="color: #333333"/>

                <div class="grid">
                    <div class="grid__inner">
                        <div class="cell--large-12">
                            <h1 class="form-title">{{ $t('complains-title') }}</h1>
                        </div>

                        <div class="cell cell--medium-8 cell--large-12 form-group">
                                <input type="text" id="name" class="form-group__control"
                                       :placeholder="$t('name-placeholder')"
                                       v-model="claimer.name" name="name">
                            </div>

                            <div class="cell cell--medium-8 cell--large-12 form-group">
                                <input type="text" id="phone" class="form-group__control"
                                       :placeholder="$t('phone-placeholder')"
                                       v-model="claimer.phone_number" name="phone">
                            </div>
                        <div class="cell cell--medium-8 cell--large-12 form-group">

                            <select name="municipality" class="form-group__control" v-model="claim.municipality_id">
                                <option :value="null" disabled>{{$t('municipality-placeholder')}}</option>
                                <option v-for="municipality in municipalities"
                                        :key="municipality.id"
                                        :value="municipality.id">{{municipality['name_'+ $i18n.locale]}}</option>
                            </select>

                        </div>
                        <div class="cell cell--medium-8 cell--large-12 form-group">

                            <select name="municipality" class="form-group__control" v-model="claim.subject_id">
                                <option :value="null" disabled>{{$t('subject-placeholder')}}</option>
                                <option :value="1" disabled>{{$t('option-1')}}</option>
                                <option :value="2" disabled>{{$t('option-2')}}</option>
                                <option :value="3" disabled>{{$t('option-3')}}</option>
                                <option :value="4" disabled>{{$t('option-4')}}</option>
                            </select>

                        </div>
                        <div id="textareaDrop" class="cell cell--medium-8 cell--large-12 form-group">
                            <textarea name="observation" id="observation" rows="2" class="form-group__control"
                                      :placeholder="$t('observation-placeholder')"
                                      v-model="claim.description"></textarea>
                        </div>
                        <div class="cell cell--large-12">

                            <vue-dropzone ref="claimDropzone" id="claimDropzone" :options="dropzoneOptions"/>

                        </div>
                        <div class="cell cell--medium-8 cell--large-12 button-group controls">
                            <button v-on:click="claimSave" class="button button--primary">{{$t('button-submit')}}</button>
                            <button type="reset" v-on:click="reInitClaim" class="button button--secondary">{{$t('button-reset')}}</button>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
    import {addClass, hasClass, removeClass, toggleClass} from './../../../zaza-ui/helpers'
    import NavSplach from './../../shared/components/NavSplach.vue'
    import vue2Dropzone from 'vue2-dropzone'

    export default {
        props: ['claimer', 'claim', 'uploadUrl', 'processUpload', 'municipalities'],
        components: {
            NavSplach,
            vueDropzone: vue2Dropzone
        },
        data() {
            return {

            }
        },
        watch: {
            processUpload: function (newVal, oldVal) {
                if (newVal === true) {
                    this.$refs['claimDropzone'].processQueue();
                }
            }
        },
        computed: {
            dropzoneOptions: function () {
                return {
                    url: this.uploadUrl,
                    thumbnailWidth: 110,
                    thumbnailHeight: 110,
                    maxFilesize: 4,
                    capture: 'camera',
                    AcceptedFiles: ['images/*', 'audio/*', 'video/*', 'application/pdf'],
                    dictDefaultMessage:'Upload files<br>'+ 'إرفاق ملفات',
                    autoProcessQueue: false,
                    addRemoveLinks: true,
                }
            }
        },
        methods: {
            claimSave() {
                this.$emit('saveClaim')
            },
            reInitClaim() {
                this.$emit('resetClaim')
            },
            initialState() {
                const container = document.getElementById('main');
                if (!container.classList.contains('main--off-splash')) {
                    addClass(container, 'main--off-splash');
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
            }
        },
        mounted() {

            let dropzone = this.$refs['claimDropzone'].dropzone;
            dropzone.on("complete", function(file) {
                dropzone.removeFile(file);
                this.processUpload = false;
            });

            let width = window.innerWidth
                || document.documentElement.clientWidth
                || document.body.clientWidth;

            if (width > 840) {
                this.initialState();
            }

            this.splash();
        }
    }
</script>
