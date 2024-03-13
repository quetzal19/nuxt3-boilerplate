// https://i18n.nuxtjs.org/docs/options
export default {
  // vueI18n: 'src/app/nuxt-config/i18n/i18n.config.ts',
  locales: [
    {
      code: 'ru',
      iso: 'ru-Ru',
      file: 'ru/ru.ts',
      name: 'Рус',
    },
    {
      code: 'en',
      iso: 'en-US',
      file: 'en/en.ts',
      name: 'Eng',
    },
  ],
  defaultLocale: 'ru',
  strategy: 'prefix_except_default',
  lazy: true,
  langDir: 'app/nuxt-config/i18n/locales/',
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: 'x-language-id',
    alwaysRedirect: true,
    fallbackLocale: 'ru',
    redirectOn: 'root',
  },
};
