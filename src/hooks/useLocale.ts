import { setCookie } from 'cookies-next';
import { useRouter } from 'next/router';

import { getDomainFromHostname, hasWindow } from 'utils/browser.utils';
import { getLocale } from 'utils/i18n.utils';

export const useLocale = () => {
  const router = useRouter();

  const updateLocale = (locale: string) => {
    let host = hasWindow() ? window.location.host : '';
    host = host?.includes(':') ? host?.slice(0, host.indexOf(':')) : host;
    const { upperDomain } = getDomainFromHostname(host);

    setCookie('NEXT_LOCALE', locale, {
      domain: upperDomain ?? host,
      sameSite: 'none',
      secure: true,
    });

    router.replace(router.pathname, router.asPath, { locale });
  };

  return {
    locale: getLocale(router),
    updateLocale,
  };
};
