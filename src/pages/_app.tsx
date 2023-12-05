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
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

type PageProps = {};

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
  pageProps: PageProps;
}
// Create a client
const queryClient = new QueryClient();

function MyApp(props: MyAppProps) {
  const { Component } = props;

  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}
export default MyApp;
