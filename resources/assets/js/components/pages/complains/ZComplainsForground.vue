<i18n src='./../../../i18n/locales.json'/>
<template>
    <div class="content__foreground scroll-y">
        <div id="splash" class="foreground__splash foreground__splash--2">
            <nav-splach style="color: #333333"/>
            <div class="grid ">
                <div class="grid__inner">
                    <div class="cell--large-12">
                        <h1 class="form-title">{{ $t('complains-title') }}</h1>
                        <div style="text-align: center" v-if="stepOne">

                            <circular-stats v-for="i in statLenght"
                                            :key="i"
                                            :percentage="(themes[i-1].claims_count / claimsLenght) * 100"
                                            :color="themes[i-1].color" :title="themes[i-1]['name_'+ $i18n.locale]"
                                            :id="'stat' + themes[i-1].id"/>
                        </div>
                        <p>{{ $t('complain_form_description') }}</p>
                    </div>

                    <div class="cell cell--medium-8 cell--large-12" v-if="stepOne">
                        <div class="form-group">
                            <input type="text" id="name"
                                   :class="{'input': true, 'is-danger': errors.has('name'), 'form-group__control': true }"
                                   :placeholder="$t('name-placeholder')"
                                   v-validate="'required'"
                                   v-model="claimer.name" name="name">
                            <small v-show="errors.has('name')" style="color: red">{{ $t('required_field') }}</small>
                        </div>
                        <div class="form-group">
                            <input type="text" id="phone" class="form-group__control"
                                   :placeholder="$t('phone-placeholder')"
                                   data-inputmask="'mask': '99 999 999'"
                                   v-validate="'required'"
                                   v-model="claimer.phone_number" name="phone" dir="ltr"
                                   :style="stylePlaceholder">
                            <small v-show="errors.has('phone')" style="color: red">{{ $t('required_field') }}</small>
                        </div>
                        <div class="form-group">
                            <select name="municipality" class="form-group__control"
                                    v-validate="'required'"
                                    v-model="claim.municipality_id">
                                <option :value="null" disabled>{{$t('municipality-placeholder')}}</option>
                                <option v-for="municipality in municipalities"
                                        :key="municipality.id"
                                        :value="municipality.id">{{municipality['name_'+ $i18n.locale]}}
                                </option>
                            </select>
                            <small v-show="errors.has('municipality')" style="color: red">{{ $t('required_field') }}
                            </small>
                        </div>
                        <div class="form-group">
                            <select name="theme" class="form-group__control"
                                    v-validate="'required'"
                                    v-model="claim.theme_id">
                                <option :value="null" disabled>{{$t('subject-placeholder')}}</option>
                                <option v-for="theme in themes"
                                        :key="theme.id"
                                        :value="theme.id">{{theme['name_'+ $i18n.locale]}}
                                </option>
                            </select>
                            <small v-show="errors.has('theme')" style="color: red">{{ $t('required_field') }}</small>
                        </div>
                        <div class="button-group controls">
                            <button v-on:click="claimNext" class="button button--secondary">{{$t('button-next')}}
                            </button>
                            <button type="reset" v-on:click="reInitClaim" class="button button--secondary">
                                {{$t('button-reset')}}
                            </button>
                        </div>
                    </div>

                    <div class="cell cell--medium-8 cell--large-12" v-if="stepTwo">
                        <div id="textareaDrop" class="form-group">
                            <textarea name="observation" id="observation" rows="2" class="form-group__control"
                                      :placeholder="$t('observation-placeholder')"
                                      v-validate="'required'"
                                      v-model="claim.description"></textarea>
                            <small v-show="errors.has('observation')" style="color: red">{{ $t('required_field') }}
                            </small>
                        </div>
                        <div class="">
                            <vue-dropzone ref="claimDropzone" id="claimDropzone" :options="dropzoneOptions"/>
                        </div>

                        <div class="form-group">
                            <input type="checkbox" id="subscribeNews"
                                   v-validate="'required'"
                                   name="subscribe" value="newsletter">
                            <label for="subscribeNews">{{$t('honor-placeholder')}}</label><br>
                            <small v-show="errors.has('subscribe')" style="color: red">{{ $t('required_checkbox') }}
                            </small>
                        </div>
                        <div class="button-group controls">
                            <button v-on:click="claimSave" class="button button--primary">{{$t('button-submit')}}
                            </button>
                            <button type="reset" v-on:click="reInitClaim" class="button button--secondary">
                                {{$t('button-reset')}}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Inputmask from "inputmask";
    import {
        addClass,
        hasClass,
        removeClass,
    } from "./../../../zaza-ui/helpers";

    import NavSplach from "./../../shared/components/NavSplach.vue";
    import vue2Dropzone from "vue2-dropzone";
    import CircularStats from './../stats/CircularStats'

    export default {
        props: [
            "claimer",
            "claim",
            "uploadUrl",
            "processUpload",
            "municipalities",
            "themes",
            "claims"
        ],
        components: {
            NavSplach,
            vueDropzone: vue2Dropzone,
            CircularStats,
        },
        data() {
            return {
                stepOne: true,
                stepTwo: false,
            }
        },
        computed: {
            stylePlaceholder: function () {
                if (this.$i18n.locale === "ar") {
                    return "text-align: right";
                }
                return "";
            },
            dropzoneOptions: function () {
                return {
                    url: this.uploadUrl,
                    thumbnailWidth: 110,
                    thumbnailHeight: 110,
                    maxFilesize: 4,
                    capture: "camera",
                    AcceptedFiles: ["images/*", "audio/*", "video/*", "application/pdf"],
                    dictDefaultMessage: "Upload files<br>" + "إرفاق ملفات",
                    autoProcessQueue: false,
                    addRemoveLinks: true
                };
            },
            statLenght: function () {
                if (this.themes.length > 2) return 2;
                return this.themes.length
            },
            claimsLenght: function () {
                if (this.claims.length === 0) return 1;
                return this.claims.length
            }
        },
        watch: {
            processUpload: function (newVal, oldVal) {
                if (newVal !== false && newVal !== -1) {

                    let dropzone = this.$refs["claimDropzone"].dropzone;
                    let that = this;

                    console.log(dropzone.getQueuedFiles());

                    if (dropzone.getQueuedFiles().length === 0) {
                        that.reInitClaim();
                        return;
                    }

                    dropzone.on("complete", function () {
                        if (dropzone.getQueuedFiles().length === 0) {
                            that.reInitClaim();
                        }
                    });

                    dropzone.options.url =
                        this.uploadUrl + "/" + newVal;
                    this.$refs["claimDropzone"].processQueue();
                }
            }
        },
        methods: {
            claimNext() {
                this.$validator.validateAll().then(result => {
                    if (result) {
                        this.stepOne = false;
                        this.stepTwo = true;
                        return;
                    }
                    return;
                });
            },
            claimSave() {
                this.$validator.validateAll().then(result => {
                    if (result) {
                        this.$emit("saveClaim");
                        return;
                    }
                    this.$notify({
                        group: 'foo',
                        title: 'Attention',
                        text: 'Merci de remplir le formulaire...',
                        type: 'warn'
                    });
                    return;
                });
            },
            reInitClaim() {
                if (this.stepTwo) {
                    this.$refs["claimDropzone"].dropzone.removeAllFiles();
                    this.stepTwo = false;
                    this.stepOne = true;
                }
                this.$emit("resetClaim");
            },
            initialState() {
                const container = document.getElementById("main");
                if (!container.classList.contains("main--off-splash")) {
                    addClass(container, "main--off-splash");
                }
            },
            splash() {
                const niam = document.getElementById("main");
                const openSplashTrigger = document.getElementById("openSplashTrigger");
                const closeSplashTrigger = document.getElementById("closeSplashTrigger");
                const openSplashHandler = () => {
                    if (!hasClass(niam, "main--off-splash")) {
                        addClass(niam, "main--off-splash");
                    }
                };
                const closeSplashHandler = () => {
                    removeClass(niam, "main--off-splash");
                };
                openSplashTrigger.addEventListener("click", openSplashHandler);
                closeSplashTrigger.addEventListener("click", closeSplashHandler);
            }
        },
        mounted() {
            Inputmask().mask(document.querySelectorAll("input"));

            let width =
                window.innerWidth ||
                document.documentElement.clientWidth ||
                document.body.clientWidth;
            if (width > 840) {
                this.initialState();
            }
            this.splash();
        }
    };
</script>
