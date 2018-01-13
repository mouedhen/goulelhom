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
        "button-reset": "Cancel"
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
        "button-reset": "إلغاء"
    }
}
</i18n>
<template>
    <div class="content__foreground">
        <div id="splash" class="foreground__splash foreground__splash--2">
            <nav-splach style="color: #333333"/>
            <form action="#" enctype="multipart/form-data">
                <div class="grid">
                    <div class="grid__inner">
                        <div class="cell--large-12">
                            <h1 class="form-title">{{ $t('complains-title') }}</h1>
                        </div>
                        <div class="cell cell--medium-8 cell--large-12 form-group">
                            <input type="text" id="name" class="form-group__control" name="name">
                            <label for="name" class="form-group__label">
                                {{ $t('name-placeholder') }}
                            </label>
                        </div>
                        <div class="cell cell--medium-8 cell--large-12 form-group">
                            <input type="text" id="phone" class="form-group__control" name="phone">
                            <label for="phone" class="form-group__label">
                                {{ $t('phone-placeholder') }}
                            </label>
                        </div>
                        <div class="cell cell--medium-8 cell--large-12 form-group">
                            <input type="text" id="municipality" class="form-group__control" name="municipality">
                            <label for="municipality" class="form-group__label">
                                {{ $t('municipality-placeholder') }}
                            </label>
                        </div>
                        <div class="cell cell--medium-8 cell--large-12 form-group">
                            <input type="text" id="subject" class="form-group__control" name="subject">
                            <label for="subject" class="form-group__label">
                                {{ $t('subject-placeholder') }}
                            </label>
                        </div>
                        <div id="textareaDrop" class="cell cell--medium-8 cell--large-12 form-group">
                            <textarea name="observation" id="observation" rows="2" class="form-group__control"></textarea>
                            <label for="observation" class="form-group__label">
                                {{ $t('observation-placeholder') }}
                            </label>
                        </div>
                        <div class="cell cell--large-12">

                            <div class="UppyModalOpenerBtn button button--secondary" style="width: 100%">{{ $t('attach-placeholder') }}</div>

                            <div class="DashboardContainer"></div>

                        </div>
                        <div class="cell cell--medium-8 cell--large-12 button-group controls">
                            <input type="submit" :value="$t('button-submit')" class="button button--primary"/>
                            <input type="reset" :value="$t('button-reset')" class="button button--secondary"/>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    const Uppy = require('uppy/lib/core');
    const Dashboard = require('uppy/lib/plugins/Dashboard');
    const Webcam = require('uppy/lib/plugins/Webcam');
    const Tus = require('uppy/lib/plugins/Tus');

    import {addClass, hasClass, removeClass} from './../../../zaza-ui/helpers'

    import NavSplach from './../../shared/components/NavSplach.vue'

    export default {
        components: {
            NavSplach
        },
        computed: {
            appyLocale: function() {
                if (this.$i18n.locale === 'ar') {
                    return {
                        strings: {
                            selectToUpload: 'حدد الملفات المراد تحميلها',
                            closeModal: 'أغلق مودال',
                            upload: 'تحميل',
                            importFrom: 'استيراد الملفات من',
                            dashboardWindowTitle: 'نافذة لوحة وبي (اضغط الهروب لإغلاق)',
                            dashboardTitle: 'لوحة مفاتيح وبي',
                            copyLinkToClipboardSuccess: 'تم نسخ الرابط إلى الحافظة.',
                            copyLinkToClipboardFallback: 'انسخ عنوان ورل أدناه',
                            fileSource: 'مصدر الملف',
                            done: 'انتهى',
                            localDisk: 'القرص المحلي',
                            myDevice: 'جهازي',
                            dropPasteImport: 'يمكنك إسقاط الملفات هنا أو لصقها أو استيرادها من أحد المواقع أعلاه أو',
                            dropPaste: 'إسقاط الملفات هنا، لصق أو',
                            browse: 'تصفح',
                            fileProgress: 'تقدم الملف: سرعة التحميل و إيتا',
                            numberOfSelectedFiles: 'عدد الملفات المحددة',
                            uploadAllNewFiles: 'تحميل جميع الملفات الجديدة',
                            emptyFolderAdded: 'لم تتم إضافة أية ملفات من المجلد الفارغ',
                            folderAdded: {
                                0: 'Added %{smart_count} file from %{folder}',
                                1: 'Added %{smart_count} files from %{folder}'
                            }
                        }
                    }
                }
                return {
                    strings: {
                        selectToUpload: 'Select files to upload',
                        closeModal: 'Close Modal',
                        upload: 'Upload',
                        importFrom: 'Import files from',
                        dashboardWindowTitle: 'Uppy Dashboard Window (Press escape to close)',
                        dashboardTitle: 'Uppy Dashboard',
                        copyLinkToClipboardSuccess: 'Link copied to clipboard.',
                        copyLinkToClipboardFallback: 'Copy the URL below',
                        fileSource: 'File source',
                        done: 'Done',
                        localDisk: 'Local Disk',
                        myDevice: 'My Device',
                        dropPasteImport: 'Drop files here, paste, import from one of the locations above or',
                        dropPaste: 'Drop files here, paste or',
                        browse: 'browse',
                        fileProgress: 'File progress: upload speed and ETA',
                        numberOfSelectedFiles: 'Number of selected files',
                        uploadAllNewFiles: 'Upload all new files',
                        emptyFolderAdded: 'No files were added from empty folder',
                        folderAdded: {
                            0: 'Added %{smart_count} file from %{folder}',
                            1: 'Added %{smart_count} files from %{folder}'
                        }
                    }
                }
            }
        },
        methods: {
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
            },
            form() {
                const formGroup = document.querySelectorAll('.form-group'); // eslint-disable-line no-undef

                // const uploadFile1 = document.getElementById('uploadFile1'); // eslint-disable-line no-undef

                // const uploadFile2 = document.getElementById('uploadFile2'); // eslint-disable-line no-undef

                if (formGroup !== null) {
                    for (const form of formGroup) { // eslint-disable-line no-restricted-syntax
                        const control = form.querySelector('.form-group__control');
                        control.addEventListener('focus', () => {
                            addClass(form, 'form-group--focused');
                        });

                        control.addEventListener('blur', () => {
                            removeClass(form, 'form-group--focused');
                        });
                    }
                }
                /*
                if (uploadFile1 !== null) {
                    uploadFile1.addEventListener('click', () => {
                        // const event = document.createEvent('HTMLEvents'); // eslint-disable-line no-undef
                        // event.initEvent('click', true, false);
                        // uploadFile2.dispatchEvent(event);
                        uploadFile2.click();
                    });
                }
                */
            },
            fileUploader() {
                const uppy = Uppy({
                    debug: false,
                    autoProceed: false,
                    restrictions: {
                        maxFileSize: 1000000,
                        maxNumberOfFiles: 5,
                        allowedFileTypes: ['image/*', 'video/*']
                    }
                })
                    .use(Dashboard, {
                        trigger: '.UppyModalOpenerBtn',
                        target: '.DashboardContainer',
                        inline: false,
                        replaceTargetContent: true,
                        note: null,
                        maxHeight: 300,
                        locale: this.appyLocale
                    })
                    .use(Webcam, { target: Dashboard })
                    .run();
                uppy.on('complete', result => {
                    console.log('successful files:', result.successful);
                    console.log('failed files:', result.failed)
                })
            }
        },
        mounted() {
            this.initialState();
            this.splash();
            this.form();
            this.fileUploader();
        }
    }
</script>
