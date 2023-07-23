import { useEffect, useState } from 'react';

type Cookies = {
  action?: boolean;
  advertisement?: boolean;
  analytics?: boolean;
  consent?: boolean;
  consentid?: boolean;
  functional?: boolean;
  necessary?: boolean;
  other?: boolean;
  performance?: boolean;
};

const useCookieConsent = () => {
  const [cookies, setCookies] = useState<Cookies>({});

  useEffect(() => {
    const getCookie = (name: string): Cookies => {
      const cookies = document.cookie || '';
      let match = cookies.match(new RegExp('(^| )' + name + '=([^;]+)'))?.[2];
      let cookieObject: Cookies = {};
      if (match) {
        match.split(',').forEach((cookie) => {
          cookieObject[cookie.split(':')[0] as keyof Cookies] = cookie.split(':')[1] === 'yes';
        });
      }
      return cookieObject;
    };

    const handleCookieChange = () => {
      setCookies(getCookie('cookieyes-consent'));
    };

    document.addEventListener('cookieyes_consent_update', handleCookieChange);

    setCookies(getCookie('cookieyes-consent'));

    return () => {
      document.removeEventListener('cookieyes_consent_update', handleCookieChange);
    };
  }, []);

  return cookies;
};

export default useCookieConsent;
