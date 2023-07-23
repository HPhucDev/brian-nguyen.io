import { DefaultSeo as DefaultNextSEO, LogoJsonLd, SocialProfileJsonLd } from 'next-seo';
import { useIntl } from 'react-intl';

import config from 'config';

import Logo from '/public/android-chrome-512x512.png';
import IntroImage from '/public/images/home_hero-image.png';

const DefaultSEO = () => {
  const intl = useIntl();
  const baseUrl = process.env.NEXT_PUBLIC_FRONTEND_DOMAIN || 'https://belga.press/';

  return (
    <>
      <DefaultNextSEO
        dangerouslySetAllPagesToNoIndex={config.BUILD_ENV !== 'production'}
        dangerouslySetAllPagesToNoFollow={config.BUILD_ENV !== 'production'}
        titleTemplate="Hoang Phuc - %s"
        defaultTitle="Hoang Phuc"
        description={intl.formatMessage({ id: 'home.intro.description' })}
        canonical={baseUrl}
        openGraph={{
          url: baseUrl,
          title: 'Hoang Phuc',
          description: 'Open Graph Description',
          type: 'website',
          images: [
            {
              url: baseUrl + IntroImage.src,
              width: IntroImage.width,
              height: IntroImage.height,
              alt: intl.formatMessage({ id: 'home.intro.description' }),
              type: 'image/png',
            },
          ],
          siteName: 'Belga.press',
        }}
        twitter={{
          handle: '@BelgaNewsAgency',
          cardType: 'summary_large_image',
        }}
      />
      <SocialProfileJsonLd
        type="Organization"
        name="Belga.press"
        url={baseUrl}
        sameAs={[
          'https://www.facebook.com/belganewsagency',
          'https://www.youtube.com/user/BelgaNewsAgency',
          'https://www.linkedin.com/company/belga-news-agency/',
          'https://twitter.com/BelgaNewsAgency',
        ]}
      />
      <LogoJsonLd logo={Logo.src} url={Logo.src} />
    </>
  );
};

export default DefaultSEO;
