import '@formatjs/intl-relativetimeformat/locale-data/en';
import '@formatjs/intl-relativetimeformat/locale-data/be';

import { ReactNode } from 'react';
import { IntlProvider as ReactIntlProvider } from 'react-intl';

import { useLocale } from 'hooks/useLocale';

import { intl } from './config';

interface Props {
  children: ReactNode;
}

const IntlProvider = ({ children }: Props) => {
  const { locale } = useLocale();

  return (
    <ReactIntlProvider locale={locale} messages={intl[locale].messages}>
      {children}
    </ReactIntlProvider>
  );
};

export default IntlProvider;
