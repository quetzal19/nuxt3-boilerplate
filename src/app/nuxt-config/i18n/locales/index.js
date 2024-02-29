import * as ruLocales from './ru/index';
import * as enLocales from './en/index';

const dictionaries = {
  ru: { ...ruLocales },
  en: { ...enLocales },
};

export { dictionaries };
