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
    {
      code: 'kz',
      iso: 'kz-KZ',
      // file: 'kz.ts',
      name: 'Қаз',
    },
  ],
  defaultLocale: 'kz',
  strategy: 'prefix',
  // lazy: true,
  // langDir: 'shared/locales/',
  detectBrowserLanguage: {
    useCookie: true,
    alwaysRedirect: true,
  },
};
