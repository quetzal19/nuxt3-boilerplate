// https://i18n.nuxtjs.org/docs/options
// TODO подключить через langDir не получилось
export default {
  vueI18n: 'src/app/nuxt-config/i18n/i18n.config.ts',
  locales: [
    {
      code: 'ru',
      iso: 'ru-Ru',
      // file: 'ru.ts',
      name: 'Рус',
    },
    {
      code: 'en',
      iso: 'en-US',
      // file: 'en.ts',
      name: 'Eng',
    },
  ],
  defaultLocale: 'ru',
  strategy: 'prefix_except_default',
  // lazy: true,
  // langDir: 'app/nuxt-config/i18n/locales',
  detectBrowserLanguage: {
    useCookie: true,
    alwaysRedirect: true,
  },
};
