const mix = require('laravel-mix');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const WebpackRTLPlugin = require('webpack-rtl-plugin');

let extractPlugins = [];
let vueExtractPlugin;

if (Config.extractVueStyles) {
    let fileName = typeof(Config.extractVueStyles) === "string" ? Config.extractVueStyles : 'vue-styles.css';
    let filePath = fileName.replace(Config.publicPath, '').replace(/^\//, "");
    vueExtractPlugin = extractPlugins.length ? extractPlugins[0] : new ExtractTextPlugin(filePath);
}

mix.options({
    postCss: [
        require('autoprefixer')({
            browsers: ['last 2 versions'],
            cascade: false
        })
    ]
})
    .js('resources/assets/js/app.js', 'public/js')
    .sass('resources/assets/sass/app.scss', 'public/css')
    .extract([
        '@finpo/vue2-recaptcha-invisible',
        'animejs',
        'axios',
        'fine-uploader',
        'flexboxgrid-sass',
        'flickity',
        'houdinijs',
        'inputmask',
        'leaflet',
        'leaflet.locatecontrol',
        'lodash',
        'normalize.css',
        'uppy',
        'vee-validate',
        'vue',
        'vue-analytics',
        'vue-cookie',
        'vue-i18n',
        'vue-mc',
        'vue-notification',
        'vue-resource',
        'vue-router',
        'vue2-dropzone',
        'vue2-leaflet',
        'vue2-leaflet-markercluster',
        'vuex'
    ])
    .webpackConfig({
        plugins: [
            new LiveReloadPlugin(),
            new WebpackRTLPlugin('/public/css/[name].rtl.css')
        ],
        module: {
            rules: [
                {
                    test: /\.svg$/,
                    loader: 'svg-inline-loader!vue-svg-loader',
                    options: {
                        // optional [svgo](https://github.com/svg/svgo) options
                        svgo: {
                            plugins: [
                                {removeDoctype: true},
                                {removeComments: true}
                            ]
                        }
                    }
                },
                {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                    exclude: /bower_components/,
                    options: {
                        extractCSS: Config.extractVueStyles,
                        loaders: Config.extractVueStyles ? {
                            js: {
                                loader: 'babel-loader',
                                options: Config.babel()
                            },

                            scss: vueExtractPlugin.extract({
                                use: 'css-loader!sass-loader',
                                fallback: 'vue-style-loader'
                            }),

                            sass: vueExtractPlugin.extract({
                                use: 'css-loader!sass-loader?indentedSyntax',
                                fallback: 'vue-style-loader'
                            }),

                            css: vueExtractPlugin.extract({
                                use: 'css-loader',
                                fallback: 'vue-style-loader'
                            }),

                            stylus: vueExtractPlugin.extract({
                                use: 'css-loader!stylus-loader?paths[]=node_modules',
                                fallback: 'vue-style-loader'
                            }),

                            less: vueExtractPlugin.extract({
                                use: 'css-loader!less-loader',
                                fallback: 'vue-style-loader'
                            }),
                            i18n: '@kazupon/vue-i18n-loader',
                        } : {
                            js: {
                                loader: 'babel-loader',
                                options: Config.babel()
                            },
                            i18n: '@kazupon/vue-i18n-loader',
                        },
                        postcss: Config.postCss,
                        preLoaders: Config.vue.preLoaders,
                        postLoaders: Config.vue.postLoaders,
                        esModule: Config.vue.esModule
                    }
                }
            ],
            loaders: [
                {
                    test: /\.css$/,
                    loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
                }
            ],
        }
    })
    .disableNotifications();
