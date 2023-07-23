export interface ENV_CONFIG {
  NAME: string;
  VERSION: string;
  PORT?: number;
  LOCAL_STORAGE_ID: string;
  DEFAULT_CURRENCY: string;
  DEFAULT_LOCALE: string;
  DEFAULT_LOCALE_DATE: string;
  GTM_ID: string;
  GTM_AUTH: string;
  GTM_ENV: string;
  API_BASE: string;
  POSTHOG_ID: string;
  COOKIEYES: string;
  BUILD_ENV: string;
}

const config: ENV_CONFIG = {
  // general
  NAME: process.env.NEXT_PUBLIC_NAME || '',
  VERSION: process.env.NEXT_PUBLIC_VERSION || '',
  API_BASE: process.env.NEXT_PUBLIC_API_BASE || '',
  BUILD_ENV: process.env.NEXT_PUBLIC_BUILD_ENV || '',

  // analytics
  GTM_ID: process.env.NEXT_PUBLIC_GTM_ID || '',
  GTM_AUTH: process.env.NEXT_PUBLIC_GTM_AUTH || '',
  GTM_ENV: process.env.NEXT_PUBLIC_GTM_ENV || '',
  POSTHOG_ID: process.env.NEXT_PUBLIC_POSTHOG_ID || '',
  COOKIEYES: process.env.NEXT_PUBLIC_COOKIEYES || '',

  // dev
  PORT: Number(process.env.NEXT_PUBLIC_PORT ?? 3000),
  LOCAL_STORAGE_ID: process.env.NEXT_PUBLIC_LOCAL_STORAGE_ID ?? '',
  DEFAULT_CURRENCY: process.env.NEXT_PUBLIC_DEFAULT_CURRENCY ?? 'EUR',
  DEFAULT_LOCALE: process.env.NEXT_PUBLIC_DEFAULT_LOCALE ?? 'en',
  DEFAULT_LOCALE_DATE: process.env.NEXT_PUBLIC_DEFAULT_LOCALE_DATE ?? 'nl',
};

export default config;
