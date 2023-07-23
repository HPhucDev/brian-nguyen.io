import * as NextJS from 'next/types/index';

import { Locale } from 'types/i18n.types';

// Adds support for Locale enum
declare module 'next' {
  export interface GetStaticPropsContext<
    Q extends NextJS.ParsedUrlQuery = NextJS.ParsedUrlQuery,
    D extends NextJS.PreviewData = NextJS.PreviewData,
  > extends NextJS.GetStaticPropsContext<Q, D> {
    locale?: Locale;
    locales?: Locale[];
    defaultLocale?: Locale;
  }

  export interface GetStaticPathsContext extends NextJS.GetStaticPathsContext {
    locales?: Locale[];
    defaultLocale?: Locale;
  }

  export type GetStaticProps<
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    P extends { [key: string]: any } = { [key: string]: any },
    Q extends ParsedUrlQuery = ParsedUrlQuery,
    D extends PreviewData = PreviewData,
  > = (
    context: GetStaticPropsContext<Q, D>,
  ) => Promise<GetStaticPropsResult<P>> | GetStaticPropsResult<P>;
}

export {};
