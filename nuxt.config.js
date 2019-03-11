const pkg = require('./package')
import prismic from 'prismic-nuxt'

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Clarisse Garcia - creative designer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'French creative designer, 4th year student at HETIC'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#f00' },

  /*
  ** Global CSS
  */
  css: [],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-svg',
    [
      'prismic-nuxt',
      {
        endpoint: 'https://klarine2019.cdn.prismic.io/api/v2',
        linkResolver: function(doc, ctx) {
          return '/'
        }
      }
    ],
    [
      'nuxt-sass-resources-loader',
      [
        'assets/scss/global.scss',
        'assets/scss/breakpoints.scss',
        'assets/scss/mixins.scss'
      ]
    ]
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    // extend(config, ctx) {
    //   // Run ESLint on save
    //   if (ctx.isDev && ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  }
}
