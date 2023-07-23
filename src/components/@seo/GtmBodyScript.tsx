import config from 'config';

const GtmBodyScript = () => {
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${config.GTM_ID}&gtm_auth=${config.GTM_AUTH}&gtm_preview=${config.GTM_ENV}&gtm_cookies_win=x`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      />
    </noscript>
  );
};

export default GtmBodyScript;
