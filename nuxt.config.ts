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
  devtools: { enabled: process.env.NODE_ENV === 'development' },
  srcDir: 'src/',
  dir: {
    public: 'app/public',
    layouts: 'app/layouts',
    assets: 'app/assets',
    middleware: 'app/middleware',
    plugins: 'app/plugins',
  },
  alias: {
    entities: fileURLToPath(new URL('src/entities/', import.meta.url)),
    features: fileURLToPath(new URL('src/features/', import.meta.url)),
    widgets: fileURLToPath(new URL('src/widgets/', import.meta.url)),
    content: fileURLToPath(new URL('src/shared/content/', import.meta.url)),
    types: fileURLToPath(new URL('src/shared/types/', import.meta.url)),
    assets: fileURLToPath(new URL('src/app/assets/', import.meta.url)),
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
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      ],
    },
  },
  modules: [
    ['@nuxtjs/google-fonts', googleFontsConfig],
    '@pinia/nuxt',
    ['@nuxt/image', imagesConfig],
    ['nuxt-svgo', svgoConfig],
    ['@nuxtjs/i18n', i18nConfig],
    ['@nuxtjs/eslint-module', eslintConfig],
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
});
