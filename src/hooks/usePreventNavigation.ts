import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useIntl } from 'react-intl';

export const usePreventNavigation = (enabled: boolean) => {
  const router = useRouter();
  const intl = useIntl();

  useEffect(() => {
    if (enabled) {
      window.onbeforeunload = () => true;
    }

    return () => {
      window.onbeforeunload = null;
    };
  }, [enabled]);

  useEffect(() => {
    const handler = (route: string) => {
      // Don't prevent switching languages
      const destination = route.replace('/fr', '').replace('/nl', '');
      if (router.asPath.replaceAll('/', '') === destination.replaceAll('/', '')) {
        return;
      }

      if (enabled && !window.confirm(intl.formatMessage({ id: 'registration.leave.confirm' }))) {
        throw 'Route Canceled';
      }
    };

    router.events.on('routeChangeStart', handler);

    return () => {
      router.events.off('routeChangeStart', handler);
    };
  }, [enabled, router.route, router.asPath, router.events, intl]);
};
