import { NextRouter } from 'next/router';

import { Locale } from 'types/i18n.types';

const DEFAULT_LOCALE = 'en';

type NextRouterLocaleProps = Pick<NextRouter, 'locale' | 'defaultLocale'>;
type DefaultLocale = Pick<NextRouter, 'defaultLocale'>;

export const getLocale = ({ locale, defaultLocale }: NextRouterLocaleProps) =>
  (locale ?? defaultLocale ?? DEFAULT_LOCALE) as Locale;

export const getDefaultLocale = (defaultLocale: DefaultLocale) =>
  (defaultLocale ?? DEFAULT_LOCALE) as DefaultLocale;
