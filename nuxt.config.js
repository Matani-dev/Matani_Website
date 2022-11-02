export default {
  env: {
    apiUrl: process.env.API_URL,
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Matani - Feedback Tool for Designers',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    'nuxt-gsap-module'
  ],

  gsap: {
    extraPlugins: {
      scrollTo: true,
      scrollTrigger: true
    },
  },

  googleFonts: {
    families: {
      'Lexend+Exa': [400, 500, 600, 700, 800],
      'Inter': [400, 500, 600, 700, 800],
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'vue-plausible',
    '@nuxtjs/sitemap',
  ],

  sitemap: {
    hostname: 'https://matani.dev',
    gzip: true,
    routes: [
      '/',
    ]
  },

  plausible: {
    domain: 'matani.dev'
  },

  publicRuntimeConfig: {
    plausible: {
      domain: 'matani.dev',
      apiHost: 'https://analytics.exord.de',
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    //baseURL: "64.227.76.212:8080/api/v1",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
