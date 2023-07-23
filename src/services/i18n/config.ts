import '@formatjs/intl-relativetimeformat/locale-data/en';
import '@formatjs/intl-relativetimeformat/locale-data/fr';
import '@formatjs/intl-relativetimeformat/locale-data/nl';
import '@formatjs/intl-relativetimeformat/locale-data/be';

import { createIntl, createIntlCache, IntlShape } from 'react-intl';

import MESSAGES_EN from './translations/en.json';
import MESSAGES_VI from './translations/vi.json';

const intlCache = createIntlCache();

const intl: { [key: string]: IntlShape } = {
  en: createIntl({ locale: 'en', messages: MESSAGES_EN }, intlCache),
  vi: createIntl({ locale: 'vi', messages: MESSAGES_VI }, intlCache),
};

export { intl };
