import * as ruLocales from './ru/index';
import * as enLocales from './en/index';
import * as kzLocales from './kz/index';

const dictionaries = {
  ru: { ...ruLocales },
  en: { ...enLocales },
  kz: { ...kzLocales },
};

export { dictionaries };
