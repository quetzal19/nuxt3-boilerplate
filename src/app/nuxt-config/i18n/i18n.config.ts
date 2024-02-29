// https://vue-i18n.intlify.dev/guide/installation.html
import { dictionaries } from './locales/index';

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'ru',
  messages: dictionaries,
}));
