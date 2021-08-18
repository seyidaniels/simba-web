require('dotenv').config()

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - simba-web',
    title: 'simba-app',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/fontface.css', '~/assets/scss/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios.js',
    '~/plugins/vee-validate',
    '~/plugins/clientAppMounted.js',
    '~/plugins/components.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    // https://github.com/nuxt-community/svg-module
    '@nuxtjs/svg',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/universal-storage',
  ],
  env: {
    API: process.env.API_URL || 'http://localhost:8000',
    BASE_URL: process.env.APP_URL,
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.API_URL,
    proxyHeaders: false,
    credentials: false,
    timeout: 90000,
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    treeShake: true,
    defaultAssets: {
      font: {
        family: 'BR Firma',
      },
      icons: 'fa',
    },

    customVariables: [
      '~/assets/scss/variables.scss',
      '~/assets/scss/mixins.scss',
    ],
    theme: {
      dark: false,
      options: { customProperties: true },
      themes: {
        light: {
          white: '#ffffff',
          primary: '#372AA4',
          warning: '#FFB61B',
          error: '#EF233C',
          success: '#06AC62',
          neutral: '#172B4D',
          'auth-bg': '#F7F7FC',
          label: '#989898',
          blue: {
            base: '#244FBE',
            lighten1: '#3D6BE1',
            lighten2: '#5282FF',
            lighten3: '#72A2FF',
            lighten4: '#BFD5FF',
          },
          peach: {
            base: '#EF7970',
            lighten1: '#FF948C',
            lighten2: '#FFB4AE',
            lighten3: '#FFC8C4',
            lighten4: '#FFE1DF',
          },
          turquoise: {
            base: '#92D7FB',
            lighten1: '#A7E1FF',
            lighten2: '#BEE9FF',
            lighten3: '#D6F1FF',
            lighten4: '#EEF9FF',
          },
          yellow: {
            base: '#F9D576',
            lighten1: '#FFE399',
            lighten2: '#FFEFC4',
            lighten3: '#FFEDBC',
            lighten4: '#FFF5DC',
          },
          red: {
            base: '#EF233C',
            lighten1: '#F0475C',
            lighten2: '#FF7485',
            lighten3: '#FD93A0',
            lighten4: '#FFC0C8',
          },
          seagreen: {
            base: '#28AFB0',
            lighten1: '#49DADB',
            lighten2: '#71EFF0',
            lighten3: '#BCF8F9',
            lighten4: '#E0FFFF',
          },
          purple: {
            base: '#372AA4',
            lighten1: '#6558D7',
            lighten2: '#8E83F1',
            lighten3: '#B0A7FF',
            lighten4: '#D9D5FB',
          },
          grey: {
            base: '#2F2F2F',
            lighten1: '#6C757D',
            lighten2: '#ADB5BD',
            lighten3: '#CED4DA',
            lighten4: '#DEE2E6',
          },
          pink: {
            base: '#EE7A9C',
            lighten1: '#F881A4',
            lighten2: '#FF9CB9',
            lighten3: '#FEB0C7',
            lighten4: '#FFC8D8',
          },
          blush: {
            base: '#DCA4B8',
            lighten1: '#EBAEC4',
            lighten2: '#FABED4',
            lighten3: '#FCD6E4',
            lighten4: '#FEE9F1',
          },
          teal: {
            base: '#64BEC8',
            lighten1: '#74CCD6',
            lighten2: '#88E0EA',
            lighten3: '#A8F3FC',
            lighten4: '#C0F9FF',
          },
          nude: {
            base: '#EAB8A9',
            lighten1: '#FAC7B8',
            lighten2: '#FFDBD0',
            lighten3: '#FFEBE5',
            lighten4: '#FFF7F7',
          },
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // Transition
  pageTransition: {
    name: 'page',
    mode: 'out-in',
  },

  layoutTransition: {
    name: 'layout',
    mode: 'out-in',
  },
}
