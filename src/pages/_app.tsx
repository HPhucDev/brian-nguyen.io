import 'intersection-observer';

import { EmotionCache } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import type { AppProps } from 'next/app';
// import { usePostHog } from 'next-use-posthog';

import { IntlProvider } from 'services/i18n';
import ThemeContext from 'services/theme-context';

import { PageContainer } from 'components/@screens';
import CookiesScript from 'components/@seo/CookiesScript';
import DefaultSEO from 'components/@seo/DefaultSeo';
import GtmBodyScript from 'components/@seo/GtmBodyScript';
import GtmHeaderScript from 'components/@seo/GtmHeaderScript';

type PageProps = {};

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
  pageProps: PageProps;
}

// declare global {
//   interface Window {
//     posthog: typeof import('posthog-js').posthog;
//   }
// }

function MyApp(props: MyAppProps) {
  const { Component } = props;
  // const [posthogInstance, setPosthogInstance] = useState<PostHog>();

  // const cookies = useCookieConsent();

  // usePostHog(config.POSTHOG_ID, {
  //   loaded: (posthog) => {
  //     if (cookies.analytics) {
  //       posthog.opt_in_capturing();
  //     } else {
  //       posthog.opt_out_capturing();
  //     }
  //     window.posthog = posthog;

  //     setPosthogInstance(posthog);
  //   },
  // });

  // useEffect(() => {
  //   if (!posthogInstance) return;

  //   if (cookies.analytics && isProd()) {
  //     posthogInstance.opt_in_capturing();
  //   } else {
  //     posthogInstance.opt_out_capturing();
  //   }
  // }, [posthogInstance, cookies]);

  return (
    <ThemeContext>
      <CssBaseline />
      <IntlProvider>
        <PageContainer>
          <DefaultSEO />
          <Component {...props.pageProps} />
          <CookiesScript />
          <GtmHeaderScript />
          <GtmBodyScript />
        </PageContainer>
      </IntlProvider>
    </ThemeContext>
  );
}
export default MyApp;
