import Script from 'next/script';

import config from 'config';

const CookiesScript = () => {
  return <Script id="cookieyes" type="text/javascript" src={config.COOKIEYES} />;
};

export default CookiesScript;
