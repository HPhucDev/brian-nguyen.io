import { DefaultSeo as DefaultNextSEO, LogoJsonLd, SocialProfileJsonLd } from 'next-seo';
import { useIntl } from 'react-intl';

import config from 'config';

import Logo from '/public/android-chrome-512x512.png';
import IntroImage from '/public/images/home_hero-image.png';

const DefaultSEO = () => {
  const intl = useIntl();
  const baseUrl = 'https://hoangphuc.lightup.io.vn/';

  return (
    <>
      <DefaultNextSEO
        dangerouslySetAllPagesToNoIndex={config.BUILD_ENV !== 'production'}
        dangerouslySetAllPagesToNoFollow={config.BUILD_ENV !== 'production'}
        titleTemplate="Hoang Phuc - %s"
        defaultTitle="Hoang Phuc"
        description={"A boy dreams to create value for others via software products "}
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
              type: 'image/png',
            },
          ],
          siteName: 'https://hoangphuc.lightup.io.vn',
        }}
        twitter={{
          handle: '@HPhucDev',
          cardType: 'summary_large_image',
        }}
      />
      <SocialProfileJsonLd
        type="Organization"
        name="HoangPhuc.Developer"
        url={baseUrl}
        sameAs={[
          'https://www.facebook.com/hoangphucdevelopervn',
          'https://www.linkedin.com/in/hoang-phuc-developer/',
          'https://twitter.com/HPhucDev',
        ]}
      />
      <LogoJsonLd logo={Logo.src} url={Logo.src} />
    </>
  );
};

export default DefaultSEO;
