export const getDomainFromHostname = (host: string = '') => {
  const urlParts = host.split('.');
  const subDomain = urlParts.shift();
  const upperDomain = urlParts.join('.');
  return { urlParts, subDomain, upperDomain };
};

export const hasWindow = () => typeof window !== 'undefined';
