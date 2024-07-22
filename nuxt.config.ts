// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'url';

// Config modules
import eslintConfig from './src/app/nuxt-config/eslint';
import stylelintConfig from './src/app/nuxt-config/stylelint';
import googleFontsConfig from './src/app/nuxt-config/google-fonts';
import i18nConfig from './src/app/nuxt-config/i18n/i18n';
import swiperConfig from './src/app/nuxt-config/swiper';
import imagesConfig from './src/app/nuxt-config/image';
import svgoConfig from './src/app/nuxt-config/svgo';

export default defineNuxtConfig({
  devtools: { enabled: process.env.NODE_ENV !== 'production' },
  srcDir: 'src/',

  dir: {
    public: 'app/public',
    layouts: 'app/layouts',
    assets: 'app/assets',
    middleware: 'app/middleware',
    plugins: 'app/plugins',
  },

  alias: {
    content: fileURLToPath(new URL('src/shared/content/', import.meta.url)),
    helpers: fileURLToPath(new URL('src/shared/helpers/', import.meta.url)),
  },

  components: [
    {
      path: '~/shared/ui',
      pathPrefix: false,
    },
  ],

  app: {
    head: {
      title: 'nuxt3-boilerplate',
      htmlAttrs: { lang: 'ru' },
      charset: 'utf-8',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    },
  },

  modules: [
    ['@nuxtjs/google-fonts', googleFontsConfig],
    '@pinia/nuxt',
    ['@nuxt/image', imagesConfig],
    ['nuxt-svgo', svgoConfig],
    ['@nuxtjs/i18n', i18nConfig],
    ['@nuxt/eslint', eslintConfig],
    ['@nuxtjs/stylelint-module', stylelintConfig],
    'nuxt-viewport',
    ['nuxt-swiper', swiperConfig],
  ],

  runtimeConfig: {
    // The private keys which are only available server-side
    baseUrl: process.env.NUXT_BASE_URL,
    public: {
      // Keys within public are also exposed client-side
      baseUrl: process.env.NUXT_BASE_URL,
    },
  },

  css: ['normalize.css/normalize.css', '@/app/assets/styles/scss/main.scss'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/app/assets/google-fonts/css/nuxt-google-fonts.css" as *;
            @use "@/app/assets/styles/scss/_colors.scss" as *;
            @use "@/app/assets/styles/scss/_mixins.scss" as *;
          `,
        },
      },
    },
  },

  $development: {
    devtools: { enabled: true },
    routeRules: {
      '/api/**': { cors: true },
    },
  },
  experimental: {
    defaults: {
      nuxtLink: {
        trailingSlash: 'append',
      },
    },
  },

  compatibilityDate: '2024-07-22',
});
