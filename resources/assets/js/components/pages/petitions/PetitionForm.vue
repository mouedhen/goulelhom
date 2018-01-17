<i18n>
    {
    "en": {
    "complains-title": "Petitions",
    "complains-description": "Here you find a series of complaints classified by categories.",
    "name-placeholder": "Your name",
    "phone-placeholder": "Your email",
    "municipality-placeholder": "The municipality",
    "subject-placeholder": "The subject",
    "observation-placeholder": "Observations",
    "attach-placeholder": "Attach files",
    "button-submit": "Send",
    "button-reset": "Cancel",
    "honor-placeholder": "I declare and certify the validity of the information provided above",
    "dropzone": "Drop files here to upload",

    "option-1": "environment",
    "option-2": "public transport",
    "option-3": "politic",
    "option-4": "administration"
    },
    "ar": {
    "complains-title": "العرائض",
    "complains-description": "يمكنك تقديم شكوى تخص الإدارات العمومية من مصالح بلدية أو نقل عمومي. وإن لاحظت تجاوزات أو انتهاكات تمس من البيئة والمحيط أو المصلحة الجماعية بإمكانك التشكي وتقديم أدلة للدعم كصور أو فيديو. يمكنك أيضا تحديد موقع التجاوز على الخريطة.",
    "name-placeholder": "الإسم واللقب",
    "phone-placeholder": "بريدك الالكتروني",
    "municipality-placeholder": "البلدية",
    "subject-placeholder": "موضوع العريضة",
    "observation-placeholder": "الملاحظات",
    "attach-placeholder": "إرفاق ملفات",
    "button-submit": "إرسال",
    "button-reset": "إلغاء",
    "honor-placeholder": "أصرح وأشهد بصحة المعلومات المقدمة أعلاه",
    "dropzone": "تحميل الملفات",
    "option-1": "البيئية",
    "option-2": "النقل العمومي",
    "option-3": "السياسة",
    "option-4": "الإدارة"
    }
    }
</i18n>
<template>
    <form action="/petitions" enctype="multipart/form-data" method="get">
        <div class="cell--large-12">
            <h1 class="form-title">{{ $t('complains-title') }}</h1>
        </div>

        <div class="form-group">
            <input type="text" id="name" class="form-group__control"
                   :placeholder="$t('name-placeholder')"
                   v-model="petition.claimer"
                   name="name">
        </div>

        <div class="form-group">
            <input type="text" id="phone" class="form-group__control"
                   :placeholder="$t('phone-placeholder')"
                   v-model="petition.claimer_mail"
                   name="phone">
        </div>
        <div class="form-group">

            <select name="municipality"
                    v-model="petition.municipality"
                    class="form-group__control">
                <option :value="''" selected disabled>{{$t('municipality-placeholder')}}</option>
                <option v-for="municipality in municipalities"
                        :key="municipality.id"
                        :value="municipality['name_'+ $i18n.locale]">{{municipality['name_'+ $i18n.locale]}}</option>
            </select>

        </div>
        <div class="form-group">

            <select name="municipality"
                    v-model="petition.theme"
                    class="form-group__control">
                <option :value="''" selected disabled>{{$t('subject-placeholder')}}</option>
                <option :value="$t('option-1')">{{$t('option-1')}}</option>
                <option :value="$t('option-2')">{{$t('option-2')}}</option>
                <option :value="$t('option-3')">{{$t('option-3')}}</option>
                <option :value="$t('option-4')">{{$t('option-4')}}</option>
            </select>

        </div>
        <div id="textareaDrop" class="form-group">
            <textarea name="observation"
                      v-model="petition.observation"
                      id="observation" rows="2" class="form-group__control"
                      :placeholder="$t('observation-placeholder')"
            ></textarea>
        </div>
        <div class="cell cell--large-12">

            <vue-dropzone ref="petitionsDropzone" id="claimDropzone" :options="dropzoneOptions"/>

        </div>

        <div class="form-group">
            <input type="checkbox" id="subscribeNews" name="subscribe" value="newsletter">
            <label for="subscribeNews">{{$t('honor-placeholder')}}</label>
        </div>
        <div class="button-group controls">
            <button class="button button--primary" v-on:click="submitPetition">{{$t('button-submit')}}</button>
            <button type="reset" class="button button--secondary">{{$t('button-reset')}}</button>
        </div>
    </form>
</template>

<script>
    import vue2Dropzone from 'vue2-dropzone'
    import {Petition} from './../../../models/Petitions'

    export default {
        props: ['municipalities', 'uploadUrl'],
        components: {
            vueDropzone: vue2Dropzone
        },
        data() {
            return {
                petition: new Petition()
            }
        },
        methods: {
            submitPetition() {
                this.petition.save();
                this.$emit('petitionSaved')
            }
        },
        computed: {
            dropzoneOptions: function () {
                return {
                    url: 'api/v1/upload',
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
        mounted() {
            let dropzone = this.$refs['petitionsDropzone'].dropzone;
            dropzone.on("complete", function(file) {
                dropzone.removeFile(file);
                this.processUpload = false;
            });
        }
    }
</script>