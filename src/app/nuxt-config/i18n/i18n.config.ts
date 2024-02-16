import { dictionaries } from './locales/index';

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'kz',
  messages: dictionaries,
}));
